import React from 'react';
import { CONTAINER_TYPE } from '../constants';

export interface IChartArmorProps {
  render: (ref: HTMLElement, data) => any;
  data: any;
  width?: number;
  height?: number;
  loadingCom?: React.ReactChild;
  containerType?: CONTAINER_TYPE;
}
