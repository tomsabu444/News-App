# News App

A news application with a React frontend and an Express backend hosted on Firebase.

### Screenshot

![News App Screenshot](screenshot.png)

## Project Structure

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli#install_cli)
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) (if deploying functions)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/tomsabu444/news-app.git
    cd news-app
    ```

2. **Install dependencies**

    For the frontend:

    ```bash
    cd client
    npm install
    ```

    For the backend:

    ```bash
    cd functions
    npm install
    ```

### Configuration

1. **Set up environment variables**

    Create a `.env` file in the `functions` directory with the following content:

    ```plaintext
    GNEWS_APIKEY=your_gnews_api_key
    ```

2. **Configure Firebase**

    Make sure you have Firebase CLI installed and initialized in your project:

    ```bash
    firebase login
    firebase init
    ```

    Follow the prompts to set up Firebase Functions, Firestore, Hosting, etc., if you haven't already.

### Running Locally

1. **Start the backend**

    ```bash
    cd functions
    npm run start
    ```

2. **Start the frontend**

    ```bash
    cd client
    npm start
    ```

3. **Serve locally using Firebase**

    If you'd like to emulate the Firebase environment locally, use the following command to serve both functions and hosting locally:

    ```bash
    firebase serve
    ```

    This will run your Firebase functions and serve the frontend via Firebase Hosting on `localhost`.

    Alternatively, if you want to serve specific resources like just functions or hosting, you can use:

    ```bash
    firebase serve --only functions
    ```

    or

    ```bash
    firebase serve --only hosting
    ```

### Deploying to Firebase

1. **Deploy Firebase Functions**

    ```bash
    cd functions
    npm run deploy
    ```

2. **Deploy Firebase Hosting**

    Make sure your `client/dist` directory contains the production build of your React app. Then deploy it:

    ```bash
    cd ../..
    firebase deploy --only hosting
    ```

### Troubleshooting

- **Failed to load environment variables from `.env`**: Ensure your `.env` file is correctly named and located in the `functions` directory.
- **Invalid config name**: Environment variable names in Firebase must be lowercase and cannot contain underscores or uppercase letters. Update your variable names accordingly.

### Project Structure

- **`client`**: Contains the React frontend code. Build files are located in `client/dist`.
- **`functions`**: Contains the Express backend code and Firebase Cloud Functions.

<!-- ### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

---
