
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users } from 'lucide-react';

const Analytics: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  
  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('qarawin-view-count');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    setViewCount(count);
  }, []);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center text-qarawin-red">Qarawin Analytics</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Total Website Visits</CardTitle>
              <CardDescription>Number of times the website has been accessed</CardDescription>
            </div>
            <Users className="h-6 w-6 text-qarawin-red" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{viewCount}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Current Status</CardTitle>
              <CardDescription>Website activity tracking</CardDescription>
            </div>
            <Activity className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-xl">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              Active
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
