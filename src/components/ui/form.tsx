import React from 'react';

const QarawinForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <iframe 
        className="airtable-embed w-full" 
        src="https://airtable.com/embed/appzu6j4P0kEhxuLu/paglgZw3KFAUaJcIJ/form" 
        frameBorder="0" 
        width="100%" 
        height="533" 
        style={{background: 'transparent', border: '1px solid #ccc'}}
      />
    </div>
  );
};

export default QarawinForm;