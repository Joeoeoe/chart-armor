import { hot } from 'react-hot-loader/root'; // 热替换
import React from 'react';
import './App.css';
import RawExample from './components/PureExample';
// import LibraryExample from './components/LibraryExample';

function App() {
  return (
    <div>
      <RawExample />
      {/* <LibraryExample /> */}
    </div>
  );
}

export default hot(App);
