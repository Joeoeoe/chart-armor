import ChartArmor from 'chart-armor';
import React, { FC } from 'react';
import * as echarts from 'echarts';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../constants';

const ErrorExample: FC<{ data: any }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      errorCom={<p>error test</p>}
      render={(dom, data) => {
        throw new Error('error test');
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

export default ErrorExample;
