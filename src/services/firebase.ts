/**
 * Firebase Configuration and Initialization
 * 
 * This file initializes the Firebase app using the Firebase JavaScript SDK.
 * 
 * Setup Instructions:
 * 1. Create a Firebase project at https://console.firebase.google.com/
 * 2. Get your project configuration values
 * 3. Create a .env.local file in your project root with the following variables:
 *    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
 *    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
 *    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
 *    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
 *    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
 *    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
 *    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
 * 
 * Note: The NEXT_PUBLIC_ prefix makes these variables available in the browser.
 * Only use this prefix for non-sensitive configuration values.
 */

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);