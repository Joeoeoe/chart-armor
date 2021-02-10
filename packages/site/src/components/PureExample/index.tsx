import React, { Fragment, useEffect, useState } from 'react';
import { mockLoading } from '../../utils';
import D3PureExample from './components/D3PureExample';
import EChartsPureExample from './components/EChartsPureExample';
import G2PlotPureExample from './components/G2PlotPureExample';
import G2PureExample from './components/G2PureExample';
import HighchartsPureExample from './components/HighchartsPureExample';
import styles from './index.module.less';
import ChartArmor from 'chart-armor';

const RawExample = function () {
  // d3 mock数据
  const [d3DataList, setD3DataList] = useState(new Array(2).fill(null));
  // echarts mock数据
  const [echartsDataList, setEchartsDataList] = useState(new Array(2).fill(null));
  // G2 mock数据
  const [g2DataList, setG2DataList] = useState(new Array(2).fill(null));
  // G2Plot mock数据
  const [g2PlotDataList, setG2PlotDataList] = useState(new Array(2).fill(null));
  // Highcharts mock数据
  const [highchartsDataList, setHighchartsDataList] = useState(new Array(2).fill(null));
  useEffect(() => {
    const fetchData = async function () {
      await mockLoading();

      setD3DataList([
        [
          {
            name: 'A',
            percentage: 30,
          },
          {
            name: 'B',
            percentage: 20,
          },
          {
            name: 'C',
            percentage: 30,
          },
          {
            name: 'D',
            percentage: 20,
          },
        ],
        [
          {
            name: 'A',
            percentage: 30,
          },
          {
            name: 'B',
            percentage: 20,
          },
          {
            name: 'C',
            percentage: 30,
          },
          {
            name: 'D',
            percentage: 20,
          },
        ],
      ]);

      setEchartsDataList([
        {
          dataX: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          dataY: [5, 20, 36, 10, 10, 20],
        },
        {
          dataX: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          dataY: [5, 20, 36, 10, 10, 20],
        },
      ]);

      setG2DataList([
        [
          { year: '1951 年', sales: 38 },
          { year: '1952 年', sales: 52 },
          { year: '1956 年', sales: 61 },
          { year: '1957 年', sales: 145 },
          { year: '1958 年', sales: 48 },
          { year: '1959 年', sales: 38 },
          { year: '1960 年', sales: 38 },
          { year: '1962 年', sales: 38 },
        ],
        [
          { year: '1951 年', sales: 38 },
          { year: '1952 年', sales: 52 },
          { year: '1956 年', sales: 61 },
          { year: '1957 年', sales: 145 },
          { year: '1958 年', sales: 48 },
          { year: '1959 年', sales: 38 },
          { year: '1960 年', sales: 38 },
          { year: '1962 年', sales: 38 },
        ],
      ]);

      setG2PlotDataList([
        [
          { year: '1951 年', value: 38 },
          { year: '1952 年', value: 52 },
          { year: '1956 年', value: 61 },
          { year: '1957 年', value: 145 },
          { year: '1958 年', value: 48 },
        ],
        [
          { year: '1951 年', value: 38 },
          { year: '1952 年', value: 52 },
          { year: '1956 年', value: 61 },
          { year: '1957 年', value: 145 },
          { year: '1958 年', value: 48 },
        ],
      ]);

      setHighchartsDataList([
        {
          categories: ['Apples', 'Bananas', 'Oranges'],
          series: [
            {
              name: 'Jane',
              data: [1, 0, 4],
            },
            {
              name: 'John',
              data: [5, 7, 3],
            },
          ],
        },
        {
          categories: ['Apples', 'Bananas', 'Oranges'],
          series: [
            {
              name: 'Jane',
              data: [1, 0, 4],
            },
            {
              name: 'John',
              data: [5, 7, 3],
            },
          ],
        },
      ]);
    };

    fetchData();
  }, []);

  console.log(styles);
  return (
    <Fragment>
      <h1 style={{ marginBottom: 16 }}>RawExampleWithProps</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className={styles['chart-wrapper']}>
          <h2>d3</h2>
          {d3DataList.map((data, i) => (
            <D3PureExample data={data} key={i} />
          ))}
        </div>

        <div className={styles['chart-wrapper']}>
          <h2>echarts</h2>
          {echartsDataList.map((data, i) => {
            return <EChartsPureExample data={data} key={i} />;
          })}
        </div>

        <div className={styles['chart-wrapper']}>
          <h2>G2</h2>
          {g2DataList.map((data, i) => {
            return <G2PureExample data={data} key={i} />;
          })}
        </div>

        <div className={styles['chart-wrapper']}>
          <h2>G2Plot</h2>
          {g2PlotDataList.map((data, i) => {
            return <G2PlotPureExample data={data} key={i} />;
          })}
        </div>

        <div className={styles['chart-wrapper']}>
          <h2>Highcharts</h2>
          {highchartsDataList.map((data, i) => {
            return <HighchartsPureExample data={data} key={i} />;
          })}
        </div>

        <ChartArmor />
      </div>
    </Fragment>
  );
};

export default RawExample;
