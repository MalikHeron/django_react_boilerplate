/* eslint-disable @typescript-eslint/no-explicit-any */

// Import the API URL from the environment variables
const API_URL = import.meta.env.DEV
? import.meta.env.VITE_API_URL_DEV
: import.meta.env.VITE_API_URL_DOCKER; // When running inside Docker, this will be used

/**
 * Class representing a service for interacting with Django backend.
 */
export class DjangoService {
  /**
   * Fetches features from the Django backend.
   * 
   * @returns {Promise<[boolean, any]>} A promise that resolves to a tuple where the first element is a boolean indicating success, and the second element is the fetched data or an error message.
   * 
   * @throws {Error} Throws an error if the fetch operation fails.
   */
  public async fetchFeatures(): Promise<[boolean, any]> {
    try {
      const response = await fetch(`${API_URL}/features/`);
      if (!response.ok) {
        // Log the status code and URL for debugging
        console.error(`Failed to fetch features from ${API_URL}/features/ - Status: ${response.status}`);
        throw new Error("Failed to fetch features");
      }
      const data = await response.json();
      return [true, data];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching features:", error.message);  // Log the error message
        return [false, error.message];
      } else {
        console.error("An unknown error occurred while fetching features");
        return [false, "An unknown error occurred"];
      }
    }
  };
}