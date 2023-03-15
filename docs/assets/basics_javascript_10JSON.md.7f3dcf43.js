import{_ as o,a as p}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as t}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as r,o as i,c,D as s,x as a,a as d,Q as u}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const f=JSON.parse('{"title":"JavaScript Object Notation JS对象表示法","description":"","frontmatter":{},"headers":[{"level":2,"title":"3.1 举例","slug":"_3-1-举例","link":"#_3-1-举例","children":[]},{"level":2,"title":"4.1 json > js对象","slug":"_4-1-json-js对象","link":"#_4-1-json-js对象","children":[]},{"level":2,"title":"4.2 JS对象 > JSON","slug":"_4-2-js对象-json","link":"#_4-2-js对象-json","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/javascript/10JSON.md","lastUpdated":null}'),y={name:"basics/javascript/10JSON.md"},D=a("p",null,"@[toc]",-1),C=a("h1",{id:"javascript-object-notation-js对象表示法",tabindex:"-1"},[d("JavaScript Object Notation JS对象表示法 "),a("a",{class:"header-anchor",href:"#javascript-object-notation-js对象表示法","aria-hidden":"true"},"#")],-1),h=u(`<h1 id="_1-json-格式" tabindex="-1">1. JSON 格式 <a class="header-anchor" href="#_1-json-格式" aria-hidden="true">#</a></h1><ul><li>复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象</li><li>原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）</li><li>字符串必须使用双引号表示，不能使用单引号</li><li>对象的键名必须放在双引号里面</li><li>数组或对象最后一个成员的后面，不能加逗号</li><li>JS中的对象只有JS自己认识，其他的语言都不认识</li><li>JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别，并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号其他的和JS语法一致</li></ul><h1 id="_2-json分类" tabindex="-1">2. JSON分类 <a class="header-anchor" href="#_2-json分类" aria-hidden="true">#</a></h1><ol><li>对象 {}</li><li>数组 []</li></ol><h1 id="_3-json中允许的值" tabindex="-1">3. JSON中允许的值 <a class="header-anchor" href="#_3-json中允许的值" aria-hidden="true">#</a></h1><ol><li>字符串</li><li>数值</li><li>布尔值</li><li>null</li><li>对象</li><li>数组</li></ol><h2 id="_3-1-举例" tabindex="-1">3.1 举例 <a class="header-anchor" href="#_3-1-举例" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1,2,3,&quot;hello&quot;,true]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">			  </span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;arr&quot;:[1,2,3]}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr2 </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{&quot;name&quot;:&quot;孙悟空&quot;,&quot;age&quot;:18,&quot;gender&quot;:&quot;男&quot;},{&quot;name&quot;:&quot;孙悟空&quot;,&quot;age&quot;:18,&quot;gender&quot;:&quot;男&quot;}]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="_4-json工具类" tabindex="-1">4. JSON工具类 <a class="header-anchor" href="#_4-json工具类" aria-hidden="true">#</a></h1><h2 id="_4-1-json-js对象" tabindex="-1">4.1 json &gt; js对象 <a class="header-anchor" href="#_4-1-json-js对象" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>可以将以JSON字符串转换为js对象</li><li>它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> o </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(json)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> o2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(arr)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">”猪八戒” </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">28</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">gender</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">”男”</span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_4-2-js对象-json" tabindex="-1">4.2 JS对象 &gt; JSON <a class="header-anchor" href="#_4-2-js对象-json" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// -ify/fy，表示”使……化。</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>可以将一个JS对象转换为JSON字符串</li><li>需要一个js对象作为参数，会返回一个JSON字符串</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(obj3)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错</li></ul><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,19);function A(F,b,_,m,j,v){const n=t,l=o,e=p;return i(),c("div",null,[D,C,s(n,{readTime:"1",words:"487"}),h,s(l),s(e)])}const O=r(y,[["render",A]]);export{f as __pageData,O as default};
