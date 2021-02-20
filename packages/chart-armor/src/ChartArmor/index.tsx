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
  width = DEFAULT_CHART_WIDTH,
  height = DEFAULT_CHART_HEIGHT,
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
      <svg ref={chartRef} style={{ width: width, height: height }}></svg>
    ) : (
      <div ref={chartRef} style={{ width: width, height: height }}></div>
    );

  return hasError ? (
    <Wrapper width={width} height={height}>
      {errorCom}
    </Wrapper>
  ) : (
    <Wrapper width={width} height={height}>
      {data ? container : loadingCom}
    </Wrapper>
  );
};

export default ChartArmor;
