
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Submission {
  id: string;
  name: string;
  email: string;
  message?: string;
  date: string;
}

const AdminPanel: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Simple admin password - in a real application, this would be handled securely
  const ADMIN_PASSWORD = 'qarawin2025';
  
  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);
  
  const loadSubmissions = () => {
    const stored = localStorage.getItem('communitySubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  };
  
  const handleAuthenticate = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setIsAuthenticated(false);
      setPassword('');
    }
  };
  
  const exportToCsv = () => {
    if (submissions.length === 0) return;
    
    const headers = ['Name', 'Email', 'Message', 'Date'];
    const csvRows = [
      headers.join(','),
      ...submissions.map(s => {
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
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={toggleVisibility}
        variant="outline"
        className="bg-qarawin-black/80 text-qarawin-cream border-qarawin-red/20 hover:bg-qarawin-red/20"
      >
        {isVisible ? 'Close Admin' : 'Admin'}
      </Button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-screen max-w-md bg-qarawin-black border border-qarawin-red/20 rounded-lg shadow-xl p-4">
          {!isAuthenticated ? (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-qarawin-cream">Admin Access</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full p-2 border border-qarawin-red/20 bg-qarawin-black/70 text-qarawin-cream rounded"
              />
              <Button 
                onClick={handleAuthenticate} 
                className="w-full bg-qarawin-red hover:bg-qarawin-red/90"
              >
                Access Submissions
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-qarawin-cream">Community Submissions</h3>
                <Button 
                  onClick={exportToCsv} 
                  disabled={submissions.length === 0}
                  variant="outline" 
                  className="text-xs border-qarawin-red/20 text-qarawin-cream"
                >
                  Export CSV
                </Button>
              </div>
              
              <div className="max-h-96 overflow-auto">
                {submissions.length === 0 ? (
                  <p className="text-center py-8 text-qarawin-cream/60">No submissions yet</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-qarawin-cream">Name</TableHead>
                        <TableHead className="text-qarawin-cream">Email</TableHead>
                        <TableHead className="text-qarawin-cream">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions.map((sub) => (
                        <TableRow key={sub.id}>
                          <TableCell className="text-qarawin-cream">{sub.name}</TableCell>
                          <TableCell className="text-qarawin-cream">{sub.email}</TableCell>
                          <TableCell className="text-qarawin-cream">{new Date(sub.date).toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
