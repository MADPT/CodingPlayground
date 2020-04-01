# Opening hours assignment (frontend)

> Version 2.1

Your task is to write a program that takes JSON-formatted opening hours of a restaurant as an input and outputs hours as presented it the following design:

[Design](design_assets/opening_hours_design.png)

## Input data

Input JSON consist of keys indicating days of a week and corresponding opening hours as values. One JSON file includes data for one restaurant.

```json
{
    "<dayofweek>": "<opening hours>",
    "<dayofweek>": "<opening hours>",
    ...
}
```

**Day of week:** `monday` | `tuesday` | `wednesday` | `thursday` | `friday` | `saturday` | `sunday` **Opening hours:** an array of objects containing opening hours.

Each object consist of two keys:

- type: `open` | `close`
- value: `number` (opening / closing time as seconds past midnight), e.g. 32400 = 9 AM, 37800 = 10.30 AM, max value is 86399 = 11:59:59 PM

**Example:** on Mondays a restaurant is open from 9 AM to 8 PM

```json
{
  "monday": [
    { "type": "open", "value": 32400 },
    { "type": "close", "value": 72000 }
  ]
}
```

## Special cases

- If a restaurant is closed the whole day, an array of opening hours is empty. - `"tuesday": []` means a restaurant is closed on Tuesdays
- A restaurant can be opened and closed multiple times during the same day - E.g. on Mondays from 9 AM - 11 AM and from 1 PM to 5 PM
- A restaurant might not be closed during the same day - E.g. a restaurant is opened on a Sunday evening and closed on early Monday morning. In that case `sunday` object includes only the opening time. Closing time is part of the `monday` object.
- When printing opening hours which span between multiple days, closing time is always a part of the day when a restaurant was opened (e.g. Sunday 8 PM - 1 AM)

```json
{
  "friday": [
    {
      "type": "open",
      "value": 64800
    }
  ],
  "saturday": [
    {
      "type": "close",
      "value": 3600
    },
    {
      "type": "open",
      "value": 32400
    },
    {
      "type": "close",
      "value": 39600
    },
    {
      "type": "open",
      "value": 57600
    },
    {
      "type": "close",
      "value": 82800
    }
  ]
}
```

In the example above the opening hours are as follows:

```
Friday: 6 PM - 1 AM
Saturday: 9 AM -11 AM, 4 PM - 11 PM
```

> See full example on the last page

## Logical output

Opening hours must be printed using 12-hour clock. Example of logical output:

```
Monday: 8 AM - 10 AM, 11 AM - 6 PM
Tuesday: Closed
Wednesday: 11 AM - 6 PM
Thursday: 11 AM - 6 PM
Friday: 11 AM - 9 PM
Saturday: 11 AM - 9 PM
Sunday: Closed
```

## Reading input and formatting output

A minimum requirement is to read JSON data from a file and output opening hours in a view that is designed based on the layouts provided. However, this is where you can dazzle us with your platform specific skills.

## Tech & tools

Feel tree to use JavaScript or any programming language that compiles to JavaScript (e.g. Typescript). 3rd party libraries and frameworks are also allowed.

## Deliverable

Send a link to your GitHub repo or bundle everything into a Zip archive and email it to us. Remember that it is easier for us to review your task if we can test / run it.

A good check before sending you task is to clone the repository / unzip the Zip archive into a new folder and check that building and running the project works, using the steps you define in readme.md. Forgotten dependencies and instructions can sometimes happen even to the best of us.

## Design assets

> Design assets to help implement the UI

### Colors

[Colors guideline](design_assets/colors_guidelines.png)

### Font

[https://fonts.google.com/specimen/Roboto](https://fonts.google.com/specimen/Roboto)

[Font guideline](design_assets/font_guidelines.png)

## Full data formatting example

```json
{
  "monday": [],
  "tuesday": [
    { "type": "open", "value": 36000 },
    { "type": "close", "value": 64800 }
  ],
  "wednesday": [],
  "thursday": [
    { "type": "open", "value": 36000 },
    { "type": "close", "value": 64800 }
  ],
  "friday": [{ "type": "open", "value": 36000 }],
  "saturday": [
    { "type": "close", "value": 3600 },
    { "type": "open", "value": 36000 }
  ],
  "sunday": [
    { "type": "close", "value": 3600 },
    { "type": "open", "value": 43200 },
    { "type": "close", "value": 75600 }
  ]
}
```

In the example above the opening hours are as follows:

```
Monday: Closed
Tuesday: 10 AM - 6 PM
Wednesday: Closed
Thursday: 10 AM - 6 PM
Friday: 10 AM - 1 AM
Saturday: 10 AM - 1 AM
Sunday: 12 PM - 9 PM
```

## Code Base

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run all [CRA scripts](https://github.com/facebook/create-react-app#creating-an-app).

** Note: ** Due to [Concurrently](https://www.npmjs.com/package/concurrently), running `npm start` while also run `json-server` concurrently.
