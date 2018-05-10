import Backbone from 'backbone';
import _ from 'underscore';

export default function g () {
  // backbone总结
  // Model是用来检测数据是否改变，并且可以进行赋值验证，React + Redux，是react自身检测，Redux只做统一存储、同步、订阅、触发
  // Events: 是一个可以被任何对象所继承的模块，让对象具有定义和触发自定义事件的能力
  //   on 和 listenTo的区别就在于绑定的回调的this指向不同，并且方便删除监听的事件回调
  // Model: 模型，负责数据的获取、格式化、验证、CRUD、检测更新
  //   options.validate: 不验证数据，如果未提供，或者validate返回undefined或false都代表验证成功
  //   options.silent: 不触发change/change:prop事件
  //   options.wait: 是否等请求到数据再set还是先set在请求
  //   options.parse: 是否需要数据格式化
  //   model.id 获取model.get(this.idAttribute)，一般是对应着服务端数据
  //   model.cid 前端id，一般是作为ui model和其他ui model进行关联的
  //   model.get/model.escape 根据key 获取attribute value的或html实体化输出
  //   model.set 设置model attribute
  //   model.fetch 获取服务端数据，如果获取成功，进行格式化，然后在set
  //   model.save 先对参数进行验证，在set，请求服务器成功，格式化，然后在set 返回的数据
  //   model.destroy 删除监听model的事件的其他对象的回调，请求服务器
  //   model.url 模型操作的url地址，如果model存在urlRoot属性，并且没有save过那么就返回的是urlRoot，如果存在model存在collection，并且没有save过，就是model.collection.url，如果save过
  // Collection 模型集合
  //   Collection.prototype.model，当models参数里的元素时json对象时候，将会使用json对象作为model的参数实例化
  //   collection.toJSON，将collection.models里的model转换成json对象
  //   collection.comparator|Collection.prototype.comparator和数组的sort(function () {})一样，自定义排序规则
  //   options.at 必须是存在的索引
  //   options.merge 如果添加了相同的对象，那么就属性合并
  //   options.wait 是请求到了数据后在add还是先add在请求数据
  //   collection.add 添加集合中存在的引用会被去重，如果是json对象或者新model实例，那么判断id是否一致
  //   collection.remove 删除集合中的model
  //   collection.set|collection.reset 如果给定的model存在于集合中，那么就被合并，其他集合的model remove，如果不存在集合，那么就添加，其余的remove, 使用reset那么就不会触发add和remove事件
  //   collection.get 通过id和cid获取model
  //   collection.at 获取指定index的model
  //   collection.pluck 返回集合中每个model的属性值
  //   collection.where 匹配属性键值对相同的model集合
  //   collection.fetch 请求服务端，然后set
  // Router 路由，让url能连接到action和event

  /* backbone不足之处 */
  /*
    1、controller上还是需要查询dom、操作dom，所以会出现mvvm，采用数据和View绑定式开发，让开发人员彻底抛弃dom，同时在渲染上采取了虚拟dom技术，大大的提高了性能
    2、1份数据对应多个view
      可以将多个view统一放到1个大的View中，并且绑定model,其他子View中对model进行绑定 change事件，如果相同的字段改变，那么所有view都会更新，通常这个大view是PageView
    3、子视图事件委托给父视图
      父视图绑定事件，子视图的template包含model的id，点击处理器的时候，根据此id获取model
    4、backbone管理子视图和嵌套子视图
      
  */



  var Person = Backbone.Model.extend({
    defaults: {
      name: ''
    }
  });

  var Persons = Backbone.Collection.extend({
    model: Person
  });


  //zwb.save({});
  // model
  //console.log(zwb.isNew());

  // create update => save
  // read => fetch
  // delete => destroy
  // console.log(zwb.changed);
  // console.log(zwb.toJSON(), 'change 前');

  // var zwb = new Person({ name: 'zwb', sex: 10 });
  // var dispatcher = _.clone(Backbone.Events);
  //
  // dispatcher.listenTo(zwb, 'change:sex', function (model, value) {
  //   console.log(model, value, 'xx');
  //   console.log(model.previous('sex'));
  // });
  //
  // zwb.on('change:sex', function (model, value) {
  //   console.log(value, 'model自身的');
  // });
  //
  // dispatcher.stopListening(zwb);
  //
  // setTimeout(function () {
  //   zwb.set('sex', '10');
  // }, 1000);

  // validate: true，设置验证数据
  //console.log(zwb.get('sex'), zwb.previous('name'));
  // dispatcher.listenTo()
  //

}
