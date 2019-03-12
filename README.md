# A simple demo of a lazy loaded React component

The App component uses React Router to load 2 others:

1. `Home` is loaded immediately (and packed with the rest of the code).
2. `About` will be packed seperately and will only load if it's needed.

- To see the code loaded, open Developer Tools, switch to Network, and look at the resources being loaded. 

- To experience the "Loading" behavior, use the Throttle function to throttle the behavior to 3G, and then click "About"

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
