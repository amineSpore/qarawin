
import { useEffect } from 'react';

const ViewTracker: React.FC = () => {
  useEffect(() => {
    // Get current counts from localStorage
    const storedViewCount = localStorage.getItem('qarawin-view-count');
    const storedSubmissionCount = localStorage.getItem('communitySubmissions');
    
    // Parse counts
    const viewCount = storedViewCount ? parseInt(storedViewCount, 10) : 0;
    const submissions = storedSubmissionCount ? JSON.parse(storedSubmissionCount) : [];
    
    // Increment view count
    const newViewCount = viewCount + 1;
    
    // Store updated view count
    localStorage.getItem('qarawin-view-count') !== newViewCount.toString() && 
      localStorage.setItem('qarawin-view-count', newViewCount.toString());
    
    console.log('Page view recorded:', newViewCount);
    console.log('Total submissions:', submissions.length);
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default ViewTracker;
