# Spacestagram | [Live Demo](https://gkillick.github.io/spacestagram/)

![alt text](src/assets/images/rocket_image.png#gh-light-mode-only)
![alt text](src/assets/images/rocket-light-mode.png#gh-dark-mode-only)

## About the project

Spacestagram is an application created to explore NASA's [Astronomy Picture of the Day API](https://github.com/nasa/apod-api), allowing the user to discover various types of media within the rich library.

## Features

  * 📅 Explore photos from a specified date
  * 🔀 Explore photos at random
  * ❤️ Like photos & view liked photos
  * 🕵️ Click on any photo to view details
  * ♾ Infinite scroll
  * 🎆 Grid & list view options
  * 🌙 Dark & light modes 

## Design
I began the project by creating several "big marker mockups" of the features and application flow. This allowed me to identify the different application components and establish a development path.


## Development
I built Spacestagram using Angular and Typescript to allow for rapid development and easy implementation of the various dynamic features. Shared UI features like the rocket animation and like button were developed as reusable components. Services were created to handle various state management for the layout and API features. The application was organized to promote high cohesion through specialized components while minimizing coupling by limiting use of global styles to colors and low-level interface elements. At all points of development the application was tested on different devices to allow for a seamless experience. Generic components from [Material Angular UI](https://material.angular.io/) were used for dialogs and buttons while specific interface elements such as the [Rocket Animation](https://github.com/gkillick/spacestagram/tree/master/src/app/shared/rocket-loader) and [Like Button](https://github.com/gkillick/spacestagram/tree/master/src/app/shared/photo-card/like-button) were coded from scratch. 


## Run Spacestagram!

  1. Run `git clone https://github.com/gkillick/spacestagram.git` to copy the project locally. 
  2. Open the terminal and `cd spacestagram` to enter the project
  3. Run `ng serve` to start the app
  4. navigate in your web browser to `localhost:4200` to explore the app 🚀
