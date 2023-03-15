import{_ as e,a as o}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as c,o as r,c as i,D as n,x as s,a as F,Q as y}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const x=JSON.parse('{"title":"1. 组件的生命周期","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 理解","slug":"_1-1-理解","link":"#_1-1-理解","children":[]},{"level":2,"title":"1.2 引入案例","slug":"_1-2-引入案例","link":"#_1-2-引入案例","children":[]},{"level":2,"title":"1.3 生命周期的三个阶段（旧）","slug":"_1-3-生命周期的三个阶段-旧","link":"#_1-3-生命周期的三个阶段-旧","children":[{"level":3,"title":"1.3.1 初始化阶段","slug":"_1-3-1-初始化阶段","link":"#_1-3-1-初始化阶段","children":[]},{"level":3,"title":"1.3.2 更新阶段","slug":"_1-3-2-更新阶段","link":"#_1-3-2-更新阶段","children":[]},{"level":3,"title":"1.3.3 卸载组件","slug":"_1-3-3-卸载组件","link":"#_1-3-3-卸载组件","children":[]}]},{"level":2,"title":"1.4 生命周期的三个阶段（新）","slug":"_1-4-生命周期的三个阶段-新","link":"#_1-4-生命周期的三个阶段-新","children":[{"level":3,"title":"1. 初始化阶段","slug":"_1-初始化阶段","link":"#_1-初始化阶段","children":[]},{"level":3,"title":"2. 更新阶段","slug":"_2-更新阶段","link":"#_2-更新阶段","children":[]},{"level":3,"title":"3. 卸载组件","slug":"_3-卸载组件","link":"#_3-卸载组件","children":[]}]},{"level":2,"title":"1.5 重要的勾子","slug":"_1-5-重要的勾子","link":"#_1-5-重要的勾子","children":[]},{"level":2,"title":"1.6 即将废弃的勾子","slug":"_1-6-即将废弃的勾子","link":"#_1-6-即将废弃的勾子","children":[]},{"level":2,"title":"2.1 基本原理图","slug":"_2-1-基本原理图","link":"#_2-1-基本原理图","children":[]},{"level":2,"title":"2.2 关于key的经典面试题","slug":"_2-2-关于key的经典面试题","link":"#_2-2-关于key的经典面试题","children":[{"level":3,"title":"2.2.1 虚拟DOM中key的作用","slug":"_2-2-1-虚拟dom中key的作用","link":"#_2-2-1-虚拟dom中key的作用","children":[]},{"level":3,"title":"2.2.2 用index作为key可能会引发的问题","slug":"_2-2-2-用index作为key可能会引发的问题","link":"#_2-2-2-用index作为key可能会引发的问题","children":[]},{"level":3,"title":"2.2.3 开发中如何选择key?","slug":"_2-2-3-开发中如何选择key","link":"#_2-2-3-开发中如何选择key","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"advance/React/React_basics/03生命周期.md","lastUpdated":null}'),D={name:"advance/React/React_basics/03生命周期.md"},d=s("blockquote",null,[s("p",null,"今天来学习一下React组件的生命周，了解新旧版本React中生命周期的三个阶段，最后我们再来简单谈谈虚拟DOM和diff算法")],-1),b=s("h1",{id:"_1-组件的生命周期",tabindex:"-1"},[F("1. 组件的生命周期 "),s("a",{class:"header-anchor",href:"#_1-组件的生命周期","aria-hidden":"true"},"#")],-1),u=y(`<h2 id="_1-1-理解" tabindex="-1">1.1 理解 <a class="header-anchor" href="#_1-1-理解" aria-hidden="true">#</a></h2><ol><li>组件从创建到死亡它会经历一些特定的阶段。</li><li>React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。</li><li>我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。</li></ol><h2 id="_1-2-引入案例" tabindex="-1">1.2 引入案例 <a class="header-anchor" href="#_1-2-引入案例" aria-hidden="true">#</a></h2><p>需求:定义组件实现以下功能：</p><ol><li>让指定的文本做显示 / 隐藏的渐变动画</li><li>从完全可见，到彻底消失，耗时2S</li><li>点击“不活了”按钮从界面中卸载组件</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//创建组件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//生命周期回调函数 &lt;=&gt; 生命周期钩子函数 &lt;=&gt; 生命周期函数 &lt;=&gt; 生命周期钩子</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Life</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">state</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">death</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//卸载组件</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">unmountComponentAtNode(</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">getElementById(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//组件挂载完毕</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">componentDidMount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//获取原状态</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">opacity</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//减小 0.1</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">opacity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.1</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">opacity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">opacity</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">//设置新的透明度</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">opacity</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//组件将要卸载</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentWillUnmount</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//清除定时器</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//初始化渲染、状态更新之后</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">render</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span><span style="color:#F07178;">opacity</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">opacity</span><span style="color:#89DDFF;">}}&gt;</span><span style="color:#A6ACCD;">React学不会怎么办？</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h2</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">death</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">不活了</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//渲染组件</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Life</span><span style="color:#89DDFF;">/&gt;,</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc4090cc0a5f44248e534fec82ab82d2~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p><h2 id="_1-3-生命周期的三个阶段-旧" tabindex="-1">1.3 生命周期的三个阶段（旧） <a class="header-anchor" href="#_1-3-生命周期的三个阶段-旧" aria-hidden="true">#</a></h2><p>v16.8.4</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/896e2a2a89f642129503d283b41876d3~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p><h3 id="_1-3-1-初始化阶段" tabindex="-1">1.3.1 初始化阶段 <a class="header-anchor" href="#_1-3-1-初始化阶段" aria-hidden="true">#</a></h3><p>由<code>ReactDOM.render()</code>触发---初次渲染</p><ol><li><code>constructor()</code> —— 类组件中的构造函数</li><li><code>componentWillMount()</code> —— 组件将要挂载 【即将废弃】</li><li><code>render()</code> —— 挂载组件</li><li><code>componentDidMount()</code> —— 组件挂载完成 比较==常用== 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Count</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 构造器</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">constructor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Count---constructor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">//初始化状态</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#F07178;">setState(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//组件将要挂载的钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentWillMount</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">componentWillMount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Count---componentWillMount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">render</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Count---render</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">当前计数值：</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">点我+1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//组件挂载完毕的钩子</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">componentDidMount</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">alert</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">componentDidMount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Count---componentDidMount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Count</span><span style="color:#89DDFF;">/&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7505801778224e368ee9f40edf2d2642~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p><h3 id="_1-3-2-更新阶段" tabindex="-1">1.3.2 更新阶段 <a class="header-anchor" href="#_1-3-2-更新阶段" aria-hidden="true">#</a></h3><p>【第一种情况】父组件重新<code>render</code>触发</p><ol><li><code>componentWillReceiveProps()</code> —— 接收属性参数（非首次）【即将废弃】</li></ol><p>然后调用下面的钩子函数</p><p>【第二种情况】由组件内部<code>this.setSate()</code></p><ol><li><code>shouldComponentUpdate()</code> —— 组件是否应该被更新（默认返回<code>true</code>）</li></ol><p>然后调用下面的钩子函数</p><p>【第三种情况】强制更新 <code>forceUpdate()</code></p><ol start="2"><li><code>componentWillUpdate()</code> ——组件将要更新 【即将废弃】</li><li><code>render()</code> —— 组件更新</li><li><code>componentDidUpdate()</code> —— 组件完成更新</li></ol><h3 id="_1-3-3-卸载组件" tabindex="-1">1.3.3 卸载组件 <a class="header-anchor" href="#_1-3-3-卸载组件" aria-hidden="true">#</a></h3><p>由<code>ReactDOM.unmountComponentAtNode()</code>触发</p><ol><li><code>componentWillUnmount()</code> —— 组件即将卸载</li></ol><h2 id="_1-4-生命周期的三个阶段-新" tabindex="-1">1.4 生命周期的三个阶段（新） <a class="header-anchor" href="#_1-4-生命周期的三个阶段-新" aria-hidden="true">#</a></h2><p>v17.0.1</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bceabc916b74ff9b9a2f4552fd9b530~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"></p><h3 id="_1-初始化阶段" tabindex="-1">1. 初始化阶段 <a class="header-anchor" href="#_1-初始化阶段" aria-hidden="true">#</a></h3><p>由<code>ReactDOM.render()</code>触发 —— 初次渲染</p><ol><li><code>constructor()</code> —— 类组件中的构造函数</li><li><code>static getDerivedStateFromProps(props, state)</code> 从props得到一个派生的状态【新增】</li><li><code>render()</code> —— 挂载组件</li><li><code>componentDidMount()</code> —— 组件挂载完成 比较常用</li></ol><h3 id="_2-更新阶段" tabindex="-1">2. 更新阶段 <a class="header-anchor" href="#_2-更新阶段" aria-hidden="true">#</a></h3><p>由组件内部<code>this.setSate()</code>或父组件重新<code>render</code>触发或强制更新<code>forceUpdate()</code></p><ol><li><code>getDerivedStateFromProps()</code> —— 从props得到一个派生的状态 【新增】</li><li><code>shouldComponentUpdate()</code> —— 组件是否应该被更新（默认返回<code>true</code>）</li><li><code>render()</code> —— 挂载组件</li><li><code>getSnapshotBeforeUpdate()</code> —— 在更新之前获取快照【新增】</li><li><code>componentDidUpdate(prevProps, prevState, snapshotValue)</code> —— 组件完成更新</li></ol><h3 id="_3-卸载组件" tabindex="-1">3. 卸载组件 <a class="header-anchor" href="#_3-卸载组件" aria-hidden="true">#</a></h3><p>由<code>ReactDOM.unmountComponentAtNode()</code>触发</p><ol><li><code>componentWillUnmount()</code> —— 组件即将卸载</li></ol><h2 id="_1-5-重要的勾子" tabindex="-1">1.5 重要的勾子 <a class="header-anchor" href="#_1-5-重要的勾子" aria-hidden="true">#</a></h2><ol><li><code>render</code>：初始化渲染或更新渲染调用</li><li><code>componentDidMount</code>：开启监听, 发送ajax请求</li><li><code>componentWillUnmount</code>：做一些收尾工作, 如: 清理定时器</li></ol><h2 id="_1-6-即将废弃的勾子" tabindex="-1">1.6 即将废弃的勾子 <a class="header-anchor" href="#_1-6-即将废弃的勾子" aria-hidden="true">#</a></h2><ol><li><code>componentWillMount</code></li><li><code>componentWillReceiveProps</code></li><li><code>componentWillUpdate</code></li></ol><p>现在使用会出现警告，下一个大版本需要加上<code>UNSAFE_</code>前缀才能使用，以后可能会被彻底废弃，不建议使用。</p><h1 id="_2-虚拟dom与dom-diffing算法" tabindex="-1">2. 虚拟DOM与DOM Diffing算法 <a class="header-anchor" href="#_2-虚拟dom与dom-diffing算法" aria-hidden="true">#</a></h1><h2 id="_2-1-基本原理图" tabindex="-1">2.1 基本原理图 <a class="header-anchor" href="#_2-1-基本原理图" aria-hidden="true">#</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96b5367055a04b8fbbb1e11363883f31~tplv-k3u1fbpfcp-zoom-1.image" alt="在这里插入图片描述"> 详细的原理可以看之前在学Vue源码时的关于diff的笔记 <a href="https://blog.csdn.net/weixin_44972008/article/details/115620198" target="_blank" rel="noreferrer">【Vue源码】图解 diff算法 与 虚拟DOM-snabbdom-最小量更新原理解析-手写源码-updateChildren</a></p><h2 id="_2-2-关于key的经典面试题" tabindex="-1">2.2 关于key的经典面试题 <a class="header-anchor" href="#_2-2-关于key的经典面试题" aria-hidden="true">#</a></h2><ol><li>react/vue中的key有什么作用？（key的内部原理是什么？）</li><li>为什么遍历列表时，key最好不要用index?</li></ol><h3 id="_2-2-1-虚拟dom中key的作用" tabindex="-1">2.2.1 虚拟DOM中key的作用 <a class="header-anchor" href="#_2-2-1-虚拟dom中key的作用" aria-hidden="true">#</a></h3><ul><li><p>简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。</p></li><li><p>详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：</p><ul><li>旧虚拟DOM中找到了与新虚拟DOM相同的key： <ul><li>若虚拟DOM中内容没变, 直接使用之前的真实DOM</li><li>若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM</li></ul></li><li>旧虚拟DOM中未找到与新虚拟DOM相同的key <ul><li>根据数据创建新的真实DOM，随后渲染到到页面</li></ul></li></ul></li></ul><h3 id="_2-2-2-用index作为key可能会引发的问题" tabindex="-1">2.2.2 用index作为key可能会引发的问题 <a class="header-anchor" href="#_2-2-2-用index作为key可能会引发的问题" aria-hidden="true">#</a></h3><ol><li><p>若对数据进行：逆序添加、逆序删除等破坏顺序操作: 会产生没有必要的真实DOM更新 ==&gt; 界面效果没问题, 但效率低</p></li><li><p>如果结构中还包含输入类的DOM：会产生错误DOM更新 ==&gt; 界面有问题</p></li><li><p>注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的</p></li></ol><h3 id="_2-2-3-开发中如何选择key" tabindex="-1">2.2.3 开发中如何选择key? <a class="header-anchor" href="#_2-2-3-开发中如何选择key" aria-hidden="true">#</a></h3><ol><li>最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值</li><li>如果确定只是简单的展示数据，用index也是可以的</li></ol><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,56);function C(A,m,h,_,f,g){const a=t,l=e,p=o;return r(),i("div",null,[d,b,n(a,{readTime:"5",words:"1.6k"}),u,n(l),n(p)])}const O=c(D,[["render",C]]);export{x as __pageData,O as default};
