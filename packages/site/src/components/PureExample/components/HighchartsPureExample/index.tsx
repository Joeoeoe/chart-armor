import React, { FC, useEffect, useRef } from 'react';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../../constants';
import Loading from '../../../Loading';
import Highcharts from 'highcharts';

const HighchartsPureExample: FC<{ data: any }> = function ({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      Highcharts.chart(chartRef.current, {
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
        {data ? <div ref={chartRef} /> : <Loading />}
      </div>
    </div>
  );
};

export default HighchartsPureExample;
