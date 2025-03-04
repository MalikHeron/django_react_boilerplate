import { Feature } from "@models/Feature";
import { useEffect, useState } from "react";

// Icons
import DjangoIcon from "@assets/django.png";
import ReactIcon from "@assets/react.svg";

/**
* The URL of the API endpoint.
*/
const API_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_DEV
  : import.meta.env.VITE_API_URL_PROD;

const Landing = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/features/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch features");
        }
        return response.json();
      })
      .then((data) => setFeatures(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="bg-black-light text-grey-light min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="text-center py-16 px-8 w-full max-w-screen-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-verdigris mb-4">
          Django
          <span className="inline-block w-12 h-12 mx-4">
            <img src={DjangoIcon} alt="Django" className="w-full h-full" />
          </span>
          + React
          <span className="justify-center inline-block w-12 h-12 mx-4">
            <img src={ReactIcon} alt="React" className="w-full h-full" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-grey-light mb-8">
          Build powerful web applications with React and Django seamlessly integrated.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 w-full bg-black-lightest">
        <h2 className="text-3xl font-semibold text-verdigris text-center mb-12">Why Use Django + React?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            features.length > 0 ? (
              features.map((feature, index) => (
                <div key={index} className="bg-black-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-semibold text-verdigris">{feature.title}</h3>
                  </div>
                  <p className="text-grey-light">{feature.description}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-grey-light">Loading features...</p>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
