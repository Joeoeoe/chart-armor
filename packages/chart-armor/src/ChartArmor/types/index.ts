import React, { MutableRefObject } from 'react';

export interface IChartArmorProps {
  render: (ref: MutableRefObject<any>, data) => any;
  data: any;
  loadingCom?: React.ReactChild;
}
