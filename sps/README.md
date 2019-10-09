# News React App
The goal is to implement a small React/Redux (not mandatory) app to display a list (or table) of news with a few properties like title (= link with url), author, and number of comments.
You should follow best-practices when building the app so that everything is setup in a clean way and ready to be extended by a small team.

## The basic app should
* List hackernews articles (use the most important properties like author, title, num_comments, etc)
* Has a search input field to query articles on the server using the "query" parameter
* Has some basic styling in place

## Additional features
* Master-Detail view: When you click on an entry – open a detail view of that article
* Has a button to load more articles and append these at the bottom of the table.
* A “dismiss” button to remove entries from the list
* Add some tests (not mandatory)

## Search/ List News
[https://hn.algolia.com/api/v1/search](https://hn.algolia.com/api/v1/search)

### Parameters:
* `query= …` search term
* `page=…` page offset, default 0
* `hitsPerPage=…` entries to fetch per page

## Single Story (for Detail Drilldown):
[https://hn.algolia.com/api/v1/items/:id](https://hn.algolia.com/api/v1/items/:id)


#  Code Base
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  Available Scripts
In the project directory, you can run all [CRA scripts]([https://github.com/facebook/create-react-app#creating-an-app](https://github.com/facebook/create-react-app#creating-an-app)).