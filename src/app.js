import md from './md';

md();

// 如果webpack 开启了热替换，并且使用了hmr插件进行热替换
// webpack只能对除了入口模块的其他子模块进行更新，因为当子模块进行更新后，更新事件一直冒泡知道入口模块，如果入口模块匹配了更新的子模块，那么就能实现子模块的热更新
if (module.hot) {
  module.hot.accept(['./md'], function (d, c, e) {
    var md = require('./md');
    md();
  });
}
