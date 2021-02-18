import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../Dashboard';
import DeviceMap from '../DeviceMap';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/devices" exact component={DeviceMap} isPrivate />
    </Switch>
  );
};

export default Routes;
