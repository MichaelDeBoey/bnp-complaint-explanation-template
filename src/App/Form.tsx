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
    <div className="row-gap-6 sm:col-gap-8 mt-12 grid grid-cols-1 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <button
          className={`inline-flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md border border-transparent bg-indigo-600 bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
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
