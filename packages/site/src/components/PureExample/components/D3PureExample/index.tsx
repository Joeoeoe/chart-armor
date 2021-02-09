import React, { FC, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Loading from '../../../Loading';
import { CHART_HEIGHT, CHART_WIDTH } from '../../../../constants';

const D3PureExample: FC<{ data: any }> = function ({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const width = CHART_WIDTH,
        height = CHART_HEIGHT,
        radius = Math.min(width, height) / 2 - 10;

      // 插入g容器
      const g = d3
        .select(chartRef.current)
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`); //图形左上角相对画布偏移

      // 颜色尺
      const color = d3
        .scaleOrdinal<any>()
        .range(['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9']);

      const pie = d3.pie<{ name: string; percentage: number }>();

      pie.value(function (d) {
        return d.percentage;
      });
      const pieData = pie(data);

      const arc = d3.arc<any, any>();
      arc.outerRadius(radius);
      arc.innerRadius(0);

      // 绑定数据，在g容器中插入g
      const groups = g.selectAll('g').data(pieData).enter().append('g');

      // 画path
      groups
        .append('path')
        .attr('d', arc) //将pieData[i]传予arc
        .style('fill', (d) => color(d.data.name));

      // 画text
      groups
        .append('text')
        .text((d) => d.data.name)
        .attr('transform', (d) => `translate(${arc.centroid(d)})`)
        .attr('dy', '.35em')
        .style('text-anchor', 'middle')
        .style('font-size', '20px');
    }
  }, [data]);

  return (
    <div>
      {/* chart */}
      <div
        style={{
          width: CHART_WIDTH,
          height: CHART_HEIGHT,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data ? <svg ref={chartRef}></svg> : <Loading />}
      </div>
    </div>
  );
};

export default D3PureExample;
