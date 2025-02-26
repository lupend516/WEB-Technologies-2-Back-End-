# Project Name

## Description
This project is a fully functional Node.js web application that leverages Express for backend operations, MongoDB for data persistence via Mongoose, and EJS as the templating engine for rendering dynamic views. It is designed to provide an interactive and seamless user experience by handling requests efficiently and ensuring data consistency. The application incorporates user authentication, session management, file uploads, and robust API endpoints supporting CRUD operations. This ensures that users can securely log in, manage content, and perform various tasks without concerns about data loss or security breaches.

The project is designed to be modular and scalable, making it suitable for a wide range of applications. The modularity allows for easy feature expansion, ensuring that additional functionalities can be integrated with minimal effort. From authentication to structured data storage, this project serves as an excellent starting point for anyone looking to develop a web application with a solid backend infrastructure. Developers can build upon this foundation to create highly customized applications tailored to specific business needs.

## Installation Guide

### Prerequisites
Before setting up the project, ensure you have the following installed on your system:
- **Node.js** (Latest LTS version recommended) - This provides the runtime for executing JavaScript code outside the browser.
- **MongoDB** (Either a local instance or a cloud database such as MongoDB Atlas) - This is required for storing and retrieving structured application data.
- **Git** (For cloning the repository) - Helps in version control and collaboration with other developers.

### Setup Steps
Follow these steps to install and run the project:
1. Clone the repository using Git:
   ```sh
   git clone <repository_url>
   ```
   This command downloads the complete project files onto your local machine.
2. Navigate to the project folder:
   ```sh
   cd final-nosql-main/app1
   ```
   This ensures that you are in the correct directory where the application code resides.
3. Install all required dependencies:
   ```sh
   npm install
   ```
   This command fetches all necessary libraries and modules as specified in `package.json`.
4. Set up environment variables:
   - Copy the `.env.example` file and rename it to `.env`.
   - Add the required variables in `.env`:
     ```
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_secret_key>
     PORT=3000
     SESSION_SECRET=<your_session_secret>
     ```
   These variables ensure the application connects to the correct database and handles authentication securely.
5. If running MongoDB locally, start the MongoDB server:
   ```sh
   mongod
   ```
   This command launches the database, enabling the application to read and write data.
6. Start the application:
   ```sh
   npm start
   ```
   The application will be available at `http://localhost:3000`, where you can access its functionalities.

### Running in Development Mode
To enable automatic restarts when making changes, use `nodemon`:
```sh
npm run dev
```
This helps in speeding up development by automatically reloading the server when code is modified.

## Project Structure

### Root-Level Files
- `app.js` - Initializes the Express server, connects to MongoDB, and configures middleware. It serves as the main entry point for the backend logic.
- `.env` - Contains sensitive configuration values (excluded from version control). Keeping secrets out of the codebase enhances security.
- `package.json` - Defines project metadata, dependencies, and scripts. This file is crucial for managing dependencies and project automation.
- `package-lock.json` - Locks dependency versions for consistency. This ensures that all team members use the exact same package versions, preventing unexpected bugs.

### Key Directories and Files

#### `config/`
- `database.js` - Establishes the connection to the MongoDB database. It ensures a seamless interaction between the application and data storage.
- `passport.js` - Configures authentication strategies using Passport.js. It helps in securely managing user login sessions and authentication tokens.

#### `middleware/`
- `authMiddleware.js` - Protects restricted routes by ensuring authentication. This prevents unauthorized access to sensitive resources.
- `errorHandler.js` - Centralized error-handling mechanism. It improves debugging by providing consistent error messages and logs.
- `logger.js` - Logs incoming requests and errors. Useful for monitoring application performance and identifying issues.

#### `models/`
- `User.js` - Defines the User schema with authentication fields such as email and password. This model represents users in the database.
- `Post.js` - Schema representing blog posts or content entries. It helps manage structured data related to user-generated content.

#### `routes/`
- `authRoutes.js` - Handles user registration, login, and logout operations. It provides endpoints for authentication-related activities.
- `userRoutes.js` - Defines endpoints related to user management. It allows fetching, updating, and deleting user data.
- `postRoutes.js` - Provides CRUD operations for managing posts. Users can create, update, and delete posts through these routes.

#### `views/`
- `layout.ejs` - The main template that serves as the base for all views. It ensures a consistent UI layout across pages.
- `index.ejs` - Renders the home page. This page acts as the starting point of the application.
- `login.ejs` - Displays the login form. It enables users to securely authenticate themselves.
- `register.ejs` - Displays the registration form. New users can sign up through this page.
- `dashboard.ejs` - User dashboard for authenticated users. It presents personalized content after login.

#### `public/`
- `css/` - Contains the project's stylesheets. Defines the visual aesthetics of the application.
- `js/` - Stores client-side JavaScript files. These scripts enhance interactivity.
- `uploads/` - Directory where user-uploaded files are stored. Used for handling file attachments.

#### `utils/`
- `hashPassword.js` - Provides helper functions for hashing passwords securely. Helps in storing user credentials safely.
- `jwtHelper.js` - Manages JWT token creation and verification. Ensures secure API authentication.

## Dependencies and Libraries

### Main Dependencies
- **Express** - Web framework for building the server. Provides routing and middleware support.
- **Mongoose** - ODM for interfacing with MongoDB. Simplifies database operations.
- **jsonwebtoken (JWT)** - Implements secure user authentication. Used for generating secure tokens.
- **bcrypt** - Hashes passwords securely. Protects user credentials from leaks.

### Development Dependencies
- **Nodemon** - Automatically restarts the server during development. Speeds up debugging.
- **ESLint** - Enforces consistent coding style and best practices. Helps maintain code quality.

## Additional Notes
- The project follows the **MVC (Model-View-Controller)** pattern for maintainability. This enhances modularity and separation of concerns.
- Uses **JWT-based authentication** for securing API endpoints. Only authorized users can access restricted resources.
- Designed with **scalability and modularity** in mind to support future feature expansion. This allows smooth project growth over time.

## License
This project is licensed under the MIT License. You are free to modify and distribute it according to the license terms.

