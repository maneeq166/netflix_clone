# Netflix Clone (React + Firebase)

## 🚀 Project Overview
This is a **Netflix Clone** built using **React.js**, **Firebase Authentication**, and **The Movie Database (TMDB) API**. The project demonstrates how to integrate user authentication with Firebase and fetch/display movie details using an external API.

## 📌 Features
- 🔑 **User Authentication** (Sign Up / Sign In using Firebase)
- 🎬 **Fetch & Display Movie Data** using TMDB API
- 🎨 **Responsive UI** with Tailwind CSS
- 🔄 **State Management** using React Hooks
- 🌐 **Routing** using React Router DOM

## 🛠️ Tech Stack
- **React.js** (Frontend Library)
- **Firebase** (Authentication & Firestore)
- **TMDB API** (Movie Database)
- **React Router DOM** (Navigation)
- **Tailwind CSS** (Styling)
- **Vite** (Build Tool)

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password).
3. Get your **Firebase Config** and add it to `firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### 4️⃣ Setup TMDB API
1. Get an API Key from [TMDB](https://www.themoviedb.org/).
2. Store it in an `.env` file:

```
VITE_TMDB_API_KEY=your_api_key_here
```

### 5️⃣ Run the Project
```sh
npm run dev
```
Open `http://localhost:5173/` in your browser.

## 📂 Project Structure
```
📦 netflix-clone
├── 📂 src
│   ├── 📂 components      # Reusable UI Components
│   ├── 📂 pages           # Page Components (Home, Login, Player)
│   ├── 📂 assets          # Images & Static Assets
│   ├── firebase.js        # Firebase Config
│   ├── App.js            # Main Component
│   ├── main.jsx          # Entry File
│   ├── styles.css        # Global Styles
├── 📜 .env                # API Keys (Not committed to GitHub)
├── 📜 package.json        # Project Metadata & Dependencies
├── 📜 vite.config.js      # Vite Configuration
```

## 🎯 Key Dependencies
```json
"dependencies": {
  "firebase": "^11.4.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-firebase-hooks": "^5.1.1",
  "react-router-dom": "^7.2.0",
  "tailwindcss": "^4.0.6"
}
```

## 🤝 Contribution
Feel free to fork this repo and contribute! 🚀

## 📜 License
This project is **MIT Licensed**.

---
Happy Coding! 🎬🔥

