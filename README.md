# Hotel Booking Application

## Deploy-Link :

## Video Link:
https://youtu.be/PuO53Hi7DnM

## Introduction

This is a full-stack hotel booking application built with React for the frontend and Node.js/Express for the backend. The application allows users to search for hotels, book them, and view their bookings. MongoDB is used as the database to store user and hotel information.

## Features
**User Authentication:** Register, login, and logout functionality.
**Hotel Search:** Search for hotelss based on various criteria like city, type, date, and stars.
**Booking Management:** Book hotelss, view all bookings, and filter bookings by user.
**Payment Integration:** Create payment intents for bookings using Stripe.

## Techstack
**Frontend**: React, React Query
**Backend**: Node.js, Express.js
**Database**: MongoDB
**Other Tools**: Cloudinary for image handling, JWT for authentication

## Prerequisites
1.Node.js and npm installed
2.MongoDB installed and running
3.Cloudinary account for image uploads
Installation


## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Harsh5674/mern-hotels.git
cd hotel-booking-project
```

## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create two files: `.env` and `.env.e2e`. Add the following contents to both files:

    ```plaintext
    MONGODB_CONNECTION_STRING=

    JWT_SECRET_KEY=
    FRONTEND_URL=

    # Cloudinary Variables
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    STRIPE_API_KEY=
    ```

2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.
    - For the `.env.e2e` setup see "running automated tests" below

3. **Cloudinary Setup**:
    - Create an account at [Cloudinary](https://cloudinary.com/).
    - Navigate to your dashboard to find your cloud name, API key, and API secret.
    - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.

4. **Stripe Setup**:
    - Sign up for a Stripe account at [Stripe](https://stripe.com/).
    - Find your API keys in the Stripe dashboard.
    - Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.
  
5. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

7. **Frontend URL**:
    - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:3000` if you're running it locally).
  

## Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

    ```plaintext
    VITE_API_BASE_URL=
    VITE_STRIPE_PUB_KEY=
    ```

5. **VITE_API_BASE_URLL**:
    - The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:5000` if you're running it locally).

## Running the Application

1. **Backend**:
    - Navigate to the `backend` directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5174` but verify this in your command line terminal 