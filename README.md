Image Gallery React App

This is a simple Image Gallery React application that fetches data from an API to display images with their titles and descriptions. Users can click on an image to view its details on a separate page. The app is built using React and utilizes React Router for navigation.
Table of Contents

    Getting Started
    Prerequisites
    Installation
    Usage
    Components
    CSS Styling

Getting Started

To run this React app locally, follow the instructions below.
Prerequisites

    Node.js (v12 or later) and npm (Node Package Manager) must be installed on your system.

Installation

    Clone this repository to your local machine or download the ZIP file.
    Navigate to the project directory in the terminal or command prompt.
    Install the required dependencies by running the following command:

npm install

Usage

After installing the dependencies, start the development server using the following command:

npm start

This will run the app in development mode. Open your browser and go to http://localhost:3000 to view the app.
Components

The React app consists of the following components:
App.js

This is the main component that serves as the entry point of the application. It sets up the routing for the different pages of the app.
Home.jsx

The Home component fetches image data from the API and displays the images in a gallery. Users can click on an image to view its details on the ImageDetails page.
Image.jsx

The Image component represents an individual image in the gallery. It displays the image along with a link to view its details.
ImageDetails.jsx

The ImageDetails component displays the details of a selected image. It receives the image data as a location state from the Home component.
Header.jsx

The Header component displays the header of the app, which shows the title "Image Gallery".
Footer.jsx

The Footer component displays navigation buttons to load more images. It receives the current offset and a function to update the offset as props.
CSS Styling

The app's styles are defined in the index.css file. It sets up basic styling for the header, footer, image gallery, and image details. The CSS file includes responsive design for smaller screens (max-width: 720px).

Feel free to explore and modify the code as needed. You can extend the app by adding more features, customizing the CSS, or integrating with other APIs to fetch different images.

Enjoy exploring and enhancing this Image Gallery React App! If you have any questions or suggestions, please feel free to reach out to the developers. Happy coding!
