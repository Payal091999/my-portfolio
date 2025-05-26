import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ScrollNav from './components/ScrollNav';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageTransition><Home /></PageTransition>} />
            <Route path="about" element={<PageTransition><About /></PageTransition>} />
            <Route path="projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="resume" element={<PageTransition><Resume /></PageTransition>} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ScrollToTop />
      <SideNav />
    </>
  );
}
