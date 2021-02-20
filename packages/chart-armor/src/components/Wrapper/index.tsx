import React, { FC } from 'react';

const Wrapper: FC<{ width: number; height: number; children: React.ReactChild }> = function ({
  width,
  height,
  children,
}) {
  return <div style={{ width, height }}>{children}</div>;
};

export default Wrapper;
