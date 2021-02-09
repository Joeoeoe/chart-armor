import React, { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../../constants';
import Loading from '../../../Loading';

const EChartsPureExample: FC<{ data: any }> = function ({ data }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (data) {
      const chart = echarts.init(chartRef.current);
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
          <div ref={chartRef} style={{ width: CHART_WIDTH, height: CHART_HEIGHT }}></div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default EChartsPureExample;
