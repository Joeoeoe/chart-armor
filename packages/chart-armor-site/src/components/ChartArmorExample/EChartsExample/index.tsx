import ChartArmor from 'chart-armor';
import React, { FC } from 'react';
import * as echarts from 'echarts';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../constants';

const EChartsExample: FC<{ data: any }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      containerWidth={CHART_WIDTH}
      containerHeight={CHART_HEIGHT}
      render={(dom, data) => {
        const chart = echarts.init(dom);
        chart.setOption({
          title: {
            text: 'ECharts example',
          },
          tooltip: {},
          xAxis: {
            data: data.dataX,
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: data.dataY,
            },
          ],
        });
      }}
    />
  );
};

export default EChartsExample;
