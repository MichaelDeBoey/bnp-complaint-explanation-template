import { FunctionComponent, useEffect, useState } from 'react';

import { Form } from './Form';
import { Intro } from './Intro';
import { Pattern } from './Pattern';
import { SocialLinks } from './SocialLinks';
import { Template } from './Template';

export const App: FunctionComponent = () => {
  const [showTemplate, setShowTemplate] = useState(false);

  useEffect(() => {
    fetch('/.netlify/functions/trackPageViewed');
  }, []);

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <Pattern className="absolute left-full transform translate-x-1/2" />

        <Pattern className="absolute right-full bottom-0 transform -translate-x-1/2" />

        <Intro />

        {showTemplate ? (
          <Template />
        ) : (
          <Form onSubmit={() => setShowTemplate(true)} />
        )}

        <SocialLinks />
      </div>
    </div>
  );
};
