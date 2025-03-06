import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const footerPages = ['/', '/', '/']
    const isOnFooterPages = footerPages.some(page => location.pathname.includes(page));
    setShowFooter(isOnFooterPages);
  }, [location]);

  return (
    showFooter && (
      <footer className="grid grid-cols-3 gap-4">
        {/* Footer Bottom */}
        <div className="py-8 text-center bg-black-light text-sm">
        </div>
        <div className="py-8 text-center bg-black-light text-sm">
          <p className="text-grey-light">
            Copyright &copy; {new Date().getFullYear()} {" "}
            <a href="https://malikheron.github.io" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Malik Heron
            </a>
          </p>
        </div>
        <div className="py-8 text-center bg-black-light text-sm">
        </div>
      </footer>
    )
  );
}

export default Footer;