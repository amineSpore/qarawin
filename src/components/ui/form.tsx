import React from 'react';

const QarawinForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe 
        className="airtable-embed w-full" 
        src="https://airtable.com/embed/apppsIb2CeO5bX7az/pagpguK4rclHtkMus/form" 
        frameBorder="0" 
        width="100%" 
        height="533" 
        style={{background: 'transparent', border: '1px solid #ccc'}}
      />
    </div>
  );
};

export default QarawinForm;