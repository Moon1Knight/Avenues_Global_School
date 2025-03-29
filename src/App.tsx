import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import { AppRouter } from './router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AppRouter />
        </motion.div>
      )}
    </>
  );
}

export default App;
