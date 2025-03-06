import { Feature } from "@models/Feature";
import { useEffect, useState } from "react";

// Assets
import DjangoIcon from "@assets/django.png";
import ReactIcon from "@assets/react.svg";

const API_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_DEV
  : import.meta.env.VITE_API_URL_DOCKER; // When running inside Docker, this will be used

const Landing = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch(`${API_URL}/features/`);
        if (!response.ok) {
          // Log the status code and URL for debugging
          console.error(`Failed to fetch features from ${API_URL}/features/ - Status: ${response.status}`);
          throw new Error("Failed to fetch features");
        }
        const data = await response.json();
        setFeatures(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching features:", error.message);  // Log the error message
          setError(error.message);
        } else {
          console.error("An unknown error occurred while fetching features");
          setError("An unknown error occurred");
        }
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div className="bg-black-dark text-grey-light min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black-lighter to-black-darkest">
        <h1 className="text-5xl md:text-7xl font-bold text-verdigris flex items-center gap-6">
          Django
          <img src={DjangoIcon} alt="Django" className="w-16 h-16" />
          + React
          <img src={ReactIcon} alt="React" className="w-16 h-16" />
        </h1>
        <p className="text-xl md:text-2xl text-grey-light max-w-3xl mt-4">
          Build scalable, high-performance web applications with Django and React.
        </p>
        <button
          onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-8 px-6 py-3 text-lg bg-verdigris text-black-dark font-semibold rounded-lg shadow-lg hover:bg-verdigris-dark transition"
        >
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 w-full bg-black-lightest">
        <h2 className="text-4xl font-semibold text-verdigris text-center mb-12" data-aos="fade-up">
          Why Choose Django + React?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {error ? (
            <p className="text-red-500 text-center" data-aos="fade-up">{error}</p>
          ) : features.length > 0 ? (
            features.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-black-lighter p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105" 
                data-aos="fade-up"
              >
                <h3 className="text-2xl font-semibold text-verdigris mb-3">{feature.title}</h3>
                <p className="text-grey-light">{feature.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-grey-light" data-aos="fade-up">Loading features...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
