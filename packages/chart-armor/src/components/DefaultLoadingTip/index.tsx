import React from 'react';

const LOADING_TEXT = 'Loading...';
const DefaultLoadingTip = function () {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      {LOADING_TEXT}
    </div>
  );
};
export default DefaultLoadingTip;
export { LOADING_TEXT };
