import React from 'react';

const CommunityForm: React.FC = () => {
  return (
    <section id="community-form" className="py-24 bg-qarawin-black relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg1djVIMHptMTAgMGg1djVoLTV6TTAgMTBoNXY1SDB6bTEwIDBoNXY1aC01eiIgZmlsbD0iI2NhMDAxMyIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-qarawin-cream mb-6">
            Join Our Community
          </h2>
          <div className="w-20 h-1 bg-qarawin-red mx-auto mb-8"></div>
          <p className="text-lg text-qarawin-cream/80 mb-12 font-montreal">
            Connect with fellow scholars, entrepreneurs, and visionaries committed to advancing scientific excellence and cultural heritage.
          </p>
          
          <div className="bg-qarawin-cream/5 rounded-lg p-8 border border-qarawin-red/20">
            <iframe 
              className="airtable-embed w-full min-h-[533px] rounded-md" 
              src="https://airtable.com/embed/appzu6j4P0kEhxuLu/paglgZw3KFAUaJcIJ/form" 
              frameBorder="0" 
              width="100%" 
              height="533" 
              style={{
                background: 'transparent', 
                border: '1px solid #ccc',
                minHeight: '533px'
              }}
              loading="lazy"
              title="Qarawin Community Form"
              onLoad={() => console.log('Airtable form loaded successfully')}
              onError={() => console.error('Error loading Airtable form')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForm;