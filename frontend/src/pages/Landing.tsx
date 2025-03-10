import { Feature } from "@models/Feature";
import { useEffect, useState } from "react";
import DjangoIcon from "@assets/django.png";
import ReactIcon from "@assets/react.svg";
import { DjangoService } from "@services/DjangoService";

/**
 * The `Landing` component represents the landing page of the application.
 * It fetches and displays features of the application using Django and React.
 *
 * @component
 * @example
 * return (
 *   <Landing />
 * )
 *
 * @returns {JSX.Element} The rendered landing page component.
 */
const Landing = () => {
  // State variables to store the features and error message
  const [features, setFeatures] = useState<Feature[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetches features from the Django backend service when the component mounts.
  useEffect(() => {
    new DjangoService().fetchFeatures().then(([success, data]) => {
      if (success) {
        setFeatures(data);
      } else {
        setError(data);
      }
    });
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
