# One Online shop
![app screenshot](./screenshot.png)

## App structure
- [**public**](public)
- [**src**](src)
    - [**components**](src/components)
        - [**Buttons**](src/components/Buttons)
        - [**CartItem**](src/components/CartItem)
        - [**Footer**](src/components/Footer)
        - [**Header**](src/components/Header)
        - [**ProdductList**](src/components/ProdductList)
        - [**Product**](src/components/Product)
    - [**context**](src/context)
        - AuthContext
        - CartContext
        - FavoritesContext
    - [**hooks**](src/hooks)
    - [**images**](src/images)
    - [**pages**](src/pages)
        - [**ProtectedRoutes**](src/pages/ProtectedRoutes)
        - About us
        - CartPage
        - CheckoutPage
        - ContactPage
        - indexPage
        - Login
        - ProductPage
        - ProductsPage
        - SearchPage
        - SignupPage
    - [**Views**](src/Views)
        - [**CartDetail**](src/Views/CartDetail)
        - [**CheckoutDetail**](src/Views/CheckoutDetail)
        - [**LoginView**](src/Views/LoginView)
        - [**ProductDetail**](src/Views/ProductDetail)
        - [**SignupView**](src/Views/SignupView)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Backend

One online shop uses our NoviBackend as a backend service for user signup and login and, we are using this `'X-Api-Key': 'one:tyofBDI1NCLUCxN6JSu3'`.
Also, we are using `fakestoreapi.com` to get products information to display.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).