import React, { FC } from 'react';

const TIMEOUT_TEXT = 'Timeout...';
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
export { TIMEOUT_TEXT };
