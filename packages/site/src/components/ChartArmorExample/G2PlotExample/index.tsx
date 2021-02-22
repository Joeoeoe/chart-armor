import ChartArmor from 'chart-armor';
import React, { FC } from 'react';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../constants';
import { Bar } from '@antv/g2plot';

const G2PlotExample: FC<{ data }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      containerWidth={CHART_WIDTH}
      containerHeight={CHART_HEIGHT}
      render={(dom, data) => {
        const bar = new Bar(dom, {
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
      }}
    />
  );
};

export default G2PlotExample;
