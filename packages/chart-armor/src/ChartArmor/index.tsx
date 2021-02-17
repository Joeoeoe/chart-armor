import React, { FC, useEffect, useRef } from 'react';
import DefaultLoading from '../DefaultLoading';
import { DEFAULT_CHART_HEIGHT, DEFAULT_CHART_WIDTH } from './constants';
import { IChartArmorProps } from './types';

const ChartArmor: FC<IChartArmorProps> = function ({
  render,
  data,
  loadingCom = <DefaultLoading />,
  width = DEFAULT_CHART_WIDTH,
  height = DEFAULT_CHART_HEIGHT,
}) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (data) {
      render(chartRef.current, data);
    }
  }, [data]);

  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
        }}>
        {data ? <div ref={chartRef} style={{ width: width, height: height }} /> : loadingCom}
      </div>
    </div>
  );
};

export default ChartArmor;
