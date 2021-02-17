import ChartArmor from 'chart-armor';
import Highcharts from 'highcharts';
import React, { FC } from 'react';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../constants';

const HighchartsExample: FC<{ data }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      render={(dom, data) => {
        Highcharts.chart(dom, {
          chart: {
            type: 'bar',
            width: CHART_WIDTH,
            height: CHART_HEIGHT,
          },
          title: {
            text: 'Fruit Consumption',
          },
          xAxis: {
            categories: data.categories,
          },
          yAxis: {
            title: {
              text: 'Fruit eaten',
            },
          },
          series: data.series,
        });
      }}
    />
  );
};

export default HighchartsExample;
