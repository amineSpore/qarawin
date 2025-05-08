
import { useEffect } from 'react';

const ViewTracker: React.FC = () => {
  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('qarawin-view-count');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment count
    const newCount = count + 1;
    
    // Store updated count
    localStorage.setItem('qarawin-view-count', newCount.toString());
    
    console.log('Page view recorded:', newCount);
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default ViewTracker;
