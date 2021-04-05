import React from 'react';
import { act, render, screen } from '@testing-library/react';
import ChartArmor from '../src/ChartArmor/index';
import Highcharts from 'highcharts';
import { LOADING_TEXT } from '../src/components/DefaultLoadingTip';
import { TIMEOUT_TEXT } from '../src/components/DetaultTimeoutTip';

const chartsRender = (dom, data) => {
  Highcharts.chart(dom, {
    chart: {
      type: 'bar',
      width: 500,
      height: 300,
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
};

// const chartsErrorRender = () => {
//   throw new Error('render error test, you can ignore this error');
// };

const chartsData = {
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
};

describe('ChartArmor test', () => {
  test('complete flow: Loading——Achieve——Complete', () => {
    let data = null;
    // Loading
    const { rerender } = render(<ChartArmor data={data} render={chartsRender} />);
    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();

    // Achieve and Complete
    data = chartsData;
    rerender(<ChartArmor data={data} render={chartsRender} />);
    expect(screen.queryByText(LOADING_TEXT)).toBeNull();
  });

  // test('error flow: Loading——Achieve——Error', () => {
  //   let data = null;

  //   // Loading
  //   const { rerender } = render(<ChartArmor data={data} render={chartsRender} />);
  //   expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();

  //   // Achieve and Error
  //   data = chartsData;
  //   rerender(<ChartArmor data={data} render={chartsErrorRender} />);
  //   expect(screen.getByText(ERROR_TEXT)).toBeInTheDocument();
  // });

  test('timeout flow: Loading——Timeout', async () => {
    const data = null;
    const timeout = 2000;

    // Loading
    render(<ChartArmor data={data} render={chartsRender} timeoutLimit={timeout} />);
    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();

    // Timeout
    await act(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout + 1000);
      });
    });

    expect(screen.getByText(TIMEOUT_TEXT)).toBeInTheDocument();
  });

  test('complete reset data: Loading——Achieve——Complete——Loading', () => {
    let data = null;
    // Loading
    const { rerender } = render(<ChartArmor data={data} render={chartsRender} />);
    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();

    // Achieve and Complete
    data = chartsData;
    rerender(<ChartArmor data={data} render={chartsRender} />);
    expect(screen.queryByText(LOADING_TEXT)).toBeNull();

    // Loading
    data = null;
    rerender(<ChartArmor data={data} render={chartsRender} />);
    expect(screen.getByText(LOADING_TEXT)).toBeInTheDocument();
  });
});
