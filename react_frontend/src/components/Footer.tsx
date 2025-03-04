import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const internalPages = ['/dashboard', '/generate', '/editor']
    const isOnInternalPage = internalPages.some(page => location.pathname.includes(page));
    setShowFooter(!isOnInternalPage);
  }, [location]);

  return (
    showFooter && (
      <footer className="py-8">
        {/* Footer Bottom */}
        <div className="py-8 text-center bg-black-light text-sm">
          <p className="text-grey-light">
            &copy; {new Date().getFullYear()} All rights reserved.{" "}
            <a href="https://malikheron.github.io" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Malik Heron
            </a>
          </p>
        </div>
      </footer>
    )
  );
}

export default Footer;