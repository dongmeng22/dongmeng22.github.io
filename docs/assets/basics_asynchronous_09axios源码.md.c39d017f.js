import{_ as p,a as r}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as i}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as o,o as c,c as t,D as s,x as a,a as d,Q as h}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const j=JSON.parse('{"title":"1. 源码目录结构","description":"","frontmatter":{},"headers":[{"level":3,"title":"2.1 axios 与Axios 的关系?","slug":"_2-1-axios-与axios-的关系","link":"#_2-1-axios-与axios-的关系","children":[]},{"level":3,"title":"2.2 instance 与axios 的区别?","slug":"_2-2-instance-与axios-的区别","link":"#_2-2-instance-与axios-的区别","children":[]},{"level":3,"title":"2.3. axios 运行的整体流程?","slug":"_2-3-axios-运行的整体流程","link":"#_2-3-axios-运行的整体流程","children":[{"level":4,"title":"1. 整体流程:","slug":"_1-整体流程","link":"#_1-整体流程","children":[]},{"level":4,"title":"2. request(config):","slug":"_2-request-config","link":"#_2-request-config","children":[]},{"level":4,"title":"3. dispatchRequest(config):","slug":"_3-dispatchrequest-config","link":"#_3-dispatchrequest-config","children":[]},{"level":4,"title":"4. xhrAdapter(config):","slug":"_4-xhradapter-config","link":"#_4-xhradapter-config","children":[]}]},{"level":3,"title":"2.4. axios 的请求/响应拦截器是什么?","slug":"_2-4-axios-的请求-响应拦截器是什么","link":"#_2-4-axios-的请求-响应拦截器是什么","children":[{"level":4,"title":"1. 请求拦截器:","slug":"_1-请求拦截器","link":"#_1-请求拦截器","children":[]},{"level":4,"title":"2. 响应拦截器","slug":"_2-响应拦截器","link":"#_2-响应拦截器","children":[]}]},{"level":3,"title":"2.5 axios 的请求/响应数据转换器是什么?","slug":"_2-5-axios-的请求-响应数据转换器是什么","link":"#_2-5-axios-的请求-响应数据转换器是什么","children":[{"level":4,"title":"1. 请求转换器","slug":"_1-请求转换器","link":"#_1-请求转换器","children":[]},{"level":4,"title":"2. 响应转换器","slug":"_2-响应转换器","link":"#_2-响应转换器","children":[]}]},{"level":3,"title":"2.6 response 的整体结构","slug":"_2-6-response-的整体结构","link":"#_2-6-response-的整体结构","children":[]},{"level":3,"title":"2.7 error 的整体结构","slug":"_2-7-error-的整体结构","link":"#_2-7-error-的整体结构","children":[]},{"level":3,"title":"2.8 如何取消未完成的请求?","slug":"_2-8-如何取消未完成的请求","link":"#_2-8-如何取消未完成的请求","children":[{"level":4,"title":"1. 当配置了cancelToken 对象时, 保存cancel 函数","slug":"_1-当配置了canceltoken-对象时-保存cancel-函数","link":"#_1-当配置了canceltoken-对象时-保存cancel-函数","children":[]},{"level":4,"title":"2. 调用cancel()取消请求","slug":"_2-调用cancel-取消请求","link":"#_2-调用cancel-取消请求","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/asynchronous/09axios源码.md","lastUpdated":null}'),u={name:"basics/asynchronous/09axios源码.md"},b=a("h1",{id:"_1-源码目录结构",tabindex:"-1"},[d("1. 源码目录结构 "),a("a",{class:"header-anchor",href:"#_1-源码目录结构","aria-hidden":"true"},"#")],-1),_=h(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">├── /dist/ # 项目输出目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├── /lib/ # 项目源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── /adapters/ # 定义请求的适配器xhr、http</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ ├── http.js # 实现http 适配器(包装http 包)</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ └── xhr.js # 实现xhr 适配器(包装xhr 对象)</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── /cancel/ # 定义取消功能</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── /core/ # 一些核心功能</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ ├── Axios.js # axios 的核心主类</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ ├── dispatchRequest.js # 用来调用http 请求适配器方法发送请求的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ ├── InterceptorManager.js # 拦截器的管理器</span></span>
<span class="line"><span style="color:#A6ACCD;">│ │ └── settle.js # 根据http 响应状态，改变Promise 的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── /helpers/ # 一些辅助方法</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── axios.js # 对外暴露接口</span></span>
<span class="line"><span style="color:#A6ACCD;">│ ├── defaults.js # axios 的默认配置</span></span>
<span class="line"><span style="color:#A6ACCD;">│ └── utils.js # 公用工具</span></span>
<span class="line"><span style="color:#A6ACCD;">├── package.json # 项目信息</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.d.ts # 配置TypeScript 的声明文件</span></span>
<span class="line"><span style="color:#A6ACCD;">└── index.js # 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="_2-源码分析" tabindex="-1">2. 源码分析 <a class="header-anchor" href="#_2-源码分析" aria-hidden="true">#</a></h1><h3 id="_2-1-axios-与axios-的关系" tabindex="-1">2.1 axios 与Axios 的关系? <a class="header-anchor" href="#_2-1-axios-与axios-的关系" aria-hidden="true">#</a></h3><ol><li>从语法上来说: axios 不是Axios 的实例</li><li>从功能上来说: axios 是Axios 的实例</li><li>axios 是Axios.prototype.request 函数bind()返回的函数</li><li>axios 作为对象有Axios 原型对象上的所有方法, 有Axios 对象上所有属性</li></ol><h3 id="_2-2-instance-与axios-的区别" tabindex="-1">2.2 instance 与axios 的区别? <a class="header-anchor" href="#_2-2-instance-与axios-的区别" aria-hidden="true">#</a></h3><ol><li>相同: (1) 都是一个能发任意请求的函数: request(config) (2) 都有发特定请求的各种方法: get()/post()/put()/delete() (3) 都有默认配置和拦截器的属性: defaults/interceptors</li><li>不同: (1) 默认匹配的值很可能不一样 (2) instance 没有axios 后面添加的一些方法: create()/CancelToken()/all()</li></ol><h3 id="_2-3-axios-运行的整体流程" tabindex="-1">2.3. axios 运行的整体流程? <a class="header-anchor" href="#_2-3-axios-运行的整体流程" aria-hidden="true">#</a></h3><p><img src="https://img-blog.csdnimg.cn/20210302162057950.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk3MjAwOA==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><h4 id="_1-整体流程" tabindex="-1">1. 整体流程: <a class="header-anchor" href="#_1-整体流程" aria-hidden="true">#</a></h4><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(config) </span><span style="color:#89DDFF;">==&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dispatchRequest</span><span style="color:#A6ACCD;">(config) </span><span style="color:#89DDFF;">==&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">xhrAdapter</span><span style="color:#A6ACCD;">(config)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_2-request-config" tabindex="-1">2. request(config): <a class="header-anchor" href="#_2-request-config" aria-hidden="true">#</a></h4><p>将请求拦截器/ dispatchRequest() / 响应拦截器通过promise 链串连起来,返回promise</p><h4 id="_3-dispatchrequest-config" tabindex="-1">3. dispatchRequest(config): <a class="header-anchor" href="#_3-dispatchrequest-config" aria-hidden="true">#</a></h4><p>转换请求数据 ===&gt; 调用xhrAdapter()发请求 ===&gt; 请求返回后转换响应数据. 返回promise</p><h4 id="_4-xhradapter-config" tabindex="-1">4. xhrAdapter(config): <a class="header-anchor" href="#_4-xhradapter-config" aria-hidden="true">#</a></h4><p>创建XHR 对象, 根据config 进行相应设置, 发送特定请求, 并接收响应数据,返回promise</p><h3 id="_2-4-axios-的请求-响应拦截器是什么" tabindex="-1">2.4. axios 的请求/响应拦截器是什么? <a class="header-anchor" href="#_2-4-axios-的请求-响应拦截器是什么" aria-hidden="true">#</a></h3><p><img src="https://img-blog.csdnimg.cn/20210302162129252.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDk3MjAwOA==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p><h4 id="_1-请求拦截器" tabindex="-1">1. 请求拦截器: <a class="header-anchor" href="#_1-请求拦截器" aria-hidden="true">#</a></h4><p>在真正发送请求前执行的回调函数 可以对请求进行检查或配置进行特定处理 成功的回调函数, 传递的默认是config(也必须是) 失败的回调函数, 传递的默认是error</p><h4 id="_2-响应拦截器" tabindex="-1">2. 响应拦截器 <a class="header-anchor" href="#_2-响应拦截器" aria-hidden="true">#</a></h4><p>在请求得到响应后执行的回调函数 可以对响应数据进行特定处理 成功的回调函数, 传递的默认是response 失败的回调函数, 传递的默认是error</p><h3 id="_2-5-axios-的请求-响应数据转换器是什么" tabindex="-1">2.5 axios 的请求/响应数据转换器是什么? <a class="header-anchor" href="#_2-5-axios-的请求-响应数据转换器是什么" aria-hidden="true">#</a></h3><h4 id="_1-请求转换器" tabindex="-1">1. 请求转换器 <a class="header-anchor" href="#_1-请求转换器" aria-hidden="true">#</a></h4><p>对请求头和请求体数据进行特定处理的函数</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isObject</span><span style="color:#A6ACCD;">(data)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#82AAFF;">setContentTypeIfUnset</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">headers</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">application/json;charset=utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_2-响应转换器" tabindex="-1">2. 响应转换器 <a class="header-anchor" href="#_2-响应转换器" aria-hidden="true">#</a></h4><p>将响应体json 字符串解析为js 对象或数组的函数</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-6-response-的整体结构" tabindex="-1">2.6 response 的整体结构 <a class="header-anchor" href="#_2-6-response-的整体结构" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">statusText</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">headers</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">request</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-7-error-的整体结构" tabindex="-1">2.7 error 的整体结构 <a class="header-anchor" href="#_2-7-error-的整体结构" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-8-如何取消未完成的请求" tabindex="-1">2.8 如何取消未完成的请求? <a class="header-anchor" href="#_2-8-如何取消未完成的请求" aria-hidden="true">#</a></h3><h4 id="_1-当配置了canceltoken-对象时-保存cancel-函数" tabindex="-1">1. 当配置了cancelToken 对象时, 保存cancel 函数 <a class="header-anchor" href="#_1-当配置了canceltoken-对象时-保存cancel-函数" aria-hidden="true">#</a></h4><p>(1) 创建一个用于将来中断请求的cancelPromise (2) 并定义了一个用于取消请求的cancel 函数 (3) 将cancel 函数传递出来</p><h4 id="_2-调用cancel-取消请求" tabindex="-1">2. 调用cancel()取消请求 <a class="header-anchor" href="#_2-调用cancel-取消请求" aria-hidden="true">#</a></h4><p>(1) 执行cacel 函数, 传入错误信息message (2) 内部会让cancelPromise 变为成功, 且成功的值为一个Cancel 对象 (3) 在cancelPromise 的成功回调中中断请求, 并让发请求的proimse 失败,失败的reason 为Cacel 对象</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,39);function y(A,m,C,D,x,F){const n=i,e=p,l=r;return c(),t("div",null,[b,s(n,{readTime:"3",words:"894"}),_,s(e),s(l)])}const q=o(u,[["render",y]]);export{j as __pageData,q as default};
