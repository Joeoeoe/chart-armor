import React, { FC } from 'react';

const ERROR_TEXT = 'Error...';
const DefaultErrorTip: FC<any> = function () {
  return (
    <div
      style={{
        display: 'flex ',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      {ERROR_TEXT}
    </div>
  );
};

export default DefaultErrorTip;
export { ERROR_TEXT };
