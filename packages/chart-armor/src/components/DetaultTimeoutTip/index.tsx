import React, { FC } from 'react';

const DefaultTimeoutTip: FC<any> = function () {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      Timeout...
    </div>
  );
};

export default DefaultTimeoutTip;
