import React, { FC, useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';
import Loading from '../../Loading';
import { mockLoading } from '../../../utils';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../constants';

const AntChartsExample = function ({ data }) {
  const [loading, setLoading] = useState<boolean>(true);

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div
      style={{
        width: CHART_WIDTH,
        height: CHART_HEIGHT,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {loading ? <Loading /> : <Line {...config} />}
    </div>
  );
};

export default AntChartsExample;
