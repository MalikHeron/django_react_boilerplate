/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;         // Firebase API key
  readonly VITE_AUTH_DOMAIN: string;    // Firebase Auth domain
  readonly VITE_PROJECT_ID: string;     // Firebase Project ID
  readonly VITE_STORAGE_BUCKET: string; // Firebase Storage Bucket
  readonly VITE_MESSAGING_SENDER_ID: string; // Firebase Messaging Sender ID
  readonly VITE_APP_ID: string;         // Firebase App ID
  readonly VITE_MEASUREMENT_ID: string; // Firebase Measurement ID
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
