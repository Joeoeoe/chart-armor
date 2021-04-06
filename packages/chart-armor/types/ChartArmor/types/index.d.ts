import React from 'react';
import { CONTAINER_TYPE } from '../constants';
export interface IChartArmorProps {
  render: (dom: HTMLElement, data: any) => any;
  data: any;
  containerWidth?: number;
  containerHeight?: number;
  timeoutLimit?: number;
  loadingCom?: React.ReactChild;
  errorCom?: React.ReactChild;
  timeoutCom?: React.ReactChild;
  containerType?: CONTAINER_TYPE;
}
