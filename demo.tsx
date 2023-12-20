import React from 'react';
import './index.css';
import { Badge } from 'antd';

const App: React.FC = () => (
  <Badge count={1} offset={[-8, 3]} >
  <Badge.Ribbon text={"Status"} placement={'start'} color='#C433FF' />
  </Badge>
);

export default App;