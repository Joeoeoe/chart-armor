import React from 'react';
import { CONTAINER_TYPE } from '../constants';

export interface IChartArmorProps {
  render: (dom: HTMLElement, data) => any; // 渲染代码
  data: any; // 数据

  containerWidth?: number; // 容器宽度
  containerHeight?: number; // 容器高度
  timeoutLimit?: number; // 超时时间

  loadingCom?: React.ReactChild; // 加载时自定义组件
  errorCom?: React.ReactChild; // 错误时自定义组件
  timeoutCom?: React.ReactChild; // 超时时自定义组件

  containerType?: CONTAINER_TYPE; // 容器类型
}
