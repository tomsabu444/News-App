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
    cd server/functions
    npm run start
    ```

2. **Start the frontend**

    ```bash
    cd client
    npm start
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

- **Failed to load environment variables from `.env`**: Ensure your `.env` file is correctly named and located in the `server/functions` directory.

- **Invalid config name**: Environment variable names in Firebase must be lowercase and cannot contain underscores or uppercase letters. Update your variable names accordingly.

### Project Structure

- **`client`**: Contains the React frontend code. Build files are located in `client/dist`.
- **`server/functions`**: Contains the Express backend code and Firebase Cloud Functions.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README further based on additional details or specific instructions relevant to your project.
