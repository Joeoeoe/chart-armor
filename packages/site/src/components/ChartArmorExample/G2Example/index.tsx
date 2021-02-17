import ChartArmor from 'chart-armor';
import React, { FC } from 'react';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../constants';
import { Chart } from '@antv/g2';

const G2Example: FC<{ data }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      render={(dom, data) => {
        const chart = new Chart({
          container: dom,
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
      }}
    />
  );
};

export default G2Example;
