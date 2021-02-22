import React from 'react';
import { CONTAINER_TYPE } from '../constants';

export interface IChartArmorProps {
  render: (dom: HTMLElement, data) => any;
  data: any;
  containerWidth?: number;
  containerHeight?: number;
  loadingCom?: React.ReactChild;
  errorCom?: React.ReactChild;
  containerType?: CONTAINER_TYPE;
}
