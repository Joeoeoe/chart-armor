# 注意
此组件库还在开发测试中，请勿用于生产环境。

# 介绍
**ChartArmor是一个帮助你使用原生图表代码构建React图表库的React组件**，并且**自动处理了图表各个状态的呈现**，让开发者只需专注于图表开发。

**各个状态的呈现**主要指：数据请求中（Loading），数据请求超时（Timeout），渲染过程出错（Error）等等。

# 问题

如果在React中想要使用图表库一般有两种方法：
* 方法一：使用涉及DOM操作的原生图表库（比如D3、ECharts、G2等），但需要利用ref指向DOM容器，做好请求处理，防止重复渲染等等。**若经验不足可能开发速度较慢、可维护性较差**。
* 方法二：直接使用经封装的React可视化库（比如Recharts、BizCharts等），但这些React库很多是基于原生图表库封装的（比如Rechaarts基于D3、BizCharts基于G2），意味着**可能无法使用原生图表库的最新特性，灵活性也可能比不上原生图表库**。

# 解决
ChartArmor的设想就是将以上两种方法中和：**ChartArmor提供React组件，内部解决ref、重复渲染等的脏活，开发者通过其render接口使用原生图表库绘制图表**。

如此各种原生图表库的demo代码均可直接“复制粘贴”使用，提升开发效率。

# 示例
仅需两步即可完成一个React图表组件的封装。
* 步骤一：使用ChartArmor封装React图表组件
* 步骤二：使用图表组件

## 步骤一：使用ChartArmor封装
```tsx
// EChartsExample.tsx
const EChartsExample: FC<{ data: any }> = function ({ data }) {
  return (
    <ChartArmor
      data={data}
      containerWidth={CHART_WIDTH}
      containerHeight={CHART_HEIGHT}
      render={(dom, data) => {
        // ECharts在原生DOM中使用的图表渲染代码
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

```

## 步骤二：使用图表组件
**因为ChartArmor处理图表的依据是data，所以当无数据时需要置为null，故此处初始数据为null**
```tsx
const SimpleExample = function () {
  // 初始数据为null
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
```
![](https://github.com/Joeoeoe/chart-armor/blob/master/static/image/echarts-example.gif?raw=true)

# ChartArmor处理各个状态的依据主要是data props
ChartArmor内部通过data控制当前状态，当data为null时状态为Loading，故推荐初始数据为null。

![](https://github.com/Joeoeoe/chart-armor/blob/master/static/image/ChartArmor-lifecycle-zn.jpg)

五个状态解释如下：
* Loading：data为null时状态为Loading，此时渲染Loading内容，对应prop为loadingCom
* Achieve：data获取时状态为Achieve，此时开始调用render方法，无特定渲染内容。
* Timeout：data获取超时状态转为Timeout（data为null时ChartArmor内部会开启计时），此时渲染Timeout内容，对应prop为timeoutCom。
* Error：调用render方法出错时状态为Error，此时渲染Error内容，对应prop为errorCom
* Complete：渲染完成状态为Complete。

当状态为Error或Complete时，若重新设置data为null，状态会回至Loading，此时可请求新的数据。

# 什么时候可以使用ChartArmor？
如果您符合以下几种情况，您可以考虑使用ChartArmor：
* 图表复杂，个性化需求多，多个项目同时使用图表，需要构建一个统一的图表库。
* 对React不熟悉，想要快速使用原生图表库在React中插入图表。

如果您是以下几种情况，您不需要使用ChartArmor：
* 图表简单，现成的React图表库能满足所有需求。
* 图表需求少。

# API
| props           | 类型                                     | 默认值                 | 说明                                                        |
| --------------- | ---------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| render*         | (dom, data) => any                       | -                      | 渲染图表代码，dom为图表容器，data为图表所需数据             |
| data*           | any                                      | -                      | 渲染图表时所用数据，data为空值时ChartArmor显示loading       |
| containerWidth  | number                                   | 500                    | 图表容器宽度，一般可和图表宽度相同                          |
| containerHeight | number                                   | 300                    | 图表容器高度，一般可和图表高度相同                          |
| timeoutLimit    | number                                   | 30000                  | 数据请求超时(timeout)时间，当数据获取超时时会出现超时提示   |
| loadingCom      | ReactChild                               | \<DefaultLoadingTip /> | 自定义loading时的提示                                       |
| errorCom        | ReactChild                               | \<DefaultErrorTip />   | 自定义error时的提示                                         |
| timeoutCom      | ReactChild                               | \<DefaultTimeoutTip /> | 自定义timeout时的提示                                       |
| containerType   | CONTAINER_TYPE.DIV \| CONTAINER_TYPE.SVG | CONTAINER_TYPE.DIV     | 图表容器是div或svg，某些图表库主要使用svg绘制图表（例如d3） |

# TODO
- [x] 宽度与高度规划
- [x] 自定义LoadingCom支持
- [x] 使用dom，而不是使用ref.current
- [x] svg与div容器选择支持
- [x] 文档编写
- [x] 图表错误捕获
- [x] 图表错误捕获文档编写
- [x] 图表数据读取超时捕获
- [x] 添加单元测试
- [ ] 超时的话如何进行处理？
- [ ] 根据ChartArmor直接生成图表库页面，计划基于storybook。通过chart-armor-cli、chart-armor-addon支持使用
- [ ] storybook可否配上代码生成
- [ ] storybook可否配上输入数据生成图表推荐
- [ ] storybook图表性能分析

# What's more?
是否有更多的需求呢，欢迎提issue