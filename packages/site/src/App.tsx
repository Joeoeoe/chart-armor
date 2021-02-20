import { hot } from 'react-hot-loader/root'; // 热替换
import React from 'react';
import './App.css';
import PureExample from './components/PureExample';
import ChartArmorExample from './components/ChartArmorExample';

function App() {
  return (
    <div>
      <PureExample />
      <ChartArmorExample />
    </div>
  );
}

export default hot(App);
