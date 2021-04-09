import ChartArmor from 'chart-armor';
import React from 'react';
import * as echarts from 'echarts';

const EChartsExample = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      containerWidth={500}
      containerHeight={300}
      render={(dom, data) => {
        // ECharts在原生DOM中使用的图表渲染代码
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
