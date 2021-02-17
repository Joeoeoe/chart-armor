import React, { MutableRefObject } from 'react';

export interface IChartArmorProps {
  render: (ref: HTMLElement, data) => any;
  data: any;
  width?: number;
  height?: number;
  loadingCom?: React.ReactChild;
}
