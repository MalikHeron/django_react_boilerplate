import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  // const auth = getAuth();

  useEffect(() => {
    /*const unsubscribe =  /*onAuthStateChanged(auth, async user => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });

    return unsubscribe;*/
  }, [/*auth*/]);

  return (
    <>
      {loading ? (
        <div id='route-loading' className="flex justify-center items-center h-[90vh]">
          <div
            className="animate-spin h-6 w-6 border-4 border-t-verdigris border-white rounded-full"
            role="status"
          />
        </div>
      ) : loggedIn ? (
        children
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default PrivateRoute;