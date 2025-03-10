import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '@components/Footer';
import Landing from '@pages/Landing';

/**
 * The `Router` component handles client-side routing using React Router.
 * 
 * - Defines the main navigation structure.
 * - Wraps the application in `BrowserRouter` to enable routing.
 * - Includes the `Landing` page as the main entry route.
 * - A `Footer` is displayed across all routes.
 * - A placeholder for private routes is included for future implementation.
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />

        {/* Placeholder for future private routes */}
        {/* <Route path="/xxx/*" element={
          <PrivateRoute>
            // Add private page components here
          </PrivateRoute>
        } /> */}
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </BrowserRouter>
  );
};

export default Router;