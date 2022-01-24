import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

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
    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <Pattern className="absolute left-full translate-x-1/2 transform" />

        <Pattern className="absolute right-full bottom-0 -translate-x-1/2 transform" />

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
