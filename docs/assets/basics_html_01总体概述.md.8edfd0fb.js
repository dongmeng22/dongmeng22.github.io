import{_ as t,a as p}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as o}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as r,o as c,c as i,D as s,x as a,a as d,Q as D}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const T=JSON.parse('{"title":"总体概述","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. HTML 起步","slug":"_1-html-起步","link":"#_1-html-起步","children":[]},{"level":2,"title":"1.1 网页的“三驾马车”","slug":"_1-1-网页的-三驾马车","link":"#_1-1-网页的-三驾马车","children":[]},{"level":2,"title":"1.2 HTML 是什么","slug":"_1-2-html-是什么","link":"#_1-2-html-是什么","children":[]},{"level":2,"title":"1.3 HTML的发展历史","slug":"_1-3-html的发展历史","link":"#_1-3-html的发展历史","children":[]},{"level":2,"title":"2.1 HTML元素","slug":"_2-1-html元素","link":"#_2-1-html元素","children":[]},{"level":2,"title":"2.2 HTML结构","slug":"_2-2-html结构","link":"#_2-2-html结构","children":[]},{"level":2,"title":"2.3 <head> 标签","slug":"_2-3-head-标签","link":"#_2-3-head-标签","children":[{"level":3,"title":"<meta>：元数据标签","slug":"meta-元数据标签","link":"#meta-元数据标签","children":[]},{"level":3,"title":"<title> 标题标签","slug":"title-标题标签","link":"#title-标题标签","children":[]},{"level":3,"title":"<style> 样式标签","slug":"style-样式标签","link":"#style-样式标签","children":[]},{"level":3,"title":"<link> 链接标签","slug":"link-链接标签","link":"#link-链接标签","children":[]}]},{"level":2,"title":"2.4 <body>标签","slug":"_2-4-body-标签","link":"#_2-4-body-标签","children":[{"level":3,"title":"内联元素 inline","slug":"内联元素-inline","link":"#内联元素-inline","children":[]},{"level":3,"title":"块级元素 block","slug":"块级元素-block","link":"#块级元素-block","children":[]},{"level":3,"title":"行内块级元素 inline-block","slug":"行内块级元素-inline-block","link":"#行内块级元素-inline-block","children":[]}]},{"level":2,"title":"2.5 <script> 可执行脚本标签","slug":"_2-5-script-可执行脚本标签","link":"#_2-5-script-可执行脚本标签","children":[]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/html/01总体概述.md","lastUpdated":null}'),F={name:"basics/html/01总体概述.md"},y=a("h1",{id:"总体概述",tabindex:"-1"},[d("总体概述 "),a("a",{class:"header-anchor",href:"#总体概述","aria-hidden":"true"},"#")],-1),h=D(`<h2 id="_1-html-起步" tabindex="-1">1. HTML 起步 <a class="header-anchor" href="#_1-html-起步" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element" target="_blank" rel="noreferrer">HTML 元素参考 - HTML（超文本标记语言） | MDN (mozilla.org)</a></p><h2 id="_1-1-网页的-三驾马车" tabindex="-1">1.1 网页的“三驾马车” <a class="header-anchor" href="#_1-1-网页的-三驾马车" aria-hidden="true">#</a></h2><ul><li>HTML：网页的基本结构</li><li>CSS：网页的展示效果</li><li>JavaScript：网页的功能与行为</li></ul><h2 id="_1-2-html-是什么" tabindex="-1">1.2 HTML 是什么 <a class="header-anchor" href="#_1-2-html-是什么" aria-hidden="true">#</a></h2><p><code>HTML</code> 全称 <code>HyperText Markup Language</code> 翻译过来就是 <strong>超文本标记语言</strong> 是<em>用来构建网页基本结构及其内容的标记语言</em></p><p>那，什么是<strong>超文本</strong>，什么又是<strong>标记语言</strong>呢？</p><ul><li><p><strong>超文本</strong>：文本中包含指向其他文本的链接</p></li><li><p><strong>标记语言</strong>：将文本以及文本相关的其他信息结合起来，展现出关于文档的结构。常见的标记语言有<code>HTML</code>、<code>XML</code>、<code>Markdown</code>等</p></li></ul><p><strong>疑问</strong>标记语言是编程语言嘛？ <strong>解答</strong>不是，标记语言不具有编程语言的逻辑与行为的能力</p><h2 id="_1-3-html的发展历史" tabindex="-1">1.3 HTML的发展历史 <a class="header-anchor" href="#_1-3-html的发展历史" aria-hidden="true">#</a></h2><ul><li><strong>1989</strong> 伯纳斯 · 李在1989年提出了基于互联网的超文本系统</li><li><strong>1993</strong> 1993年IETF(互联网工程任务组)发布首个HTML提案,由此<code>HTML</code>语言第一版诞生</li><li><strong>1995</strong> 在经历过几个草案之后<code>HTML2.0</code>于1995年发布，包括了基于表单的文件上传、表格、国际化等功能</li><li><strong>1997</strong> 1994年W3C成立，随后接管了HTML的标准化工作，并在1997年发布了<code>HTML3.2</code></li><li><strong>1997</strong> 随后发布的 <code>HTML4.0</code> 中采用许多特定浏览器的元素类型和属性</li><li><strong>2014</strong> 2014年<code>HTML5</code>作为W3C推荐标准发布</li></ul><p>HTML的构成：标签，标签体，属性</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是YK菌</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_2-html-深入" tabindex="-1">2. HTML 深入 <a class="header-anchor" href="#_2-html-深入" aria-hidden="true">#</a></h1><blockquote><p>下面的内容推荐你按下键盘上的F12键，选到Elements选项中，跟着掘金网站的html文件，一起探索HTML文档的结构</p></blockquote><h2 id="_2-1-html元素" tabindex="-1">2.1 HTML元素 <a class="header-anchor" href="#_2-1-html元素" aria-hidden="true">#</a></h2><p>HTML文档包含多个HTML元素，元素具备不同的特性</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c87e7b56867498a8f1cf6d919815272~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><ul><li>HTML元素 = 开始标签 + 结束标签 + 元素内容</li><li>一些元素只有一个标签，如img、input、br等</li><li>HTML元素标签不区分大小写</li><li>元素可以嵌套在其他元素中间</li><li>元素可以拥有属性，属性包含有元素的额外信息</li></ul><p>其实在我平时使用和说明的时候都把<strong>元素</strong>直接称为<strong>标签</strong>，所以后面的博文，可能会混用这两种说法~</p><h2 id="_2-2-html结构" tabindex="-1">2.2 HTML结构 <a class="header-anchor" href="#_2-2-html结构" aria-hidden="true">#</a></h2><p>虽然HTML元素可以任意组合，但是HTML是有一些固定的结构的~</p><p>先来看一个标准的HTML文档的示例</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 页面标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我的第一个标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我的第一个段落。</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><p><code>&lt;!DOCTYPE html&gt;</code> 放在HTML文档最前面，浏览器会按照W3C的HTML5标准来解析渲染页面</p></li><li><p><code>&lt;html&gt;</code> 根元素，包含整个页面的内容</p></li><li><p><code>&lt;head&gt;</code> 对用户不可见，其中包含例如面向搜索引擎的关键字、页面描述、字符编码声明、CSS样式等</p></li><li><p><code>&lt;body&gt;</code> 该元素包含能够被用户访问到的内容，包括文本、图像、视频、游戏、音频等</p></li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/971485085fe746b8ab9be751ae1877ae~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>下面我们来深入了解一下<code>&lt;head&gt;</code>标签和<code>&lt;body&gt;</code>标签以及一个很重要的<code>&lt;script&gt;</code>标签</p><h2 id="_2-3-head-标签" tabindex="-1">2.3 <code>&lt;head&gt;</code> 标签 <a class="header-anchor" href="#_2-3-head-标签" aria-hidden="true">#</a></h2><h3 id="meta-元数据标签" tabindex="-1"><code>&lt;meta&gt;</code>：元数据标签 <a class="header-anchor" href="#meta-元数据标签" aria-hidden="true">#</a></h3><p><strong>作用</strong> 说明文档、描述数据的标签</p><p>下面是<a href="https://juejin.cn/" target="_blank" rel="noreferrer">掘金首页</a>的html文件中meta标签的内容</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1bb522480c6a4bf582dd752ff6be3563~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>meta标签分为三类： <code>charset</code>/<code>name</code>/<code>http-equiv</code></p><ol><li><code>charset</code> 定义文档字符编码</li></ol><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>name</code> 用名/值对定义元数据 用来 说明文档</li></ol><p>① keywords 页面关键字</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">掘金,稀土,Vue.js,前端面试题,nginx配置,Kotlin,RxJava,React Native,敏捷开发,Python</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>② description 页面描述</p><p>这里可以去看各大网站的页面描述与关键字，要写好可是一个技术活~ 因为这有利于网站的SEO</p><p>掘金首页 页面描述 示例</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">掘金是一个帮助开发者成长的社区,是给开发者用的 Hacker News,给设计师用的 Designer News,和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货,其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时,掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户,我们相信你也可以在这里有所收获。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>百度首页 页面描述 示例</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">全球领先的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>③ author 页面作者</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">YK菌</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>④ viewport 定义设备屏幕上用来显示网页的区域（主要用于移动端）</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0, maximun-scale=1.0, user-scalable=0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><code>http-equiv</code> 模拟 HTTP 标头字段</li></ol><p>此例将标头字段<code>expires</code>用于指定网页缓存时间的期限，一旦网页缓存时间过期，网页就必须从服务器上重新缓存一次，才可以继续浏览页面</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">expires</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">25 Aug 2021</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此例将标头字段<code>refresh</code>的值设置为<code>5</code>，其作用是让浏览器每隔5秒就再次载入页面</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">refresh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此例来自百度首页html文件，是另一种声明HTML页面所用字符编码的方法</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/html;charset=utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>当然还可以自定义meta标签</li></ol><p>⾃定义meta，⽤于向特定⽹站提供⼀些信息<a href="https://wiki.whatwg.org/wiki/MetaExtensions" target="_blank" rel="noreferrer">https://wiki.whatwg.org/wiki/MetaExtensions</a></p><h3 id="title-标题标签" tabindex="-1"><code>&lt;title&gt;</code> 标题标签 <a class="header-anchor" href="#title-标题标签" aria-hidden="true">#</a></h3><p>页面的标签。显示在浏览器的标签页上</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">【青训营】HTML基础 - 语义化标签 - 浏览器渲染过程 - 笔记及拓展</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="style-样式标签" tabindex="-1"><code>&lt;style&gt;</code> 样式标签 <a class="header-anchor" href="#style-样式标签" aria-hidden="true">#</a></h3><p>这里是大家熟悉的放CSS样式的标签，可用来定义HTML文档<strong>内嵌</strong>的CSS样式 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e8530c23edb54df2a6ee1ad142923442~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><h3 id="link-链接标签" tabindex="-1"><code>&lt;link&gt;</code> 链接标签 <a class="header-anchor" href="#link-链接标签" aria-hidden="true">#</a></h3><p>链接标签用来指定外部资源（CSS样式表是最典型的情况），建立HTML文档与外部资源的联系</p><ul><li><code>rel</code> 属性用来说明HTML页面与关联资源的关系类型，如 icon、license、help、author</li><li><code>type</code> 属性用来指定所关联资源的MIME类型，如text/css、image/x-icon</li><li><code>href</code> 属性用来指定外部资源的URL</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e666038b59da4f359369bc812da4eb3f~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>当前⻚⾯的favicon</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">shortcut icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">favicon.ico</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image/x-icon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>链接到样式表</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-css-file.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-4-body-标签" tabindex="-1">2.4 <code>&lt;body&gt;</code>标签 <a class="header-anchor" href="#_2-4-body-标签" aria-hidden="true">#</a></h2><p>在此标签内写的结构，是用户可以看到的，可以将这里的元素分为三类</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9805082c3014c7d98db3c8f82971c85~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><h3 id="内联元素-inline" tabindex="-1">内联元素 inline <a class="header-anchor" href="#内联元素-inline" aria-hidden="true">#</a></h3><ul><li>只占据它对应标签的边框所包含的空间</li><li>只能容纳⽂本或其他内联元素</li><li>只能通过修改⽔平边距、边框或者⾏⾼的⽅式改变尺⼨</li></ul><p>常见的内联元素有：<code>&lt;a&gt; &lt;span&gt; &lt;br&gt; &lt;i&gt; &lt;em&gt; &lt;strong&gt; &lt;label&gt; &lt;q&gt; &lt;var&gt; &lt;cite&gt; &lt;code&gt;</code></p><h3 id="块级元素-block" tabindex="-1">块级元素 block <a class="header-anchor" href="#块级元素-block" aria-hidden="true">#</a></h3><ul><li>占据其⽗元素的整⾏，总是从新⾏上开始</li><li>能容纳其他块元素或者内联元素</li><li>可以控制宽⾼、⾏⾼、边距、边框等改变其尺⼨</li></ul><p>常⽤的块级元素： <code>&lt;div&gt; &lt;p&gt; &lt;h1&gt;-&lt;h6&gt; &lt;ol&gt; &lt;ul&gt; &lt;dl&gt; &lt;table&gt; &lt;address&gt; &lt;blockquote&gt; &lt;form&gt;</code></p><h3 id="行内块级元素-inline-block" tabindex="-1">行内块级元素 inline-block <a class="header-anchor" href="#行内块级元素-inline-block" aria-hidden="true">#</a></h3><ul><li>元素在⾏内排列，不会独占⼀⾏</li><li>⽀持设置宽⾼以及垂直边距、边框</li></ul><p>常⽤的内联元素：<code>&lt;img&gt;、&lt;input&gt;、&lt;td&gt;</code></p><h2 id="_2-5-script-可执行脚本标签" tabindex="-1">2.5 <code>&lt;script&gt;</code> 可执行脚本标签 <a class="header-anchor" href="#_2-5-script-可执行脚本标签" aria-hidden="true">#</a></h2><p>可以通过src属性引入外链的js，也可以在标签体里写js代码（内嵌脚本）</p><p>PS: 设置了src属性的script元素不能含有任何内容。不能用同一个script元素既定义内嵌脚本又引用外部脚本。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">javascript.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/javascript</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">I am YK菌</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>&lt;script&gt;</code>标签虽然可以放在文档的<strong>任意位置</strong>，但是一般还是推荐放在<code>&lt;head&gt;</code>标签中，方便查看网页用到哪些脚本</p><p>等等，你是否还记得之前学习中遇到过说，有些JS应该放页面的底部，因为有些脚本需要操作DOM，要等DOM都解析好了才能操作，别慌<code>&lt;script&gt;</code>标签中有两个属性，可以延迟加载与运行js文件代码</p><ul><li><p><code>defer</code>：⽴即下载，延迟执⾏，表示脚本可以等到dom被完全解析和显示之后在执⾏，只对外部脚本有效。有defer 属性的脚本会阻⽌<code>DOMContentLoaded</code> 事件，直到脚本被加载并且解析完成。</p></li><li><p><code>async</code>：⽴即下载脚本，不妨碍其他操作，⽐如下载其他资源或者加载其他脚本，只对外部脚本有效</p></li><li><p>没有 <code>defer</code> 或 <code>async</code>，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。</p></li></ul><p>这张图很形象的展示了js异步加载执行方式的区别，蓝色表示加载js，红色表示执行js，绿色表示解析HTML</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f4d268fa26e46b197e1a9cdb832461b~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>defer-script 加载时HTML并未停止解析，这两个过程是<strong>并行</strong>的。整个 document 解析完毕且 defer-script 也加载完成之后，会执行所有由 defer-script 加载的 JavaScript 代码，然后触发 <code>DOMContentLoaded</code> 事件。</p><p>async-script与 defer-script的区别在于，如果已经加载好，就会开始执行。<strong>这种方式加载的 JavaScript 依然会阻塞 load 事件</strong> （加载好就会执行）。 async-script 可能在 DOMContentLoaded 触发之前或之后执行，但一定在 load 触发之前执行</p><p>在加载多个JS脚本的时候，<code>async-script</code>是无顺序的加载，而<code>defer-script</code>是有顺序的加载。</p><p><strong>补充知识</strong>： <code>window.onload</code> 与 <code>DOMContentLoaded</code> 的区别</p><ul><li><code>window.onload</code> 资源全部加载完成才能执行，包括图片</li><li><code>DOMContentLoaded</code> DOM渲染完成即可，图片可能尚未下载</li></ul><h1 id="_3-浏览器渲染过程" tabindex="-1">3. 浏览器渲染过程 <a class="header-anchor" href="#_3-浏览器渲染过程" aria-hidden="true">#</a></h1><ol><li><strong>构建DOM树</strong> HTML字符串描述了一个页面的结构，浏览器会把HTML结构字符串解析转换DOM树形结构。</li></ol><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8185c1ca04a64b8082768ff92ae677c2~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><ol start="2"><li><p><strong>样式计算，构建CSSOM树CSS</strong> 解析CSS会产生CSS规则树，它和DOM结构比较像。</p></li><li><p><strong>加载js脚本文件</strong> 通过 DOM API 和 CSSOM API 来操作 DOM Tree 和 CSS Rule Tree。</p></li><li><p><strong>将DOM和CSSOM组合成⼀个Render树</strong> 解析完成后，浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。</p></li></ol><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8d1d0de7de946d28dffa6e667773fae~tplv-k3u1fbpfcp-zoom-1.image" alt="image.png"></p><ol start="5"><li><strong>布局计算</strong></li><li><strong>绘制</strong> 最后通过调用操作系统Native GUI的API绘制。</li></ol><h1 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h1><p>字节跳动青训营 HTML基础 视频 + PPT</p><p><a href="https://www.runoob.com/html/html-tutorial.html" target="_blank" rel="noreferrer">菜鸟教程 HTML</a></p><p><a href="https://www.w3school.com.cn/html/index.asp" target="_blank" rel="noreferrer">w3school HTML</a></p><p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noreferrer">MDN HTML</a></p><p><a href="https://juejin.cn/" target="_blank" rel="noreferrer">掘金首页HTML文档</a></p><p><a href="https://juejin.cn/post/6844903815758479374" target="_blank" rel="noreferrer">你不知道的浏览器页面渲染机制</a></p><p>《HTML5 权威指南》</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>`,111);function u(m,g,b,C,f,v){const l=o,n=t,e=p;return c(),i("div",null,[y,s(l,{readTime:"10",words:"2.8k"}),h,s(n),s(e)])}const E=r(F,[["render",u]]);export{T as __pageData,E as default};
