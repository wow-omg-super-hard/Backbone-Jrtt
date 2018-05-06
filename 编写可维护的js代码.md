当前端网站复杂到一定程度的时候，并且表现与业务逻辑混合在一起的时候，网站往往缺乏可控性

可维护性的代码往往具备以下的特性
1. 单文件控制在1千行以内
2. 模块具备具体的依赖，而不是1个html直接把所有的依赖写入
3. 模块导出不能污染全局环境和造成命名冲突
4. 隔离数据(字段)的逻辑操作和展示
5. 解除数据(字段)和其他字段的耦合


前端的所有业务操作都抽象为数据操作

对数据(字段)的几种操作，read(读)、write(写)、trigger(触发事件|error、change)、render()
read: val()
write: normalize(规范格式化)，在trigger change事件，如果格式化错误或者try错误trigger error事件
render: 解析字段拼接template，得到bind data template，插入到容器中
