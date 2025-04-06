
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

// Create a submissions viewer component
const SubmissionsViewer = () => {
  const [submissions, setSubmissions] = useState<any[]>(() => {
    const stored = localStorage.getItem('communitySubmissions');
    return stored ? JSON.parse(stored) : [];
  });

  const exportToCsv = () => {
    if (submissions.length === 0) return;
    
    const headers = ['Name', 'Email', 'Message', 'Date'];
    const csvRows = [
      headers.join(','),
      ...submissions.map((s: any) => {
        return [
          `"${s.name.replace(/"/g, '""')}"`,
          `"${s.email.replace(/"/g, '""')}"`,
          `"${s.message ? s.message.replace(/"/g, '""') : ''}"`,
          `"${new Date(s.date).toLocaleString().replace(/"/g, '""')}"`
        ].join(',');
      })
    ];
    
    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `qarawin_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-qarawin-black/95 p-6 rounded-lg border border-qarawin-red/20 max-h-[70vh] overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-serif font-bold text-qarawin-cream">Community Submissions</h3>
        <Button 
          onClick={exportToCsv} 
          disabled={submissions.length === 0}
          variant="outline" 
          className="text-xs border-qarawin-red/20 text-qarawin-cream bg-qarawin-black/80 hover:bg-qarawin-red/20"
        >
          Export CSV
        </Button>
      </div>
      
      {submissions.length === 0 ? (
        <p className="text-center py-8 text-qarawin-cream/60">No submissions yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-qarawin-red/20">
                <th className="py-2 px-4 text-left text-qarawin-cream">Name</th>
                <th className="py-2 px-4 text-left text-qarawin-cream">Email</th>
                <th className="py-2 px-4 text-left text-qarawin-cream">Message</th>
                <th className="py-2 px-4 text-left text-qarawin-cream">Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub: any) => (
                <tr key={sub.id} className="border-b border-qarawin-red/10 hover:bg-qarawin-red/5">
                  <td className="py-2 px-4 text-qarawin-cream">{sub.name}</td>
                  <td className="py-2 px-4 text-qarawin-cream">{sub.email}</td>
                  <td className="py-2 px-4 text-qarawin-cream text-sm max-w-[200px] truncate">{sub.message || '-'}</td>
                  <td className="py-2 px-4 text-qarawin-cream text-sm">{new Date(sub.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Main login modal component
const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  
  // Admin credentials - in a real application, these would be handled securely
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'qarawin2025'
  };
  
  // Check if admin credentials are already set in localStorage
  React.useEffect(() => {
    const storedCredentials = localStorage.getItem('adminCredentials');
    if (!storedCredentials) {
      // Set default credentials if not already stored
      localStorage.setItem('adminCredentials', JSON.stringify(ADMIN_CREDENTIALS));
    }
  }, []);
  
  const getAdminCredentials = () => {
    const storedCredentials = localStorage.getItem('adminCredentials');
    return storedCredentials ? JSON.parse(storedCredentials) : ADMIN_CREDENTIALS;
  };
  
  const handleAuthenticate = () => {
    const currentCredentials = getAdminCredentials();
    
    if (username === currentCredentials.username && password === currentCredentials.password) {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAuthenticate();
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-qarawin-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-qarawin-cream/60 hover:text-qarawin-red transition-colors z-10"
        >
          <X size={20} />
        </button>

        {!isAuthenticated ? (
          <div className="bg-qarawin-darkgray/90 backdrop-blur-sm p-6 rounded-lg border border-qarawin-red/20 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-qarawin-cream mb-4">Admin Login</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-qarawin-cream/80 mb-1">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full border border-qarawin-red/20 bg-qarawin-black/50 text-qarawin-cream"
                />
              </div>
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
                Login
              </Button>
            </div>
          </div>
        ) : (
          <SubmissionsViewer />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
