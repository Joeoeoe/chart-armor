import React, { MutableRefObject } from 'react';

export interface IChartArmorProps {
  render: (ref: HTMLElement, data) => any;
  data: any;
  loadingCom?: React.ReactChild;
}
