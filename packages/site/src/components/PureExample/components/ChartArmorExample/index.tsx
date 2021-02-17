import ChartArmor from 'chart-armor';
import React, { FC } from 'react';
import * as echarts from 'echarts';

const ChartArmorExample: FC<{ data: any }> = function ({ data }) {
  return (
    <ChartArmor
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
      data={data}
    />
  );
};

export default ChartArmorExample;
