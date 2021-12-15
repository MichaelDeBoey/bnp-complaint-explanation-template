import type { FunctionComponent } from 'react';

import { Link } from './Link';
import { Paragraph } from './Paragraph';

const Title: FunctionComponent = ({ children }) => (
  <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
    {children}
  </h2>
);

export const Intro: FunctionComponent = () => (
  <div className="text-center">
    <Title>BNP Paribas Fortis complaint explanation template</Title>

    <Paragraph>
      We all love to have some{' '}
      <Link href="https://cake.app">
        Cake{' '}
        <span role="img" aria-label="Cake">
          🍰
        </span>
      </Link>
      .
      <br />
      Unfortunately{' '}
      <Link href="https://twitter.com/CakeDotApp/status/1273651173636149255">
        BNP Paribas Fortis doesn't
      </Link>
      .{' '}
      <span role="img" aria-label="sad face">
        😢
      </span>
    </Paragraph>

    <Paragraph>
      After filing an official complaint (using the{' '}
      <Link href="https://bnp-complaint-generator.netlify.app">
        BNP Paribas Fortis complaint generator
      </Link>
      ), I got the following{' '}
      <Link href="./response.jpg" target="_blank">
        response
      </Link>
      :
    </Paragraph>

    <Paragraph>
      <Link href="./response.jpg" target="_blank" underline={false}>
        <img
          alt="BNP Paribas Fortis complaint response"
          className="inline max-w-xs"
          src="./response.jpg"
        />
      </Link>
      <br />
      <span className="mt-4 leading-6 text-gray-500 text-sm">
        (Click the image to see a larger version)
      </span>
    </Paragraph>

    <Paragraph>
      This template can be used as a more in depth explanation to the complaint.
    </Paragraph>

    <Paragraph>
      Let's urge BNP Paribas Fortis to develop a working{' '}
      <Link href="https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en">
        PSD 2
      </Link>{' '}
      interface (API), so we all can have some Cake!{' '}
      <span role="img" aria-label="strong arm">
        💪
      </span>
    </Paragraph>

    <Paragraph fontSize="small">
      This website is <span className="font-medium text-gray-700">not</span>{' '}
      affiliated in any way with neither{' '}
      <Link href="https://cake.app">Cake</Link> nor{' '}
      <Link href="http://bnpparibasfortis.be">BNP Paribas Fortis</Link>.
    </Paragraph>
  </div>
);
