import{_ as e,a as o}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as r}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as p,o as d,c,D as t,x as a,a as i,Q as D}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const S=JSON.parse('{"title":"1. 包装类","description":"","frontmatter":{},"headers":[{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/javascript/07常用类.md","lastUpdated":null}'),y={name:"basics/javascript/07常用类.md"},C=a("p",null,"@[toc]",-1),h=a("h1",{id:"_1-包装类",tabindex:"-1"},[i("1. 包装类 "),a("a",{class:"header-anchor",href:"#_1-包装类","aria-hidden":"true"},"#")],-1),A=D(`<ul><li>在JS中为我们提供了三个包装类：</li></ul><ol><li>String()</li><li>Boolean()</li><li>Number()</li></ol><ul><li>通过这三个包装类可以创建基本数据类型的对象</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> bool </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>但是在实际应用中千万不要这么干。</li><li>当我们去操作一个基本数据类型的属性和方法时，</li><li>解析器会临时将其转换为对应的包装类，然后再去操作属性和方法，</li><li>操作完成以后再将这个临时对象进行销毁。</li></ul><h1 id="_2-date" tabindex="-1">2. Date <a class="header-anchor" href="#_2-date" aria-hidden="true">#</a></h1><ul><li>日期的对象，在JS中通过Date对象来表示一个时间</li><li>创建对象</li><li>创建一个当前的时间对象</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>创建一个指定的时间对象</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> d </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">月/日/年 时:分:秒</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>getDate()</td><td>当前日期对象是几日（1-31）</td></tr><tr><td>getDay()</td><td>返回当前日期对象时周几（0-6） 0 周日 1 周一</td></tr><tr><td>getMonth()</td><td>返回当前日期对象的月份（0-11）0 一月 1 二月</td></tr><tr><td>getFullYear()</td><td>从 Date 对象以四位数字返回年份。</td></tr><tr><td>getHours()</td><td>返回 Date 对象的小时 (0 ~ 23)。</td></tr><tr><td>getMinutes()</td><td>返回 Date 对象的分钟 (0 ~ 59)。</td></tr><tr><td>getSeconds()</td><td>返回 Date 对象的秒数 (0 ~ 59)。</td></tr><tr><td>getMilliseconds()</td><td>返回 Date 对象的毫秒(0 ~ 999)。</td></tr><tr><td>getTime()</td><td>返回当前日期对象的时间戳；时间戳，指的是从1970年月1日 0时0分0秒，到现在时间的毫秒数；计算机底层保存时间都是以时间戳的形式保存的。</td></tr><tr><td>Date.now()</td><td>可以获取当前代码执行时的时间戳</td></tr></tbody></table><h1 id="_3-math" tabindex="-1">3. Math <a class="header-anchor" href="#_3-math" aria-hidden="true">#</a></h1><ul><li>Math属于一个工具类，它不需要我们创建对象，它里边封装了属性运算相关的常量和方法</li><li>我们可以直接使用它来进行数学运算相关的操作</li></ul><table><thead><tr><th>方法</th><th>介绍</th></tr></thead><tbody><tr><td>Math.PI</td><td>常量，圆周率</td></tr><tr><td>Math.abs()</td><td>绝对值运算</td></tr><tr><td>Math.ceil()</td><td>向上取整</td></tr><tr><td>Math.floor()</td><td>向下取整</td></tr><tr><td>Math.round()</td><td>四舍五入取整</td></tr><tr><td>Math.random()</td><td>生成一个01之间的随机数</td></tr><tr><td>Math.round(Math.random()*(y-x)+x);</td><td>生成一个xy之间的随机数</td></tr><tr><td>Math.pow(x,y)</td><td>求x的y次幂</td></tr><tr><td>Math.sqrt()</td><td>对一个数进行开方</td></tr><tr><td>Math.max()</td><td>求多个数中最大值</td></tr><tr><td>Math.min()</td><td>求多个数中的最小值</td></tr></tbody></table><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,15);function u(_,F,b,m,v,g){const s=r,n=e,l=o;return d(),c("div",null,[C,h,t(s,{readTime:"1",words:"560"}),A,t(n),t(l)])}const E=p(y,[["render",u]]);export{S as __pageData,E as default};
