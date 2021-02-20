import React, { FC } from 'react';

const DefaultErrorTip: FC<any> = function () {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      Error...
    </div>
  );
};

export default DefaultErrorTip;
