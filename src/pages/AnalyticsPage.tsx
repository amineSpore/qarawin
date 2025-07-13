
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import { X } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  
  // Simple admin password - in a real application, this would be handled securely
  const ADMIN_PASSWORD = 'Qarawin2025XMDS';
  
  const handleAuthenticate = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Authentication successful",
        description: "Welcome to the analytics dashboard",
      });
    } else {
      toast({
        title: "Authentication failed",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAuthenticate();
    }
  };

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
        
        {!isAuthenticated ? (
          <div className="bg-qarawin-darkgray/90 backdrop-blur-sm p-6 rounded-lg border border-qarawin-red/20 shadow-xl max-w-md mx-auto">
            <h3 className="text-xl font-serif font-bold text-qarawin-cream mb-4">Admin Authentication</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-qarawin-cream/80 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter admin password"
                  className="w-full border border-qarawin-red/20 bg-qarawin-black/50 text-qarawin-cream"
                />
              </div>
              <Button 
                onClick={handleAuthenticate} 
                className="w-full bg-qarawin-red hover:bg-qarawin-red/90 text-white"
              >
                Access Analytics
              </Button>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Analytics data will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
