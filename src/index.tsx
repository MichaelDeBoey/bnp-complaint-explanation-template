import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './App';
import './index.generated.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
