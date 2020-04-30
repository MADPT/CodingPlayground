# Frontend Developer Task

We are excited that you are interested in coming to work with us! Your task is to implement a simplified version of a trading platform where sellers and buyers can make offers. This task will help us get acquainted with your skills in web software development. If you have any questions, feel free to ask. :)

To save time, writing tests is not required but please describe what would you test and how. We are more interested to see how you organize and structure code. Also, quite obviously, we are interested to see your visual skills as well. You can adopt our styling from the website.

## Specification

In this simplified app, there is just one view that lists all the offers sent to the seller (you may just hardcode the initial offers).

Every offer has the following information:

- name of the person who sent it
- expiration date and time
- price
- free-form message

In the listing view seller should be able to see all the information above. It is up to you, how you want present the information but the seller should be at least able to see the information of latest offer made between the seller and the buyer. Further, there should also be an indication whether the seller or the buyer is in turn to react next.

Seller can take three different actions on every offer: **accept**, **reject** and **counter**. Please note that the seller can’t take any action to the offers that he/she has already reacted to.

Further, selecting a certain action should open a modal for providing the information required for the action. Information required by certain action is specified in the following section.

After filling the information the seller can send the offer. For simplicity, you don’t really have to send the offer anywhere but the UI should update as the offer would have been actually sent.

## Information for actions:

**Accept**

- free-form message (optional)

**Reject**

- free-form message (required)

**Counter**

- price (required)
- expiration date and time (required)
- free-form message (optional)

Please note that the expiration date and time must be later than the expiration of the offer that the user is countering to.

## Technologies

It would be preferable to use React for the task. You can pick other libraries freely, including the state management system.

## Bonus

As a bonus you may use transitions to give a premium touch to your app. :)

## Code Base

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run all [CRA scripts](https://github.com/facebook/create-react-app#creating-an-app).
