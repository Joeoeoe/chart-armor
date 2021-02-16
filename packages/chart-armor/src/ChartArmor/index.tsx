import React, { FC, useEffect, useRef } from 'react';
import DefaultLoading from '../DefaultLoading';
import { CHART_HEIGHT, CHART_WIDTH } from './constants';
import { IChartArmorProps } from './types';

const ChartArmor: FC<IChartArmorProps> = function ({ render, data, loadingCom }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (data) {
      render(chartRef, data);
    }
  }, [data]);
  return (
    <div>
      <div
        style={{
          width: CHART_WIDTH,
          height: CHART_HEIGHT,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data ? (
          <div ref={chartRef} style={{ width: CHART_WIDTH, height: CHART_HEIGHT }} />
        ) : (
          <DefaultLoading />
        )}
      </div>
    </div>
  );
};

export default ChartArmor;
