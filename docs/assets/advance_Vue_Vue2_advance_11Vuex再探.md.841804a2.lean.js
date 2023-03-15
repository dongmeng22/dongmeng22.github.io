import{_ as e,a as o}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as r,o as c,c as F,D as s,x as n,a as D,Q as y}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const j=JSON.parse('{"title":"1. Vuex概述","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 组件间共享数据的方式","slug":"_1-1-组件间共享数据的方式","link":"#_1-1-组件间共享数据的方式","children":[]},{"level":2,"title":"1.2 Vuex 是什么（实现组件间数据共享）","slug":"_1-2-vuex-是什么-实现组件间数据共享","link":"#_1-2-vuex-是什么-实现组件间数据共享","children":[]},{"level":2,"title":"1.3 使用 Vuex 统一管理状态的好处","slug":"_1-3-使用-vuex-统一管理状态的好处","link":"#_1-3-使用-vuex-统一管理状态的好处","children":[]},{"level":2,"title":"1.4 什么样的数据适合存储到 Vuex 中","slug":"_1-4-什么样的数据适合存储到-vuex-中","link":"#_1-4-什么样的数据适合存储到-vuex-中","children":[]},{"level":2,"title":"1. 安装 vuex 依赖包","slug":"_1-安装-vuex-依赖包","link":"#_1-安装-vuex-依赖包","children":[]},{"level":2,"title":"2. 导入 vuex 包","slug":"_2-导入-vuex-包","link":"#_2-导入-vuex-包","children":[]},{"level":2,"title":"3. 创建 store 对象","slug":"_3-创建-store-对象","link":"#_3-创建-store-对象","children":[]},{"level":2,"title":"4. 将 store 对象挂载到 vue 实例中","slug":"_4-将-store-对象挂载到-vue-实例中","link":"#_4-将-store-对象挂载到-vue-实例中","children":[]},{"level":2,"title":"Addition.vue","slug":"addition-vue","link":"#addition-vue","children":[]},{"level":2,"title":"Subtraction.vue","slug":"subtraction-vue","link":"#subtraction-vue","children":[]},{"level":2,"title":"App.vue","slug":"app-vue","link":"#app-vue","children":[]},{"level":2,"title":"4.1 核心概念概述","slug":"_4-1-核心概念概述","link":"#_4-1-核心概念概述","children":[]},{"level":2,"title":"4.2 State （声明）","slug":"_4-2-state-声明","link":"#_4-2-state-声明","children":[{"level":3,"title":"案例 store/index.js","slug":"案例-store-index-js","link":"#案例-store-index-js","children":[]},{"level":3,"title":"组件访问 State 中数据的第一种方式","slug":"组件访问-state-中数据的第一种方式","link":"#组件访问-state-中数据的第一种方式","children":[]},{"level":3,"title":"案例 Addition.vue","slug":"案例-addition-vue","link":"#案例-addition-vue","children":[]},{"level":3,"title":"组件访问 State 中数据的第二种方式","slug":"组件访问-state-中数据的第二种方式","link":"#组件访问-state-中数据的第二种方式","children":[]},{"level":3,"title":"案例 Subtraction.vue","slug":"案例-subtraction-vue","link":"#案例-subtraction-vue","children":[]}]},{"level":2,"title":"4.3 Mutation （变化）","slug":"_4-3-mutation-变化","link":"#_4-3-mutation-变化","children":[{"level":3,"title":"4.3.1 触发的第一种方式","slug":"_4-3-1-触发的第一种方式","link":"#_4-3-1-触发的第一种方式","children":[]},{"level":3,"title":"案例 store/index.js","slug":"案例-store-index-js-1","link":"#案例-store-index-js-1","children":[]},{"level":3,"title":"案例 Addition.vue","slug":"案例-addition-vue-1","link":"#案例-addition-vue-1","children":[]},{"level":3,"title":"4.3.1 触发的第二种方式","slug":"_4-3-1-触发的第二种方式","link":"#_4-3-1-触发的第二种方式","children":[]},{"level":3,"title":"案例 store/index.js","slug":"案例-store-index-js-2","link":"#案例-store-index-js-2","children":[]},{"level":3,"title":"案例 Subtraction.vue","slug":"案例-subtraction-vue-1","link":"#案例-subtraction-vue-1","children":[]}]},{"level":2,"title":"4.4 Action （行动）","slug":"_4-4-action-行动","link":"#_4-4-action-行动","children":[{"level":3,"title":"触发的第一种方式","slug":"触发的第一种方式","link":"#触发的第一种方式","children":[]},{"level":3,"title":"案例 store/index.js","slug":"案例-store-index-js-3","link":"#案例-store-index-js-3","children":[]},{"level":3,"title":"案例 Addition.vue","slug":"案例-addition-vue-2","link":"#案例-addition-vue-2","children":[]},{"level":3,"title":"触发的第二种方式","slug":"触发的第二种方式","link":"#触发的第二种方式","children":[]},{"level":3,"title":"案例 store/index.js","slug":"案例-store-index-js-4","link":"#案例-store-index-js-4","children":[]},{"level":3,"title":"案例 Subtraction.vue","slug":"案例-subtraction-vue-2","link":"#案例-subtraction-vue-2","children":[]},{"level":3,"title":"案例 简化 Subtraction.vue","slug":"案例-简化-subtraction-vue","link":"#案例-简化-subtraction-vue","children":[]}]},{"level":2,"title":"4.5 Getter","slug":"_4-5-getter","link":"#_4-5-getter","children":[{"level":3,"title":"使用 getters 的第一种方式","slug":"使用-getters-的第一种方式","link":"#使用-getters-的第一种方式","children":[]},{"level":3,"title":"案例 store/index.js","slug":"案例-store-index-js-5","link":"#案例-store-index-js-5","children":[]},{"level":3,"title":"案例 Addition.vue","slug":"案例-addition-vue-3","link":"#案例-addition-vue-3","children":[]},{"level":3,"title":"使用 getters 的第二种方式","slug":"使用-getters-的第二种方式","link":"#使用-getters-的第二种方式","children":[]},{"level":3,"title":"案例 Subtraction.vue","slug":"案例-subtraction-vue-3","link":"#案例-subtraction-vue-3","children":[]}]},{"level":2,"title":"4.6 展示","slug":"_4-6-展示","link":"#_4-6-展示","children":[]},{"level":2,"title":"5.1 初始化项目","slug":"_5-1-初始化项目","link":"#_5-1-初始化项目","children":[{"level":3,"title":"main.js","slug":"main-js","link":"#main-js","children":[]},{"level":3,"title":"App.vue","slug":"app-vue-1","link":"#app-vue-1","children":[]}]},{"level":2,"title":"5.2 完成具体功能","slug":"_5-2-完成具体功能","link":"#_5-2-完成具体功能","children":[{"level":3,"title":"5.2.1 动态加载任务列表list数据","slug":"_5-2-1-动态加载任务列表list数据","link":"#_5-2-1-动态加载任务列表list数据","children":[{"level":4,"title":"1. main.js 导入并挂载store","slug":"_1-main-js-导入并挂载store","link":"#_1-main-js-导入并挂载store","children":[]},{"level":4,"title":"2. 将App.vue中data的list数组 剪切 到public/list.json中","slug":"_2-将app-vue中data的list数组-剪切-到public-list-json中","link":"#_2-将app-vue中data的list数组-剪切-到public-list-json中","children":[]},{"level":4,"title":"3. 在store/index.js中使用axios发请求获取数据","slug":"_3-在store-index-js中使用axios发请求获取数据","link":"#_3-在store-index-js中使用axios发请求获取数据","children":[]},{"level":4,"title":"4. 将数据存储到state中，在mutations中为list赋值","slug":"_4-将数据存储到state中-在mutations中为list赋值","link":"#_4-将数据存储到state中-在mutations中为list赋值","children":[]},{"level":4,"title":"5. 在App.vue中将store中的数据映射过来","slug":"_5-在app-vue中将store中的数据映射过来","link":"#_5-在app-vue中将store中的数据映射过来","children":[]}]},{"level":3,"title":"5.2.2 文本框内容 与 store数据 双向绑定","slug":"_5-2-2-文本框内容-与-store数据-双向绑定","link":"#_5-2-2-文本框内容-与-store数据-双向绑定","children":[{"level":4,"title":"1. 创建state声明 inputValue","slug":"_1-创建state声明-inputvalue","link":"#_1-创建state声明-inputvalue","children":[]},{"level":4,"title":"2. 将全局inputVale映射到当前组件的计算属性中---组件中调用state（方式二）","slug":"_2-将全局inputvale映射到当前组件的计算属性中-组件中调用state-方式二","link":"#_2-将全局inputvale映射到当前组件的计算属性中-组件中调用state-方式二","children":[]},{"level":4,"title":"3.  监听文本框内容变化 change事件(获取输入框的值)","slug":"_3-监听文本框内容变化-change事件-获取输入框的值","link":"#_3-监听文本框内容变化-change事件-获取输入框的值","children":[]},{"level":4,"title":"4. 将输入框获得的值 保存到 inputVaule上 （为state赋值）","slug":"_4-将输入框获得的值-保存到-inputvaule上-为state赋值","link":"#_4-将输入框获得的值-保存到-inputvaule上-为state赋值","children":[]},{"level":4,"title":"5. 组件中调用mutations（方式一）","slug":"_5-组件中调用mutations-方式一","link":"#_5-组件中调用mutations-方式一","children":[]}]},{"level":3,"title":"5.2.3 添加任务事项","slug":"_5-2-3-添加任务事项","link":"#_5-2-3-添加任务事项","children":[{"level":4,"title":"1. 为button按钮绑定单击事件处理函数","slug":"_1-为button按钮绑定单击事件处理函数","link":"#_1-为button按钮绑定单击事件处理函数","children":[]},{"level":4,"title":"2. 判断输入是否为空，为空就返回错误信息","slug":"_2-判断输入是否为空-为空就返回错误信息","link":"#_2-判断输入是否为空-为空就返回错误信息","children":[]},{"level":4,"title":"3. mutations中定义 添加 列表项 （改变list）","slug":"_3-mutations中定义-添加-列表项-改变list","link":"#_3-mutations中定义-添加-列表项-改变list","children":[]},{"level":4,"title":"4. 输入内容不为空 就 调用mutations中的addItem执行添加任务项","slug":"_4-输入内容不为空-就-调用mutations中的additem执行添加任务项","link":"#_4-输入内容不为空-就-调用mutations中的additem执行添加任务项","children":[]}]},{"level":3,"title":"5.2.4 删除任务事项","slug":"_5-2-4-删除任务事项","link":"#_5-2-4-删除任务事项","children":[{"level":4,"title":"App.vue/template","slug":"app-vue-template","link":"#app-vue-template","children":[]},{"level":4,"title":"store/index.js/mutations","slug":"store-index-js-mutations","link":"#store-index-js-mutations","children":[]},{"level":4,"title":"App.vue/script/methods","slug":"app-vue-script-methods","link":"#app-vue-script-methods","children":[]}]},{"level":3,"title":"5.2.5 动态绑定复选框的选中状态","slug":"_5-2-5-动态绑定复选框的选中状态","link":"#_5-2-5-动态绑定复选框的选中状态","children":[]},{"level":3,"title":"5.2.6 修改任务事项的完成状态","slug":"_5-2-6-修改任务事项的完成状态","link":"#_5-2-6-修改任务事项的完成状态","children":[{"level":4,"title":"App.vue/template","slug":"app-vue-template-1","link":"#app-vue-template-1","children":[]},{"level":4,"title":"App.vue/script/mehods","slug":"app-vue-script-mehods","link":"#app-vue-script-mehods","children":[]},{"level":4,"title":"store/index.js/mutations","slug":"store-index-js-mutations-1","link":"#store-index-js-mutations-1","children":[]}]},{"level":3,"title":"5.2.7 统计未完成的任务的条数","slug":"_5-2-7-统计未完成的任务的条数","link":"#_5-2-7-统计未完成的任务的条数","children":[{"level":4,"title":"store/index.js/getters","slug":"store-index-js-getters","link":"#store-index-js-getters","children":[]},{"level":4,"title":"App.vue/script","slug":"app-vue-script","link":"#app-vue-script","children":[]},{"level":4,"title":"App.vue/template","slug":"app-vue-template-2","link":"#app-vue-template-2","children":[]}]},{"level":3,"title":"5.2.8 清除已完成的任务事项","slug":"_5-2-8-清除已完成的任务事项","link":"#_5-2-8-清除已完成的任务事项","children":[{"level":4,"title":"App.vue/template","slug":"app-vue-template-3","link":"#app-vue-template-3","children":[]},{"level":4,"title":"App.vue/script/methods","slug":"app-vue-script-methods-1","link":"#app-vue-script-methods-1","children":[]},{"level":4,"title":"store/index.js/mutations","slug":"store-index-js-mutations-2","link":"#store-index-js-mutations-2","children":[]}]},{"level":3,"title":"5.2.9 实现任务列表点击高亮切换","slug":"_5-2-9-实现任务列表点击高亮切换","link":"#_5-2-9-实现任务列表点击高亮切换","children":[{"level":4,"title":"1. 为不同按钮绑定相同的单击响应函数changeList","slug":"_1-为不同按钮绑定相同的单击响应函数changelist","link":"#_1-为不同按钮绑定相同的单击响应函数changelist","children":[]},{"level":4,"title":"2. 将接受到的字符串存储到全局的store中","slug":"_2-将接受到的字符串存储到全局的store中","link":"#_2-将接受到的字符串存储到全局的store中","children":[]},{"level":4,"title":"3. 将viewKey映射为当前组件的计算属性","slug":"_3-将viewkey映射为当前组件的计算属性","link":"#_3-将viewkey映射为当前组件的计算属性","children":[]},{"level":4,"title":"4. 根据viewKey的值动态计算决定按钮高亮（三元表达式）","slug":"_4-根据viewkey的值动态计算决定按钮高亮-三元表达式","link":"#_4-根据viewkey的值动态计算决定按钮高亮-三元表达式","children":[]}]},{"level":3,"title":"5.2.10 实现任务列表数据的动态切换","slug":"_5-2-10-实现任务列表数据的动态切换","link":"#_5-2-10-实现任务列表数据的动态切换","children":[{"level":4,"title":"1. 使用Getter将list进行包装，按需显示希望用户看到的数据","slug":"_1-使用getter将list进行包装-按需显示希望用户看到的数据","link":"#_1-使用getter将list进行包装-按需显示希望用户看到的数据","children":[]},{"level":4,"title":"2. 将infoList映射到组件的计算属性中，可以删除映射的state/list","slug":"_2-将infolist映射到组件的计算属性中-可以删除映射的state-list","link":"#_2-将infolist映射到组件的计算属性中-可以删除映射的state-list","children":[]},{"level":4,"title":"3. 将infoList替代list作为动态绑定的数据源","slug":"_3-将infolist替代list作为动态绑定的数据源","link":"#_3-将infolist替代list作为动态绑定的数据源","children":[]}]}]},{"level":2,"title":"5.3 效果展示","slug":"_5-3-效果展示","link":"#_5-3-效果展示","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"advance/Vue/Vue2_advance/11Vuex再探.md","lastUpdated":null}'),i={name:"advance/Vue/Vue2_advance/11Vuex再探.md"},C=n("p",null,"@[toc]",-1),A=n("h1",{id:"_1-vuex概述",tabindex:"-1"},[D("1. Vuex概述 "),n("a",{class:"header-anchor",href:"#_1-vuex概述","aria-hidden":"true"},"#")],-1),u=y("",222);function b(d,m,h,v,g,f){const a=t,l=e,p=o;return c(),F("div",null,[C,A,s(a,{readTime:"20",words:"4.5k"}),u,s(l),s(p)])}const q=r(i,[["render",b]]);export{j as __pageData,q as default};
