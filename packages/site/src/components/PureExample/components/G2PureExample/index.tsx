import React, { FC, useEffect, useRef } from 'react';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../../constants';
import Loading from '../../../Loading';
import { Chart } from '@antv/g2';

const G2PureExample: FC<{ data: any }> = function ({ data }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (data) {
      const chart = new Chart({
        container: chartRef.current,
        height: CHART_HEIGHT,
        width: CHART_WIDTH,
        autoFit: true,
      });

      chart.data(data);

      chart.scale('sales', { nice: true });
      chart.tooltip({
        showMarkers: false,
      });
      chart.interaction('active-region');
      chart.interval().position('year*sales');
      chart.render();
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

export default G2PureExample;
