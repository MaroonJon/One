# One Online shop
![app screenshot](./screenshot.png)

## Table of Contents
1. [Introduction](#introduction)
2. [Installation Instructions](#installation-instructions)
3. [Backend and API Key](#backend-and-api-key)

---

## Introduction
One Online Shop is a simple e-commerce application where users can browse products, filter, add items to a shopping cart or favorites list, and make purchases.

## Installation Instructions

(if project is on your laptop or already cloned skip first 2 steps)

1. Clone the repository: 

`git clone [https://github.com/MaroonJon/One.git]`

2. Navigate to the project directory: 

`cd One`

(start here if file cloned adn open with your software)

3. Install the required dependencies:
 
`npm install`

4. Start the application:

`npm start`

5. Build the application for production (optional):

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Backend and API Key Setup

This application uses APIs to fetch data and handle authentication. To set it up locally, you need to configure a `.env` file with your own API keys.

#### Steps to Create Your Own API Key
1. Create a `.env` file:
    In the root directory of the project, create a file named .env.
2. Add the following lines to the .env file:

   `REACT_APP_API_BASE_URL=https://fakestoreapi.com`
   `REACT_APP_AUTH_API=https://api.datavortex.nl/one/`
   `REACT_APP_AUTH_API_KEY=your_api_key`

   Replace your_api_key with the API key provided by your backend or administrator.


3. Save the file and restart your development server:\`
`npm start`

#### Where to Get Your API Keys
For `fakestoreapi.com:`

Visit Fake Store API.  No signup or API key is required; you can directly use the base URL

`REACT_APP_API_BASE_URL=https://fakestoreapi.com`

for NoviBackend 

One online shop uses our NoviBackend as a backend service for user signup and login and, we are using this `'X-Api-Key': 'one:tyofBDI1NCLUCxN6JSu3'`.
Also, we are using `fakestoreapi.com` to get products information to display.

\
Security notes 

Do not hardcode API keys in your code. Always store them securely in the .env file.
Add `.env` to `.gitignore` to ensure it is not uploaded to version control systems like GitHub.
Never share your API key publicly to avoid unauthorized usage. test