import { FunctionComponent } from 'react';

type Props = {
  onSubmit: () => void;
};
export const Form: FunctionComponent<Props> = ({ onSubmit }) => {
  const onShowTemplate = () => {
    fetch('/.netlify/functions/trackTemplateWatch');

    onSubmit();
  };

  return (
    <div className="mt-12 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
      <div className="sm:col-span-2">
        <span className="w-full inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`bg-indigo-600 cursor-pointer w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}
            onClick={onShowTemplate}
          >
            <span role="img" aria-label="eyes">
              👀️
            </span>{' '}
            Show template
          </button>
        </span>
      </div>
    </div>
  );
};
