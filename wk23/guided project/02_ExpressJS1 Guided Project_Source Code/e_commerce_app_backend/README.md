# Express App README

This README provides information about setting up and running the Express app for your project, as well as details about the available routes.

## Getting Started

To get the app up and running, follow these steps:

1. Install the dependencies:
   
   `npm install`
   
2. Start the app:
   
   `npm start`
   
3. The app should now be running on `http://localhost:8080`.


## Routes

Here's an overview of the available routes in the project:

### User Routes

- `POST /api/v1/users`: Register a new user.
- `POST /api/v1/users/login`: Log in a user.
- `GET /api/v1/users/logout`: Log out a user (requires authentication).
- `GET /api/v1/users/:id`: Fetch user details by ID (requires authentication).
- `DELETE /api/v1/users/:id`: Delete a user by ID (requires authentication and admin privileges).
- `PUT /api/v1/users/:id`: Edit user details by ID (requires authentication).
- `GET /api/v1/users`: Fetch all users (requires authentication and admin privileges).
