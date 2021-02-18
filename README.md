# 介绍
ChartArmor是一个帮助你构建自己的React图表库的库。

如果在React中想要使用图表库一般有两种方法：
* 方法一：使用涉及DOM操作的原生图表库（比如D3、ECharts、G2等），但需要利用ref指向DOM容器，做好生命周期相关的处理，防止重复渲染等等。若经验不足可能开发速度较慢、可维护性较差；
* 方法二：直接使用经封装的React可视化库（比如Recharts、BizCharts等），但这些React库很多是基于原生图表库封装的（比如Rechaarts基于D3、BizCharts基于G2），意味着可能无法使用原生图表库的最新特性，灵活性也可能比不上原生图表库。

ChartArmor的设想就是将以上两种方法中和，**ChartArmor提供React组件解决ref、重复渲染等等的脏活，组件提供render接口供原生图表库绘制图表**。如此各种原生图表库的demo代码均可直接“复制粘贴”使用，提升开发效率

![](./assets/test.png)

# 示例
使用ChartArmor
```tsx
// EChartsExample.tsx
const EChartsExample: FC<{ data: any }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      render={(dom, data) => {
        // 图表渲染代码
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

// 使用EChartsExample.tsx
{echartsDataList.map((data, i) => {
    return <EChartsExample data={data} key={i} />;
})}
```



# 理想使用方式
1. 复制粘贴原生代码，传入data即可在React中渲染图表。data格式与原生代码匹配
2. 封装好loading，并开放接口支持自定义

# props
| props      | 是否必填 | 解释                                                |
| ---------- | -------- | --------------------------------------------------- |
| render     | 是       | (ref, data) => { render code} 。渲染图表代码        |
| loadingCom | 否       | 自定义loading组件，无数据时边框大小由loadingCom决定 |

# TODO
- [x] 宽度与高度规划
- [x] 自定义LoadingCom支持
- [x] 使用dom，而不是使用ref.current
- [x] svg与div容器选择支持
- [ ] 文档编写
- [ ] 图表库页面生成

