import React, { FC, useEffect, useRef } from 'react';
import DefaultLoading from '../DefaultLoading';
import { CONTAINER_TYPE, DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from './constants';
import { IChartArmorProps } from './types';

const ChartArmor: FC<IChartArmorProps> = function ({
  render,
  data,
  loadingCom = <DefaultLoading />,
  width = DEFAULT_CHART_WIDTH,
  height = DEFAULT_CHART_HEIGHT,
  containerType = CONTAINER_TYPE.DIV,
}) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (data) {
      render(chartRef.current, data);
    }
  }, [data]);

  const container =
    containerType === CONTAINER_TYPE.SVG ? (
      <svg ref={chartRef} style={{ width: width, height: height }}></svg>
    ) : (
      <div ref={chartRef} style={{ width: width, height: height }}></div>
    );

  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
        }}>
        {data ? container : loadingCom}
      </div>
    </div>
  );
};

export default ChartArmor;
