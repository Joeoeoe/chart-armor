# 理想使用方式
1. 复制粘贴原生代码，传入data即可在React中渲染图表。data格式与原生代码匹配
2. 封装好loading，并开放接口支持自定义

# props
| props      | 是否必填 | 解释                                                |
| ---------- | -------- | --------------------------------------------------- |
| render     | 是       | (ref, data) => { render code} 。渲染图表代码        |
| loadingCom | 否       | 自定义loading组件，无数据时边框大小由loadingCom决定 |

# TODO
- [ ] 宽度与高度规划
- [ ] 自定义LoadingCom支持
- [ ] 上下左右外围支持
- [ ] 使用dom，而不是使用ref.current
- [ ] 文档编写