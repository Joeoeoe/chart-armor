import React, { useEffect, useState } from 'react';
import EChartsExample from './EChartsExample';

const requestData = function () {
  return new Promise<{ data: any }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          dataX: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          dataY: [5, 20, 36, 10, 10, 20],
        },
      });
    }, 2000);
  });
};

const SimpleExample = function () {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      const response = await requestData();

      setChartData(response.data);
    };

    fetchData();
  }, []);

  return <EChartsExample data={chartData} />;
};

export default SimpleExample;
