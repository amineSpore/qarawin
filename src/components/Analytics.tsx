
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Analytics: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const { toast } = useToast();
  
  const refreshViewCount = () => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('qarawin-view-count');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    
    setViewCount(count);
    
    toast({
      title: "Analytics Refreshed",
      description: "View count has been updated with the latest data.",
    });
  };
  
  useEffect(() => {
    refreshViewCount();
  }, []);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-qarawin-red">Qarawin Analytics</h1>
        <Button 
          variant="outline" 
          onClick={refreshViewCount} 
          className="flex items-center gap-2 text-qarawin-cream border-qarawin-red/30 hover:bg-qarawin-red/10"
        >
          <RefreshCw size={16} />
          Refresh Data
        </Button>
      </div>
      
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
