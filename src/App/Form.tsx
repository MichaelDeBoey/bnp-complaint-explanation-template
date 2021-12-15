import type { FunctionComponent } from 'react';

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
        <button
          className={`bg-indigo-600 cursor-pointer gap-x-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          onClick={onShowTemplate}
        >
          <span role="img" aria-label="eyes">
            👀️
          </span>

          <span>Show template</span>
        </button>
      </div>
    </div>
  );
};
