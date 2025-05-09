
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Users, RefreshCw, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Analytics: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [entryCount, setEntryCount] = useState<number>(0);
  const { toast } = useToast();
  
  const refreshData = () => {
    // Get current counts from localStorage
    const storedViewCount = localStorage.getItem('qarawin-view-count');
    const storedSubmissions = localStorage.getItem('communitySubmissions');
    
    // Parse counts
    const views = storedViewCount ? parseInt(storedViewCount, 10) : 0;
    const submissions = storedSubmissions ? JSON.parse(storedSubmissions) : [];
    
    setViewCount(views);
    setEntryCount(submissions.length);
    
    toast({
      title: "Analytics Refreshed",
      description: "View and entry counts have been updated with the latest data.",
    });
  };
  
  useEffect(() => {
    refreshData();
  }, []);
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-qarawin-red">Qarawin Analytics</h1>
        <Button 
          variant="outline" 
          onClick={refreshData} 
          className="flex items-center gap-2 text-qarawin-cream border-qarawin-red/30 hover:bg-qarawin-red/10"
        >
          <RefreshCw size={16} />
          Refresh Data
        </Button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
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
              <CardTitle>Total Form Entries</CardTitle>
              <CardDescription>Number of community form submissions</CardDescription>
            </div>
            <ClipboardList className="h-6 w-6 text-qarawin-red" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{entryCount}</div>
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
