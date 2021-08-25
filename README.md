# NewMenu

## Overview
A web based application that allows restaurants owner to create random or custom menus for their restaurants.

![imageAlt](https://github.com/Deleon06/NewMenu/blob/main/NewMenu.png)

## MVP
- Users should be able to sign-in/sign-out
- able to create Dinner Menu
- Displaying menus
- Styling with flexbox/grid
- using Media Query
- Users can post, update, delete their menu
- Have a one to many and a many to one database 
- Deploy in netlify(front end) and heroku(backend)


## Goals
|  Day | Deliverable | Status
|---|---| ---|
|August 25th| Prompt / Wireframes / Timeframes / Approval | Incomplete
|August 26rd| Core Application Structure | Incomplete
|August 27th| MVP Functionality | Incomplete
|August 28th| Styling MVP | Incomplete
|August 29th| PMVP Functionality | Incomplete
|August 30th| PMVP Styling | Incomplete
|August 31st| Finishing touches & debugging | Incomplete
|September 1st| Presentations | Incomplete

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Design simple views for each state in your application |
|   React Router   | A collection of navigational components that compose declaratively with the application|
|      Rails       | A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern |
|     Bcrypt       | is a hashing algorithm designed by Niels Provos and David Mazières of the OpenBSD Project |

<br>
#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Navbar/
            |__ Navbar.jsx
            |__ Navbar.css
      |__ Footer/
            |__ Footer.jsx
            |__ Footer.css
      |__ Home/
            |__ Home.jsx
            |__ Home.css
      |__ CreateMenuFeatures/
            |__ CreateMenuFeatures.jsx
            |__ CreateMenuFeatures.css
      |__ BreakfastMenuOptions/
            |__ BreakfastMenuOptions.jsx
            |__ BreakfastMenuOptions.css
      |__ LunchMenuOptions/
            |__ LunchMenuOptions.jsx
            |__ LunchMenuOptions.css
      |__ DinnerMenuOptions/
             |__ DinnerMenuOptions.jsx
             |__ DinnerMenuOptions.css
      |__ CocktailsMenuOptions/
            |__ CocktailsMenuOptions.jsx
            |__ CocktailsMenuOptions.css
      |__ BeersMenuOptions/
            |__ BeersMenuOptions.jsx
            |__ BeersMenuOptions.css
      |__ WinesMenuOptions/
            |__ WinesMenuOptions.jsx
            |__ WinesMenuOptions.css
      |__ AddtoBreakfast/
            |__ AddtoBreakfast.jsx
            |__ AddtoBreakfast.css
      |__ AddtoLunch/
            |__ AddtoLunch.jsx
            |__ AddtoLunch.css
      |__ AddtoDinner/
            |__ AddtoDinner.jsx
            |__ AddtoDinner.css
      |__ AddtoCocktails/
            |__ AddtoCocktails.jsx
            |__ AddtoCocktails.css
      |__ AddtoBeers/
             |__ AddtoBeers.jsx
             |__ AddtoBeers.css
      |__ AddtoWines/
            |__ AddtoWines.jsx
            |__ AddtoWines.css
      |__UnfinidedMenuList/
            |__UnfinidedMenuList.jsx
            |__UnfinidedMenuList.css
      |__CompletedMenuList/
            |__CompletedMenuList.jsx
            |__CompletedMenuList.css
      |__GeneratorSelector/
            |__GeneratorSelector.jsx
            |__GeneratorSelector.css
|__ views/
      |__ Home/
            |__ Home.jsx
            |__ Home.css
      |__ SignInSignOut/
            |__ SignInSignOut.jsx
            |__ SignInSignOut.css
      |__ CreateMenu/
            |__ CreateMenu.jsx
            |__ CreateMenu.css
      |__ MenuStyleGenerator/
            |__ MenuStyleGenerator.jsx
            |__ MenuStyleGenerator.css
      |__ MenuSample/
            |__ MenuSample.jsx
            |__ MenuSample.css
      |__ CompletedMenuList/
            |__ CompletedMenuList.jsx
            |__ CompletedMenuList.css
      |__ CreateSpecificMenu/
            |__ CreateSpecificMenu.jsx
            |__ CreateSpecificMenu.css
      |__ AddtoSpecificMenu/
            |__ AddtoSpecificMenu.jsx
            |__ AddtoSpecificMenu.css
|__ layout/
      |__ Layout.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ menu.js
      |__ user.js

```

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating Branches | E | .5hrs | hrs | hrs |
| Initial Skeleton | M | 3hrs | hrs | hrs |
| Component Setup | H | 3hrs | hrs | hrs |
| DB Setup | H | 3hrs | hrs | hrs |
| Backend Functionality debugging | H | 2hrs | hrs | hrs |
| Landing Page | H | 3hrs | hrs | hrs |
| Detail Page | H | 3hrs | hrs | hrs |
| Gallery For Listings (Desktop) | H | 2hrs | hrs | hrs |
| Adding Search Bar & Filter | M | 2 hrs | hrs | hrs |
| Sign-in/Sign-up | H | 3hrs | hrs | hrs |
| Modals | M | 3hrs | hrs | hrs |
| Media Queries | M | 2hrs | 3hrs | 3hrs |
| Debugging & troubleshooting | H | 3hrs | 6hrs | 6hrs |
| Getting user feedback | M | 2hrs | 3hrs | 3hrs |
| Testing functionality | H | 2hrs | 3hrs | 3hrs |
| Mock Presentation(s) | M | 1hr | .5 hrs | .5 hrs |
| Total | 37.5 | hrs | 

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)

***

## Post-MVP

- Able to create Breakfast, Lunch, Cocktail, Beers, and Wine Menu
- Making a more reactive UI and additional styling
- Able to render a PDF file for download

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
