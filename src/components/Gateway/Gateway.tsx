import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from '../TopBar/TopBar';
import Home from '../Home/Home';
import Network from '../Network/Network';
import { StringList } from '../../constants/StringList';

const Gateway = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route path={StringList.NETWORK_LINK} element={<Network />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Gateway;
