/** CONFIG */
const API = {
  // url: "https://api.name.com/assignment",
  url: "http://localhost:4000/assignment",
  endpoints: {
    register: "/register",
    posts: "/posts"
  },
  pageLimit: 10
};
const credentials = {
  client_id: "ju16a6m81mhid5ue1z3v2g0uh",
  email: "dev@miguelangelo.io",
  name: "Miguel Angelo",
  sl_token: ""
};

const processedPostsData = {
  charactersData: {},
  postsData: {}
};

/**
 * Process post characters in order to get:
 * Average character length of a post / month
 * Longest post by character length / month
 *
 * @param  {String} message     Post message
 * @param  {String} createdTime Post creation date
 */
function handleCharactersData(message, createdTime) {
  let charactersData = processedPostsData.charactersData;
  let date = {
    year: getDateValue(createdTime, "year"),
    month: getDateValue(createdTime, "month") + 1
  };
  let messageLength = message.length;

  if (!charactersData.hasOwnProperty(date.year)) {
    charactersData[date.year] = {};
  }

  if (!charactersData[date.year].hasOwnProperty(date.month)) {
    charactersData[date.year][date.month] = {
      totalPosts: 0,
      totalLength: 0,
      longestPost: 0,
      averageLength: 0
    };
  }

  let dataPerMonth = charactersData[date.year][date.month];

  dataPerMonth.totalPosts++;
  dataPerMonth.totalLength += messageLength;

  // Average character length of a post / month
  dataPerMonth.averageLength = dataPerMonth.totalLength / dataPerMonth.totalPosts;

  // Longest post by character length / month
  dataPerMonth.longestPost = dataPerMonth.longestPost < messageLength ? (dataPerMonth.longestPost = messageLength) : dataPerMonth.longestPost;
}

/**
 * Process posts in order to get:
 * Total posts split by week
 * Average number of posts per user / month
 *
 * @param  {String} userId      User ID
 * @param  {String} createdTime Post creation date
 */
function handlePostsData(userId, createdTime) {
  let postsData = processedPostsData.postsData;
  let date = {
    year: getDateValue(createdTime, "year"),
    month: getDateValue(createdTime, "month") + 1,
    week: getDateValue(createdTime, "week")
  };

  if (!postsData.hasOwnProperty(date.year)) {
    postsData[date.year] = {};
  }

  if (!postsData[date.year].hasOwnProperty(date.month)) {
    postsData[date.year][date.month] = {
      userTotal: {},
      average: 0,
      totalPerWeek: {}
    };
  }

  let dataPerMonth = postsData[date.year][date.month];

  if (!dataPerMonth["totalPerWeek"].hasOwnProperty(date.week)) {
    postsData[date.year][date.month]["totalPerWeek"][date.week] = 0;
  }

  // Total posts split by week
  postsData[date.year][date.month]["totalPerWeek"][date.week]++;

  if (!dataPerMonth["userTotal"].hasOwnProperty(userId)) {
    dataPerMonth["userTotal"][userId] = 0;
  }

  dataPerMonth["userTotal"][userId]++;

  // Average number of posts per user / month
  dataPerMonth["average"] = Object.values(dataPerMonth["userTotal"]).reduce((t, n) => t + n) / Object.keys(dataPerMonth["userTotal"]).length;
}

/**
 * Loop through posts and pass data to be processed
 *
 * @param  {Object} posts       All user posts
 * @returns {Promise}           Promise object represents the processed posts
 */
function processPosts(posts) {
  return new Promise((resolve, reject) => {
    for (let post in posts) {
      if (posts.hasOwnProperty(post)) {
        let singlePost = posts[post];

        handleCharactersData(singlePost.message, singlePost.created_time);
        handlePostsData(singlePost.from_id, singlePost.created_time);
      }
    }

    resolve(processedPostsData);
  });
}

/**
 * Trigger chain of methods to complete de assignment
 */
function runAssignment() {
  fetchData()
    .then(posts => {
      return processPosts(posts);
    })
    .then(data => {
      console.log(data);
    });
}

runAssignment();

/** API */

/**
 * Fetch API data
 *
 * @returns {Promise} Promise object represents all posts
 */
function fetchData() {
  return new Promise((resolve, reject) => {
    registerToken()
      .then(token => {
        return getPosts(token, [], 1);
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => reject(err));
  });
}

/**
 * Register client's token
 *
 * @returns {Promise} Promise object represents API token
 */
function registerToken() {
  return fetch(API.url + API.endpoints.register, {
    /* method: 'POST', */
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    // body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(data => {
      return (credentials.sl_token = data.data.sl_token);
    });
}

/**
 * Fetch all posts data
 *
 * @returns {Promise} Promise object represents all posts
 */
function getPosts(token, allData, page) {
  return fetch(API.url + API.endpoints.posts + "?sl_token=" + token + "&page=" + page, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      allData = [...allData, ...data[0].posts];
      let nextPage = page + 1;
      if (nextPage <= API.pageLimit) return getPosts(token, allData, nextPage);
      else return allData;
    });
}

/** HELPERS */

/**
 * Get week, month and year values
 *
 * @param  {String} ISOdate   Date (ISO formate)
 * @param  {String} timeFrame Desired time frame data
 * @returns {Number} Week/Month/Year number
 */
function getDateValue(ISOdate, timeFrame) {
  /* For a given date, get the ISO week number
   *
   * Based on information at:
   *
   *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
   *
   * Algorithm is to find nearest thursday, it's year
   * is the year of the week number. Then get weeks
   * between that date and the first day of that year.
   *
   * Note that dates in one year can be weeks of previous
   * or next year, overlap is up to 3 days.
   *
   * e.g. 2014/12/29 is Monday in week  1 of 2015
   *      2012/1/1   is Sunday in week 52 of 2011
   */

  let date = new Date(ISOdate);

  switch (timeFrame) {
    case "week":
      let dayNum = date.getUTCDay() || 7;
      date.setUTCDate(date.getUTCDate() + 4 - dayNum);
      let yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));

      return Math.ceil(((date - yearStart) / 86400000 + 1) / 7);

    case "month":
      return date.getMonth();

    case "year":
      return date.getFullYear();

    default:
      console.error("No time frame provided");
      break;
  }
}
