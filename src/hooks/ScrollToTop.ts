import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({children}:any) => {
  const { pathname } = useLocation();
  console.log(pathname, 'me');
  useEffect(() => {
  console.log(pathname, 'me');
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;


// import { useEffect } from 'react';
// import { useLocation } from 'react-router';

// const ScrollToTop = ({ children }) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;