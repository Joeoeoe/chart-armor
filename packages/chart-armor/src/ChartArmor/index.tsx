import React, { FC, useEffect, useRef, useState } from 'react';
import Wrapper from '../components/Wrapper';
import DefaultErrorTip from '../components/DefaultErrorTip';
import DefaultLoadingTip from '../components/DefaultLoadingTip';
import DefaultTimeoutTip from '../components/DetaultTimeoutTip';
import {
  CONTAINER_TYPE,
  DEFAULT_CHART_HEIGHT,
  DEFAULT_CHART_WIDTH,
  DEFAULT_TIMEOUT_LIMIT,
  STATUS,
} from './constants';
import { IChartArmorProps } from './types';

const ChartArmor: FC<IChartArmorProps> = function ({
  render,
  data,
  loadingCom = <DefaultLoadingTip />,
  errorCom = <DefaultErrorTip />,
  timeoutCom = <DefaultTimeoutTip />,
  timeoutLimit = DEFAULT_TIMEOUT_LIMIT,
  containerWidth = DEFAULT_CHART_WIDTH,
  containerHeight = DEFAULT_CHART_HEIGHT,
  containerType = CONTAINER_TYPE.DIV,
}) {
  const chartRef = useRef(null);
  const dataRef = useRef(null);
  const [status, setSataus] = useState<STATUS>(STATUS.LOADING);

  // 数据改变，有数据则直接变为ACHIEVE状态；无数据则表示重新发出请求，变为LOADING状态
  useEffect(() => {
    if (data) {
      setSataus(STATUS.ACHIEVE);
      dataRef.current = data;
    } else {
      setSataus(STATUS.LOADING);
    }
  }, [data]);

  // 渲染
  useEffect(() => {
    if (status === STATUS.ACHIEVE) {
      try {
        // 某些图表库渲染时不会先清空div内容，会直接插入新的canvas进行绘制，比如G2
        chartRef.current.innerHTML = '';
        render(chartRef.current, dataRef.current);
        // 完成渲染后变为COMPLETE状态，防止一直为ACHIEVE时dependencies改变的重复渲染
        setSataus(STATUS.COMPLETE);
      } catch (error) {
        console.error(error);

        setSataus(STATUS.ERROR);
      }
    }
  }, [render, status]);

  // 超时
  useEffect(() => {
    // LOADING状态下设置超时计时
    if (status === STATUS.LOADING) {
      const timeoutId = setTimeout(() => {
        setSataus(STATUS.TIMEOUT);
      }, timeoutLimit);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [status, timeoutLimit]);

  const container =
    containerType === CONTAINER_TYPE.SVG ? (
      <svg ref={chartRef} style={{ width: containerWidth, height: containerHeight }}></svg>
    ) : (
      <div ref={chartRef} style={{ width: containerWidth, height: containerHeight }}></div>
    );

  switch (status) {
    case STATUS.ACHIEVE:
      return (
        <Wrapper width={containerWidth} height={containerHeight}>
          {container}
        </Wrapper>
      );
    case STATUS.LOADING:
      return (
        <Wrapper width={containerWidth} height={containerHeight}>
          {loadingCom}
        </Wrapper>
      );
    case STATUS.ERROR:
      return (
        <Wrapper width={containerWidth} height={containerHeight}>
          {errorCom}
        </Wrapper>
      );
    case STATUS.TIMEOUT:
      return (
        <Wrapper width={containerWidth} height={containerHeight}>
          {timeoutCom}
        </Wrapper>
      );
    case STATUS.COMPLETE:
      return (
        <Wrapper width={containerWidth} height={containerHeight}>
          {container}
        </Wrapper>
      );
    default:
      throw new Error('ChartArmor status switch...case... lack');
  }
};

export default ChartArmor;
