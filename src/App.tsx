import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import OuterLayout from './OuterLayout';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <OuterLayout>
        <Routes />
      </OuterLayout>
    </BrowserRouter>
  );
};

export default App;
