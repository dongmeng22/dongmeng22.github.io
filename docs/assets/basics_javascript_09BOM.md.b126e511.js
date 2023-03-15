import{_ as o,a as t}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as p}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as i,o as r,c,D as s,x as a,a as d,Q as y}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const E=JSON.parse('{"title":"1. BOM概述","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 什么是 BOM","slug":"_1-1-什么是-bom","link":"#_1-1-什么是-bom","children":[{"level":3,"title":"DOM","slug":"dom","link":"#dom","children":[]},{"level":3,"title":"BOM","slug":"bom","link":"#bom","children":[]}]},{"level":2,"title":"1.2 BOM 的构成","slug":"_1-2-bom-的构成","link":"#_1-2-bom-的构成","children":[]},{"level":2,"title":"2.1 窗口加载事件","slug":"_2-1-窗口加载事件","link":"#_2-1-窗口加载事件","children":[]},{"level":2,"title":"2.2 调整窗口大小事件","slug":"_2-2-调整窗口大小事件","link":"#_2-2-调整窗口大小事件","children":[]},{"level":2,"title":"3.1 两种定时器","slug":"_3-1-两种定时器","link":"#_3-1-两种定时器","children":[]},{"level":2,"title":"3.2 setTimeout() 定时器","slug":"_3-2-settimeout-定时器","link":"#_3-2-settimeout-定时器","children":[]},{"level":2,"title":"3.3 停止 setTimeout() 定时器","slug":"_3-3-停止-settimeout-定时器","link":"#_3-3-停止-settimeout-定时器","children":[]},{"level":2,"title":"3.4 setInterval() 定时器","slug":"_3-4-setinterval-定时器","link":"#_3-4-setinterval-定时器","children":[]},{"level":2,"title":"3.5 停止 setInterval() 定时器","slug":"_3-5-停止-setinterval-定时器","link":"#_3-5-停止-setinterval-定时器","children":[]},{"level":2,"title":"3.6 this","slug":"_3-6-this","link":"#_3-6-this","children":[]},{"level":2,"title":"4.1 JS 是单线程","slug":"_4-1-js-是单线程","link":"#_4-1-js-是单线程","children":[]},{"level":2,"title":"4.2 问题","slug":"_4-2-问题","link":"#_4-2-问题","children":[]},{"level":2,"title":"4.3 同步和异步","slug":"_4-3-同步和异步","link":"#_4-3-同步和异步","children":[{"level":3,"title":"同步","slug":"同步","link":"#同步","children":[]},{"level":3,"title":"异步","slug":"异步","link":"#异步","children":[]},{"level":3,"title":"同步任务","slug":"同步任务","link":"#同步任务","children":[]},{"level":3,"title":"异步任务","slug":"异步任务","link":"#异步任务","children":[]}]},{"level":2,"title":"4.4 JS 执行机制","slug":"_4-4-js-执行机制","link":"#_4-4-js-执行机制","children":[]},{"level":2,"title":"5.1 什么是 location 对象","slug":"_5-1-什么是-location-对象","link":"#_5-1-什么是-location-对象","children":[]},{"level":2,"title":"5.2 URL","slug":"_5-2-url","link":"#_5-2-url","children":[]},{"level":2,"title":"5.3 location 对象的属性","slug":"_5-3-location-对象的属性","link":"#_5-3-location-对象的属性","children":[]},{"level":2,"title":"5.4 location 对象的方法","slug":"_5-4-location-对象的方法","link":"#_5-4-location-对象的方法","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/javascript/09BOM.md","lastUpdated":null}'),D={name:"basics/javascript/09BOM.md"},h=a("p",null,"@[toc]",-1),F=a("h1",{id:"_1-bom概述",tabindex:"-1"},[d("1. BOM概述 "),a("a",{class:"header-anchor",href:"#_1-bom概述","aria-hidden":"true"},"#")],-1),u=y(`<h2 id="_1-1-什么是-bom" tabindex="-1">1.1 什么是 BOM <a class="header-anchor" href="#_1-1-什么是-bom" aria-hidden="true">#</a></h2><ul><li>BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。</li><li>BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。</li><li>BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是Netscape 浏览器标准的一部分。</li></ul><h3 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-hidden="true">#</a></h3><ol><li>文档对象模型</li><li>DOM 就是把「文档」当做一个「对象」来看待</li><li>DOM 的顶级对象是 document</li><li>DOM 主要学习的是操作页面元素</li><li>DOM 是 W3C 标准规范</li></ol><h3 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-hidden="true">#</a></h3><ol><li>浏览器对象模型</li><li>把「浏览器」当做一个「对象」来看待</li><li>BOM 的顶级对象是 window</li><li>BOM 学习的是浏览器窗口交互的一些对象</li><li>BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差</li></ol><h2 id="_1-2-bom-的构成" tabindex="-1">1.2 BOM 的构成 <a class="header-anchor" href="#_1-2-bom-的构成" aria-hidden="true">#</a></h2><ul><li><p>BOM 比 DOM 更大，它包含 DOM。 <img src="https://img-blog.csdnimg.cn/img_convert/6ca4f5877e8c09a5c99a17b0ac399da9.png" alt="image"></p></li><li><p>window 对象是浏览器的顶级对象，它具有双重角色。</p></li></ul><ol><li>它是 JS 访问浏览器窗口的一个接口。</li><li>它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。</li></ol><ul><li>在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 alert()、prompt() 等。</li><li>注意：window下的一个特殊属性 window.name</li></ul><h1 id="_2-window对象的常见事件" tabindex="-1">2. window对象的常见事件 <a class="header-anchor" href="#_2-window对象的常见事件" aria-hidden="true">#</a></h1><h2 id="_2-1-窗口加载事件" tabindex="-1">2.1 窗口加载事件 <a class="header-anchor" href="#_2-1-窗口加载事件" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">load</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>window.onload 是窗口 (页面）加载事件,当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文件等), 就调用的处理函数。</p></li><li><p>注意</p></li></ul><ol><li>有了 window.onload 就可以把 JS 代码写到页面元素的上方，因为 onload 是等页面内容全部加载完毕，再去执行处理函数。</li><li>window.onload 传统注册事件方式 只能写一次，如果有多个，会以最后一个 window.onload 为准。</li><li>如果使用 addEventListener 则没有限制</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DOMContentLoaded</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。</li><li>Ie9以上才支持</li><li>如果页面的图片很多的话, 从用户访问到onload触发可能需要较长的时间,交互效果就不能实现，必然影响用户的体验，此时用 DOMContentLoaded 事件比较合适。</li></ul><h2 id="_2-2-调整窗口大小事件" tabindex="-1">2.2 调整窗口大小事件 <a class="header-anchor" href="#_2-2-调整窗口大小事件" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onresize</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resize</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>window.onresize 是调整窗口大小加载事件, 当触发时就调用的处理函数。</li><li>注意</li></ul><ol><li>只要窗口大小发生像素变化，就会触发这个事件。</li><li>我们经常利用这个事件完成响应式布局。</li><li>window.innerWidth 当前屏幕的宽度</li></ol><h1 id="_3-定时器" tabindex="-1">3. 定时器 <a class="header-anchor" href="#_3-定时器" aria-hidden="true">#</a></h1><h2 id="_3-1-两种定时器" tabindex="-1">3.1 两种定时器 <a class="header-anchor" href="#_3-1-两种定时器" aria-hidden="true">#</a></h2><ul><li>window 对象给我们提供了 2 个非常好用的方法-定时器。</li><li>setTimeout()</li><li>setInterval()</li></ul><h2 id="_3-2-settimeout-定时器" tabindex="-1">3.2 setTimeout() 定时器 <a class="header-anchor" href="#_3-2-settimeout-定时器" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(调用函数</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [延迟的毫秒数])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。</li><li>注意</li></ul><ol><li>window 可以省略。</li><li>这个调用函数可以直接写函数，或者写函数名或者采取字符串‘函数名()&#39;三种形式。第三种不推荐</li><li>延迟的毫秒数省略默认是 0，如果写，必须是毫秒。</li><li>因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(callback</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback()</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>setTimeout() 这个调用函数我们也称为回调函数 callback</li><li>普通函数是按照代码顺序直接调用。</li><li>而这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数。</li><li>简单理解： 回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。</li><li>以前我们讲的 element.onclick = function(){} 或者 element.addEventListener(“click”, fn); 里面的 函数也是回调函数。</li></ul><h2 id="_3-3-停止-settimeout-定时器" tabindex="-1">3.3 停止 setTimeout() 定时器 <a class="header-anchor" href="#_3-3-停止-settimeout-定时器" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#A6ACCD;">(timeoutID)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>clearTimeout()方法取消了先前通过调用 setTimeout() 建立的定时器。</p></li><li><p>注意</p></li></ul><ol><li>window 可以省略。</li><li>里面的参数就是定时器的标识符 。</li></ol><h2 id="_3-4-setinterval-定时器" tabindex="-1">3.4 setInterval() 定时器 <a class="header-anchor" href="#_3-4-setinterval-定时器" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(回调函数</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [间隔的毫秒数])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>setInterval() 方法<strong>重复调用</strong>一个函数，每隔这个时间，就去调用一次回调函数。</p></li><li><p>注意</p></li></ul><ol><li>window 可以省略。</li><li>这个调用函数可以直接写函数，或者写函数名或者采取字符串 &#39;函数名()&#39; 三种形式</li><li>间隔的毫秒数省略默认是 0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数</li><li>因为定时器可能有很多，所以我们经常给定时器赋值一个标识符</li><li>第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次</li></ol><h2 id="_3-5-停止-setinterval-定时器" tabindex="-1">3.5 停止 setInterval() 定时器 <a class="header-anchor" href="#_3-5-停止-setinterval-定时器" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearInterval</span><span style="color:#A6ACCD;">(intervalID)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>clearInterval()方法取消了先前通过调用 setInterval()建立的定时器。</p></li><li><p>注意：</p></li></ul><ol><li>window 可以省略。</li><li>里面的参数就是定时器的标识符 。</li></ol><h2 id="_3-6-this" tabindex="-1">3.6 this <a class="header-anchor" href="#_3-6-this" aria-hidden="true">#</a></h2><ul><li>this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向的是那个调用它的对象</li><li>现阶段，我们先了解一下几个this指向</li></ul><ol><li>全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）</li><li>方法调用中谁调用this指向谁</li><li>构造函数中this指向构造函数的实例</li></ol><h1 id="_4-js执行机制" tabindex="-1">4. JS执行机制 <a class="header-anchor" href="#_4-js执行机制" aria-hidden="true">#</a></h1><h2 id="_4-1-js-是单线程" tabindex="-1">4.1 JS 是单线程 <a class="header-anchor" href="#_4-1-js-是单线程" aria-hidden="true">#</a></h2><ul><li><p>JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。</p></li><li><p>这是因为 Javascript这门脚本语言诞生的使命所致——JavaScript是为处理页面中用户的交互，以及操作 DOM 而诞生的。</p></li><li><p>比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。</p></li><li><p>应该先进行添加，之后再删除。</p></li><li><p>单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。</p></li><li><p>这样所导致的问题是：如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉</p></li></ul><h2 id="_4-2-问题" tabindex="-1">4.2 问题 <a class="header-anchor" href="#_4-2-问题" aria-hidden="true">#</a></h2><ul><li>以下代码执行的结果是什么？</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>那么以下代码执行的结果又是什么？</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2 3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_4-3-同步和异步" tabindex="-1">4.3 同步和异步 <a class="header-anchor" href="#_4-3-同步和异步" aria-hidden="true">#</a></h2><ul><li>为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。</li><li>于是，JS 中出现了同步和异步。</li></ul><h3 id="同步" tabindex="-1">同步 <a class="header-anchor" href="#同步" aria-hidden="true">#</a></h3><ul><li>前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。</li><li>比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。</li></ul><h3 id="异步" tabindex="-1">异步 <a class="header-anchor" href="#异步" aria-hidden="true">#</a></h3><ul><li><p>你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。</p></li><li><p>比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。</p></li><li><p>他们的本质区别： 这条流水线上各个流程的执行顺序不同。</p></li></ul><h3 id="同步任务" tabindex="-1">同步任务 <a class="header-anchor" href="#同步任务" aria-hidden="true">#</a></h3><ul><li>同步任务都在主线程上执行，形成一个<strong>执行栈</strong>。</li></ul><h3 id="异步任务" tabindex="-1">异步任务 <a class="header-anchor" href="#异步任务" aria-hidden="true">#</a></h3><ul><li>JS 的异步是通过回调函数实现的。</li><li>一般而言，异步任务有以下三种类型:</li></ul><ol><li>普通事件，如 click、resize 等</li><li>资源加载，如 load、error 等</li><li>定时器，包括 setInterval、setTimeout 等</li></ol><ul><li>异步任务相关回调函数添加到<strong>任务队列</strong>中（任务队列也称为消息队列）</li></ul><h2 id="_4-4-js-执行机制" tabindex="-1">4.4 JS 执行机制 <a class="header-anchor" href="#_4-4-js-执行机制" aria-hidden="true">#</a></h2><ol><li>先执行<strong>执行栈</strong>中的同步任务。</li><li>异步任务（回调函数）放入<strong>任务队列</strong>中。</li><li>一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取<strong>任务队列</strong>中的异步任务，于是被读取的异步任务结束等待状态，进入<strong>执行栈</strong>，开始执行。</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop）。</li></ul><h1 id="_5-location对象" tabindex="-1">5. location对象 <a class="header-anchor" href="#_5-location对象" aria-hidden="true">#</a></h1><h2 id="_5-1-什么是-location-对象" tabindex="-1">5.1 什么是 location 对象 <a class="header-anchor" href="#_5-1-什么是-location-对象" aria-hidden="true">#</a></h2><ul><li>window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL 。</li><li>因为这个属性返回的是一个对象，所以我们将这个属性也称为 location 对象。</li></ul><h2 id="_5-2-url" tabindex="-1">5.2 URL <a class="header-anchor" href="#_5-2-url" aria-hidden="true">#</a></h2><ul><li><p>统一资源定位符 (Uniform Resource Locator, URL) 是互联网上标准资源的地址。</p></li><li><p>互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。</p></li><li><p>URL 的一般语法格式为：</p></li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">protocol</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//host[:port]/path/[?query]#fragment</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//www.itcast.cn/index.html?name=andy&amp;age=18#link</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><table><thead><tr><th>组成</th><th>说明</th></tr></thead><tbody><tr><td>protocol</td><td>通信协议 常用的http,ftp,mailto等</td></tr><tr><td>host</td><td>主机（域名）</td></tr><tr><td>port</td><td>端口号</td></tr><tr><td>path</td><td>路径</td></tr><tr><td>query</td><td>参数</td></tr><tr><td>fragment</td><td>片段</td></tr></tbody></table><h2 id="_5-3-location-对象的属性" tabindex="-1">5.3 location 对象的属性 <a class="header-anchor" href="#_5-3-location-对象的属性" aria-hidden="true">#</a></h2><table><thead><tr><th>对象属性</th><th>返回值</th></tr></thead><tbody><tr><td>location.href</td><td>获取或者设置整个URL</td></tr><tr><td>location.host</td><td>返回主机（域名）</td></tr><tr><td>location.port</td><td>返回端口号</td></tr><tr><td>location.pathname</td><td>返回路径</td></tr><tr><td>location.search</td><td>返回参数</td></tr><tr><td>location.hash</td><td>返回片段</td></tr></tbody></table><h2 id="_5-4-location-对象的方法" tabindex="-1">5.4 location 对象的方法 <a class="header-anchor" href="#_5-4-location-对象的方法" aria-hidden="true">#</a></h2><table><thead><tr><th>对象方法</th><th>返回值</th></tr></thead><tbody><tr><td>location.assign()</td><td>跟href一样，可以跳转页面（也称重定向页面），记录浏览历史，可以后退</td></tr><tr><td>location.replace()</td><td>替换当前页面，因为不记录历史，所以不能后退页面</td></tr><tr><td>location.reload()</td><td>重新加载页面，相当于刷新按钮或者F5，如果参数为true，强制刷新ctrl+F5</td></tr></tbody></table><h1 id="_6-navigator对象" tabindex="-1">6. navigator对象 <a class="header-anchor" href="#_6-navigator对象" aria-hidden="true">#</a></h1><p>navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。 下面前端代码可以判断用户那个终端打开页面，实现跳转</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">((navigator</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">userAgent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/(</span><span style="color:#C3E88D;">phone</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">pad</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">pod</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">iPhone</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">iPod</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">ios</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">iPad</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">Android</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">Mobile</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">BlackBerry</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">IEMobile</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">MQQBrowser</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">JUC</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">Fennec</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">wOSBrowser</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">BrowserNG</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">WebOS</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">Symbian</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">Windows Phone</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">i</span><span style="color:#A6ACCD;">))) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">     </span><span style="color:#676E95;font-style:italic;">//手机</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">     </span><span style="color:#676E95;font-style:italic;">//电脑</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="_7-history对象" tabindex="-1">7. history对象 <a class="header-anchor" href="#_7-history对象" aria-hidden="true">#</a></h1><ul><li>window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互。</li><li>该对象包含用户（在浏览器窗口中）访问过的 URL。</li></ul><table><thead><tr><th>对象方法</th><th>作用</th></tr></thead><tbody><tr><td>back()</td><td>后退功能</td></tr><tr><td>forward()</td><td>前进功能</td></tr><tr><td>go(参数)</td><td>前进 后退功能 1：前进一个页面 -1：后退一个页面</td></tr></tbody></table><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,89);function C(b,A,m,v,g,_){const l=p,n=o,e=t;return r(),c("div",null,[h,F,s(l,{readTime:"9",words:"2.7k"}),u,s(n),s(e)])}const j=i(D,[["render",C]]);export{E as __pageData,j as default};
