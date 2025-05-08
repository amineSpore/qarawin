
import React from 'react';
import Analytics from '@/components/Analytics';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-qarawin-black text-qarawin-cream">
      <div className="container mx-auto pt-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" asChild>
            <Link to="/" className="text-qarawin-cream border-qarawin-red/30 hover:bg-qarawin-red/10">
              Back to Home
            </Link>
          </Button>
        </div>
        <Analytics />
      </div>
    </div>
  );
};

export default AnalyticsPage;
