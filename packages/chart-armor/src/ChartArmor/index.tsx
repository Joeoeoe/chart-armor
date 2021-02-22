import React, { FC, useEffect, useRef, useState } from 'react';
import Wrapper from '../components/Wrapper';
import DefaultErrorTip from '../components/DefaultErrorTip';
import DefaultLoading from '../components/DefaultLoading';
import { CONTAINER_TYPE, DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from './constants';
import { IChartArmorProps } from './types';

const ChartArmor: FC<IChartArmorProps> = function ({
  render,
  data,
  loadingCom = <DefaultLoading />,
  errorCom = <DefaultErrorTip />,
  containerWidth = DEFAULT_CHART_WIDTH,
  containerHeight = DEFAULT_CHART_HEIGHT,
  containerType = CONTAINER_TYPE.DIV,
}) {
  const chartRef = useRef(null);
  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    try {
      if (data) {
        render(chartRef.current, data);
      }
      setHasError(false);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  }, [data]);

  const container =
    containerType === CONTAINER_TYPE.SVG ? (
      <svg ref={chartRef} style={{ width: containerWidth, height: containerHeight }}></svg>
    ) : (
      <div ref={chartRef} style={{ width: containerWidth, height: containerHeight }}></div>
    );

  return hasError ? (
    <Wrapper width={containerWidth} height={containerHeight}>
      {errorCom}
    </Wrapper>
  ) : (
    <Wrapper width={containerWidth} height={containerHeight}>
      {data ? container : loadingCom}
    </Wrapper>
  );
};

export default ChartArmor;
