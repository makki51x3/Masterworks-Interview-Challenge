# Masterworks Interview Challenge

# Contents Table

• Quick Video on The Web

• Description

• Usecase and Features 

• UI/UX Design

• Libraries

• Architecture

  • Files and Directories
  
  • Redux Store 

• Build Tools

• Documentation

• How to Run the App

• On Mobile

• On Web

• Coming Soon

• Prototype on Web

# Quick Video on The Web

https://user-images.githubusercontent.com/96151955/176280884-6731216c-39cf-4921-a33c-180f0440a2be.mp4


# Description

A prototype SPA application that helps users find public repositories hosted on Github and compare their stats.

# Usecase and Features 

The application works on all platforms, is created using react and consists of a single screen. The user has the ability to search for the repo he wants, can add as many repos to the comparison as he wants, can remove repos from the comparison, can go directly to any of the repos Github page by clicking on their name, gets search suggestions to add while typing, can share the repository URL, and see information about the repos such as:

  • Organization/Owner avatar

• Repository full name

• Number of stars

• Number of forks

• Number of open issues

• Repository creation date

• Repository last update date

• The language the repository is developed in

• Repository license type

# UI/UX Design

I used stylesheet and expo vector icons libraries to help me design and implement a simple, user-friendly, and eye-appealing user interface. I also used Platform, StatusBar, SafeView and other components to make the UI responsive and compatible to different platforms such as android, iphone and web. The color theme I chose is blue with a space background image and some variance in the opacity to achieve translucency. I added a responsive search bar instead of having it fixed on the screen. 

# Libraries 

The project makes use of different libraries like redux js tools for state management,  axios for http methods and API calls, etc. 
The code makes use of functional programming, Hooks, redux for state management, proper file structure, and components best practices, etc.

# Architecture

## Files and Directories

- Redux

  - Store

  - Slices
  
- Components

- Handlers

- HomeScreen

- Assets

## Redux Store

![image](https://user-images.githubusercontent.com/96151955/176277021-6a3dae67-5cbf-40cb-beb1-c58557ce696c.png)

# Build Tools

I used Visual Studio Code to compile and run the code, react tool for debugging and the Expo framework to test the application on different screens and platforms it also allows for easy setup and quick run before moving to deployment. 

# Documentation

• Connect to the backend of the API: "https://api.github.com/orgs/"{searchText}"/repos"

• Create a Personal access token (To get more API requests)

• Add the Personal access token to Authorization http header

( Note that PAT was used because basic authentication is going to be deprecated soon )

{ Disclaimer the PAT must not be stored directly in code, so a better approach must be decided such as signin with email or github account }

# How to Run the App 

## On Mobile
More information can be found here: https://docs.expo.dev/guides/sharing-preview-releases/

• Download Expo Go App from Apple store or Play store ( search expo )

• Create an account if you don't have one and sign in (optional)

• Access the application using:
  ### *Link*
  exp://exp.host/@51x3/MasterWorksApp?release-channel=default
  ### *QR Code*
  ![image](https://user-images.githubusercontent.com/96151955/176492030-f10f9646-7938-4cd8-b547-5b622894a407.png)

## On Web

More information can be found here: https://docs.expo.dev/get-started/installation/

• Download and install Node.js LTS release from: https://nodejs.org/en/

• Install expo-cli (in your command line or terminal, run: *npm install --global expo-cli* )

• Clone this repository

• Open command line or terminal and run in cloned directory: *expo start* or *npm start* 

# Coming Soon

• Adding Unit tests for different interactions between the user or API and the application.

• Adding the Unit tests to Github Actions for automated testing upon each commit. ( CI/CD )

• Adding a splash screen { for mobile only (IOS and Android) }

• Adding an app icon { for mobile only (IOS and Android) }

• Create a Docker container to deploy the application on the cloud

# Prototype on Web

![image](https://user-images.githubusercontent.com/96151955/176276727-41953d61-66f9-4d48-b97e-5f9d1764666f.png)

