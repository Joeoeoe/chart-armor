import React, { FC, useEffect, useRef } from 'react';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../../constants';
import Loading from '../../../Loading';
import { Bar } from '@antv/g2plot';

const G2PlotPureExample: FC<{ data: any }> = function ({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const bar = new Bar(chartRef.current, {
        data,
        width: CHART_WIDTH,
        height: CHART_HEIGHT,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
        autoFit: true,
      });
      bar.render();
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
        {!data ? <Loading /> : <div ref={chartRef} />}
      </div>
    </div>
  );
};

export default G2PlotPureExample;
