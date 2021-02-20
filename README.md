# 注意
此组件库还在开发测试中，请勿用于生产环境。

# 介绍
**ChartArmor是一个帮助你基于原生图表代码构建React图表库的库。**

如果在React中想要使用图表库一般有两种方法：
* 方法一：使用涉及DOM操作的原生图表库（比如D3、ECharts、G2等），但需要利用ref指向DOM容器，做好生命周期相关的处理，防止重复渲染等等。**若经验不足可能开发速度较慢、可维护性较差**。
* 方法二：直接使用经封装的React可视化库（比如Recharts、BizCharts等），但这些React库很多是基于原生图表库封装的（比如Rechaarts基于D3、BizCharts基于G2），意味着**可能无法使用原生图表库的最新特性，灵活性也可能比不上原生图表库**。

ChartArmor的设想就是将以上两种方法中和：**ChartArmor提供React组件解决ref、重复渲染等等的脏活，提供render接口供原生图表库绘制图表**。

如此各种原生图表库的demo代码均可直接“复制粘贴”使用，提升开发效率。

# 示例
使用ChartArmor封装
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
![](https://github.com/Joeoeoe/chart-armor/blob/master/static/image/echarts-example.gif?raw=true)

对比：自行封装相同功能的React图表组件
```tsx
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
```

# 什么时候可以使用ChartArmor？
如果您符合以下几种情况，您可以考虑使用ChartArmor：
* 图表复杂，个性化需求多，多个项目同时使用图表，需要构建一个统一的图表库。
* 对React不熟悉，想要快速使用原生图表库在React中插入图表。

如果您是以下几种情况，您不需要使用ChartArmor：
* 图表简单，现成的React图表库能满足所有需求。
* 图表需求少。

# API
| props         | 类型                                     | 默认值              | 说明                                                        |
| ------------- | ---------------------------------------- | ------------------- | ----------------------------------------------------------- |
| render*       | (dom, data) => any                       | -                   | 渲染图表代码，dom为图表容器，data为图表所需数据             |
| data*         | any                                      | -                   | 渲染图表时所用数据，data为空值时ChartArmor显示loading       |
| width         | number                                   | 500                 | 图表宽度                                                    |
| height        | number                                   | 300                 | 图表高度                                                    |
| loadingCom    | ReactChild                               | <DefaultLoading />  | 自定义loading时的提示                                       |
| errorCom      | ReactChild                               | <DefaultErrorTip /> | 自定义error时的提示                                         |
| containerType | CONTAINER_TYPE.DIV \| CONTAINER_TYPE.SVG | CONTAINER_TYPE.DIV  | 图表容器是div或svg，某些图表库主要使用svg绘制图表（例如d3） |

# TODO
- [x] 宽度与高度规划
- [x] 自定义LoadingCom支持
- [x] 使用dom，而不是使用ref.current
- [x] svg与div容器选择支持
- [x] 文档编写
- [x] 图表错误捕获
- [x] 图表错误捕获文档编写
- [ ] 图表数据读取超时捕获
- [ ] 根据ChartArmor直接生成图表库页面，计划基于storybook。通过chart-armor-cli、chart-armor-addon支持使用
- [ ] render增加chartProperty属性，供图表属性配置
- [ ] storybook可否配上代码生成
- [ ] storybook可否配上输入数据生成图表推荐

# What's more?
是否有更多的需求呢，欢迎提issue