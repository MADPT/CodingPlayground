# Dynamic product list, atomic design + REST API integration
We have well defined career appraisal policy, for the Front-End engineer it is expected that the term "Ajax" is not associated with the big three:

* [FC AJAX](https://en.wikipedia.org/wiki/AFC_Ajax)
* [AJAX cleaner](https://en.wikipedia.org/wiki/Ajax_(cleaning_product))
* [AJAX from Greek mythology](https://en.wikipedia.org/wiki/Ajax_(mythology))

Instead, the right candidate will know that the concept of AJAX is somehow one of the most important building blocks of JavaScript. Asynchronous, that is the word.

In this task, the page DOM will initially be almost empty. Only the placeholder for component and resources should be coded in the page.

Data will be provided via the REST API we built for this purpose.

Goal is to have the product list dynamically loaded into the page, by using the magical wonder called AJAX... Aside from JavaScript logic, the result should be coded by using [Atomic design](http://atomicdesign.bradfrost.com/table-of-contents/) approach.

## Design
[Design](atomic-design_rest-api.png)

## REST API
API will be prepared and implemented with [json-server](https://github.com/typicode/json-server).

There will be 2 end points:

* http://x.x.x.x:port/products
* http://x.x.x.x:port/products/product-id

First returns the list of products.

Second returns one product. It requires the product id.

API will be run either locally (on candidates machine) or on some computer within the local network. Either way, actual end points will be provided.

## JSON structure
```
{
  "products": [
    {
      "id": 1,
      "label": "Maverick Chronograph",
      "short-description": "Blue, 43 mm",
      "price": "100 chf",
      "sale": false,
      "product-photo": "img/watch.png"
    },
    {
      "id": 2,
      "label": "Swiss unlimited energy eau de cologne",
      "short-description": "150 ml",
      "price": "37 chf",
      "sale": true,
      "product-photo": "img/cologne.png"
    },
    {
      "id": 3,
      "label": "Translucent cap II",
      "short-description": "Navy, one",
      "price":"89 chf",
      "sale": false,
      "product-photo": "img/cap.png"
    },
    {
      "id": 4,
      "label": "Apple iPhone 7",
      "short-description": "Black",
      "price":"799 chf",
      "sale": false,
      "product-photo": "img/iphone7.png"
    }
  ]
}
```

## Assignment
* Split Product list in components, following Atomic Design.
* Consider: It's Responsive Web Design
* Write the JavaScript logic to fetch the data from REST API and populate the components.
* Style the components following [BEM](http://getbem.com/) - Side note: not production ready basic layout and probably webfonts

## Presentation
Purpose of the presentation is to explain your approach and implementation to our team. Technical solution is always important but we will evaluate the approach even more. Your ability to communicate the outcome, pros and cons of it and overall challenges is highly valuable. If there is time left explain how you would implement a combination of an CMS and an eCommerce Platform. Assumption: the eCommerce part has an REST API.

## Time frame
You will have 1.5 hours for implementation. Do not rush, that time period sounds like tight deadline but we do not expect production ready outcome.


# Code Base
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run all [CRA scripts]([https://github.com/facebook/create-react-app#creating-an-app](https://github.com/facebook/create-react-app#creating-an-app)).
