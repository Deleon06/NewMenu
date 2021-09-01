# NewMenu

## Overview
A web based application that allows restaurants owner to create random or custom menus for their restaurants.

deployable link https://newmenu.netlify.app

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
|August 25th| Prompt / Wireframes / Timeframes / Approval | Complete
|August 26rd| Core Application Structure | Complete
|August 27th| MVP Functionality | Complete
|August 28th| Styling MVP | Complete
|August 29th| PMVP Functionality | Incomplete
|August 30th| PMVP Styling | Incomplete
|August 31st| Finishing touches & debugging | Incomplete
|September 1st| Presentations | Incomplete

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Design simple views for each state in your application |
|   React Router   | A collection of navigational components that compose declaratively with the application|
|      Rails       | A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern |
|     Bcrypt       | is a hashing algorithm designed by Niels Provos and David Mazières of the OpenBSD Project |

<br>

## WireFrames

![imageAlt](https://github.com/Deleon06/NewMenu/blob/main/NewMenu%20WireFrame.png)

## Views Tree Sample
![imageAlt](https://github.com/Deleon06/NewMenu/blob/main/NewMenu%20Views%20Tree.png)

## Component Architecture

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
      |__ SignIn/
            |__ SignIn.jsx
            |__ SignIn.css
      |__ SignUp/
            |__ SignUp.jsx
            |__ SignUp.css
      |__ CreateMenu/
            |__ CreateMenu.jsx
            |__ CreateMenu.css
      |__ AddToMenu/
            |__ AddToMenu.jsx
            |__ AddToMenu.css
      |__ AddToCategories/
            |__ AddToCategories.jsx
            |__ AddToCategories.css
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
      |__ SignIn/
            |__ SignIn.jsx
            |__ SignIn.css
      |__ SignUp/
            |__ SignUp.jsx
            |__ SignUp.css
      |__ MenuList/
            |__ MenuList.jsx
            |__ MenuList.css
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
| Back End Crud | H | 3hrs | hrs | hrs |
| Back End Routes| H| 2hrs| hrs | hrs |
| Back End Auth| H | 1hrs | hrs | hrs |
| Backend Functionality debugging | H | 2hrs | hrs | hrs |
| Landing Page| H | 1hrs | hrs | hrs |
| CreateMenu Page | H | 3hrs | hrs | hrs |
| Menu List Page| H | 2 hrs | hrs | hrs |
| Styling| H | 6hrs | hrs | hrs |
| Completed Menu List| H | 2hrs | hrs | hrs |
| Component Setup | H | 3hrs | hrs | hrs |
| Edit Functionality | M | 1 hrs | hrs | hrs |
| Delete Functionality | M | 1hrs | hrs | hrs |
| More Back End Functionality| M| 1 hrs | hrs | hrs
| More Styling| M | 2hrs | hrs | hrs |
| Media Queries | M | 3hrs | hrs | hrs |
| PMVP Adding Additional Menus| M | 10hrs | hrs | hrs |
| Debugging & troubleshooting | H | 3hrs | hrs | hrs |
| Testing functionality | H | 2hrs | hrs | hrs |
| Mock Presentation(s) | M | 1hr |  hrs | hrs |
| Total | 49.5 | hrs | 

#### ERD Model

![imageAlt](https://github.com/Deleon06/NewMenu/blob/main/NewMenu%20ERD.png)

***

## Post-MVP

- Able to create items to category
- Making a more reactive UI and additional styling
- Able to render a PDF file for download

***

## Code Showcase

## Code Issues & Resolutions
