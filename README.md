# Spacestagram | [Live Demo](https://gkillick.github.io/spacestagram/)

![alt text](src/assets/images/rocket_image.png#gh-light-mode-only)
![alt text](src/assets/images/rocket-light-mode.png#gh-dark-mode-only)

## About the project

Spacestagram is a project created to explore NASA's [Astronomy Picture of the Day API](https://github.com/nasa/apod-api), allowing the user to like and view details of various types of media within the rich library.

## Features

  * 📅 explore photos from specified date
  * 🔀 explore photos at random
  * ❤️ like photos/view liked photos
  * 🕵️ click on any photo to view details
  * ♾ infinite scroll
  * 🎆 grid/list view options
  * 🌙 Dark Mode 

## Design
Before beginning the project I created several big marker mockups of the various features and application flow. This allowed me to identify the various application components and establish a development path. 


## Development
I built this project using Angular and Typescript to allow for rapid development and easy implementation of the various dynamic features. Shared UI features like the rocket animation and like button were developed as reusable components. Services were created to handle various state management for the layout and API features. The application was organized to promote high cohesion through specialized components while minimizing coupling by limiting use of global styles to colors and low-level interface elements. At all points of development the application was tested on various devices to allow for a seamless experience. 


## Run Spacestagram!

  1. Run `git clone https://github.com/gkillick/spacestagram.git` to copy the project locally. 
  2. Open the terminal and `cd spacestagram` to enter the project
  3. Run `ng serve` to start the app
  4. navigate in your web browser to `localhost:4200` to explore the app 🚀
