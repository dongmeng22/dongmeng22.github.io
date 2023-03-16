import{_ as c,a as r}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as l}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.b6ca37c5.js";import{_ as n,o as d,c as s,D as e,x as a,a as o,Q as h}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const x=JSON.parse('{"title":"浏览器渲染页面流程","description":"","frontmatter":{},"headers":[{"level":2,"title":"组成页面的三大元素","slug":"组成页面的三大元素","link":"#组成页面的三大元素","children":[]},{"level":2,"title":"构建DOM树","slug":"构建dom树","link":"#构建dom树","children":[]},{"level":2,"title":"计算样式","slug":"计算样式","link":"#计算样式","children":[{"level":3,"title":"1. 把 CSS 转换为浏览器能够理解的结构","slug":"_1-把-css-转换为浏览器能够理解的结构","link":"#_1-把-css-转换为浏览器能够理解的结构","children":[]},{"level":3,"title":"2. 标准化样式表中的属性值","slug":"_2-标准化样式表中的属性值","link":"#_2-标准化样式表中的属性值","children":[]},{"level":3,"title":"3. 计算出 DOM 树中每个节点的具体样式","slug":"_3-计算出-dom-树中每个节点的具体样式","link":"#_3-计算出-dom-树中每个节点的具体样式","children":[]}]},{"level":2,"title":"布局阶段","slug":"布局阶段","link":"#布局阶段","children":[{"level":3,"title":"1. 创建布局树","slug":"_1-创建布局树","link":"#_1-创建布局树","children":[]},{"level":3,"title":"2. 布局计算","slug":"_2-布局计算","link":"#_2-布局计算","children":[]}]},{"level":2,"title":"分层","slug":"分层","link":"#分层","children":[]},{"level":2,"title":"图层绘制","slug":"图层绘制","link":"#图层绘制","children":[]},{"level":2,"title":"栅格化操作","slug":"栅格化操作","link":"#栅格化操作","children":[]},{"level":2,"title":"合成与显示","slug":"合成与显示","link":"#合成与显示","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"重排、重绘与合成","slug":"重排、重绘与合成","link":"#重排、重绘与合成","children":[{"level":3,"title":"重排","slug":"重排","link":"#重排","children":[]},{"level":3,"title":"重绘","slug":"重绘","link":"#重绘","children":[]},{"level":3,"title":"合成","slug":"合成","link":"#合成","children":[]}]},{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/browser/03渲染原理.md","lastUpdated":1678883566000}'),m={name:"basics/browser/03渲染原理.md"},f=a("h1",{id:"浏览器渲染页面流程",tabindex:"-1"},[o("浏览器渲染页面流程 "),a("a",{class:"header-anchor",href:"#浏览器渲染页面流程","aria-hidden":"true"},"#")],-1),b=h('<h2 id="组成页面的三大元素" tabindex="-1">组成页面的三大元素 <a class="header-anchor" href="#组成页面的三大元素" aria-hidden="true">#</a></h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e419c6936e8c4694ab48c15a611bc430~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>HTML 是由标记和文本组成。标记也称为标签，浏览器会根据标签的语义来正确展示 HTML 内容</li><li>CSS 又称为层叠样式表，是由选择器和属性组成。用来改变 HTML 的字体颜色、大小等信息</li><li>JavaScript可以使网页的内容“动”起来</li></ul><p>将这三大元素渲染成页面，需要很多阶段：构建 DOM 树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成。</p><h2 id="构建dom树" tabindex="-1">构建DOM树 <a class="header-anchor" href="#构建dom树" aria-hidden="true">#</a></h2><p>将 HTML 转换为浏览器能够理解的结构 —— DOM 树</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/533876265bcb45de88c866baa718d043~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>在浏览器控制台中输入 <code>document</code> 即可查看当前页面的 DOM 树</p><p>DOM 和 HTML 内容几乎是一样的，但是和 HTML 不同的是，DOM 是保存在内存中树状结构，可以通过 JavaScript 来查询或修改其内容。</p><h2 id="计算样式" tabindex="-1">计算样式 <a class="header-anchor" href="#计算样式" aria-hidden="true">#</a></h2><h3 id="_1-把-css-转换为浏览器能够理解的结构" tabindex="-1">1. 把 CSS 转换为浏览器能够理解的结构 <a class="header-anchor" href="#_1-把-css-转换为浏览器能够理解的结构" aria-hidden="true">#</a></h3><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5335732e50f3418e8bb3ddf0d31a1def~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>通过 link 引用的外部 CSS 文件</li><li><code>&lt;style&gt;</code> 标记内的 CSS</li><li>元素的 <code>style</code> 属性内嵌的 CSS</li></ul><p>当渲染引擎接收到 CSS 文本时，会执行一个转换操作，将 CSS 文本转换为浏览器可以理解的结构——styleSheets</p><p>在控制台中输入document.styleSheets即可查看样式表，这个样式表包含了很多种样式，已经把那三种来源的样式都包含进去了。</p><p>渲染引擎会把获取到的 CSS 文本全部转换为 styleSheets 结构中的数据，并且该结构同时具备了查询和修改功能，这会为后面的样式操作提供基础。</p><h3 id="_2-标准化样式表中的属性值" tabindex="-1">2. 标准化样式表中的属性值 <a class="header-anchor" href="#_2-标准化样式表中的属性值" aria-hidden="true">#</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/953002118b2a48b8a07a1aee564f5e51~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h3 id="_3-计算出-dom-树中每个节点的具体样式" tabindex="-1">3. 计算出 DOM 树中每个节点的具体样式 <a class="header-anchor" href="#_3-计算出-dom-树中每个节点的具体样式" aria-hidden="true">#</a></h3><p>继承 + 层叠</p><p>CSS 继承就是每个 DOM 节点都包含有父节点的样式</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00d226f497464531936160dd8b3ca35e~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>可以在浏览器开发者工具中查看CSS继承关系</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff314bc0cef144959846e89467f4f743~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>层叠是 CSS 的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法。</p><p>总之，样式计算阶段的目的是为了计算出 DOM 节点中每个元素的具体样式，在计算过程中需要遵守 CSS 的继承和层叠两个规则。这个阶段最终输出的内容是每个 DOM 节点的样式，并被保存在 ComputedStyle 的结构内。</p><h2 id="布局阶段" tabindex="-1">布局阶段 <a class="header-anchor" href="#布局阶段" aria-hidden="true">#</a></h2><p>有了 DOM 树和 DOM 树中元素的样式，还需要知道 DOM 元素的<strong>几何位置</strong>信息。那么接下来就需要计算出 DOM 树中可见元素的几何位置，我们把这个计算过程叫做<code>布局</code>。</p><h3 id="_1-创建布局树" tabindex="-1">1. 创建布局树 <a class="header-anchor" href="#_1-创建布局树" aria-hidden="true">#</a></h3><p>DOM 树还含有很多不可见的元素，比如 head 标签，还有使用了 display:none 属性的元素。所以在显示之前，需要额外地构建一棵只包含可见元素的<strong>布局树</strong></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4aca46137bc749b69bb1c8338d8f7aa0~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>为了构建布局树，浏览器大体上完成了下面这些工作：</p><ul><li>遍历 DOM 树中的所有可见节点，并把这些节点加到布局树中；</li><li>而不可见的节点会被布局树忽略掉，如 head 标签下面的全部内容，再比如 body.p.span 这个元素，因为它的属性包含 dispaly:none，所以这个元素也没有被包进布局树。</li></ul><h3 id="_2-布局计算" tabindex="-1">2. 布局计算 <a class="header-anchor" href="#_2-布局计算" aria-hidden="true">#</a></h3><p>接下来，就要计算布局树节点的坐标位置了。布局的计算过程非常复杂，我们这里先跳过不讲，等到后面章节中我再做详细的介绍。</p><p>在执行布局操作的时候，会把布局运算的结果重新写回布局树中，所以布局树既是输入内容也是输出内容，这是布局阶段一个不合理的地方，因为在布局阶段并没有清晰地将输入内容和输出内容区分开来。</p><p>针对这个问题，Chrome 团队正在重构布局代码，下一代布局系统叫 LayoutNG，试图更清晰地分离输入和输出，从而让新设计的布局算法更加简单。</p><blockquote><p>总结一下：在 HTML 页面内容被提交给渲染引擎之后，渲染引擎首先将 HTML 解析为浏览器可以理解的 DOM；然后根据 CSS 样式表，计算出 DOM 树所有节点的样式；接着又计算每个元素的几何坐标位置，并将这些信息保存在布局树中。</p></blockquote><h2 id="分层" tabindex="-1">分层 <a class="header-anchor" href="#分层" aria-hidden="true">#</a></h2><p>因为页面中有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的<strong>图层树</strong>（LayerTree）。</p><p>浏览器的页面实际上被分成了很多图层，这些图层叠加后合成了最终的页面。下面我们再来看看这些图层和布局树节点之间的关系，如文中图所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae9aeeafd6f24db7b38ba35add2ae494~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>通常情况下，并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。如上图中的 span 标签没有专属图层，那么它们就从属于它们的父节点图层。但不管怎样，最终每一个节点都会直接或者间接地从属于一个层。</p><p>那么需要满足什么条件，渲染引擎才会为特定的节点创建新的图层呢？通常满足下面两点中任意一点的元素就可以被提升为单独的一个图层。</p><p><strong>第一点，拥有<code>层叠上下文</code>属性的元素会被提升为单独的一层</strong></p><p>页面是个二维平面，但是层叠上下文能够让 HTML 元素具有三维概念，这些 HTML 元素按照自身属性的优先级分布在垂直于这个二维平面的 z 轴上。你可以结合下图来直观感受下：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ca405d1a3142a0b48293433781c0ea~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>从图中可以看出，明确<code>定位</code>属性的元素、定义<code>透明</code>属性的元素、使用 CSS <code>滤镜</code>的元素等，都拥有层叠上下文属性。</p><p><strong>第二点，需要剪裁（clip）的地方也会被创建为图层</strong></p><p>设置一个 div ，其大小限定为 200 * 200 像素，而 div 里面的文字内容比较多，文字所显示的区域肯定会超出 200 * 200 的面积，这时候就产生了剪裁，渲染引擎会把裁剪文字内容的一部分用于显示在 div 区域，下图是运行时的执行结果：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/902ca43e063048639285c3eabb2e40b9~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>出现这种裁剪情况的时候，渲染引擎会为文字部分单独创建一个层，如果出现滚动条，滚动条也会被提升为单独的层。</p><p>所以说，元素有了层叠上下文的属性或者需要被剪裁，满足其中任意一点，就会被提升成为单独一层。</p><h2 id="图层绘制" tabindex="-1">图层绘制 <a class="header-anchor" href="#图层绘制" aria-hidden="true">#</a></h2><p>在完成图层树的构建之后，渲染引擎会对图层树中的每个图层进行绘制</p><p>渲染引擎实现图层的绘制，首先会把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表，如下图所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1eb3e0bd8e244df2b8fb9a49c283999c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>从图中可以看出，绘制列表中的指令其实非常简单，就是让其执行一个简单的绘制操作，比如绘制粉色矩形或者黑色的线等。而绘制一个元素通常需要好几条绘制指令，因为每个元素的背景、前景、边框都需要单独的指令去绘制。所以在图层绘制阶段，输出的内容就是这些待绘制列表。</p><p>你也可以打开“开发者工具”的“Layers”标签，选择“document”层，来实际体验下绘制列表，如下图所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d9e6dc8513e47fe900d1905c3862a2f~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>在该图中，区域 1 就是 document 的绘制列表，拖动区域 2 中的进度条可以重现列表的绘制过程。</p><h2 id="栅格化操作" tabindex="-1">栅格化操作 <a class="header-anchor" href="#栅格化操作" aria-hidden="true">#</a></h2><p>绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的<strong>合成线程</strong>来完成的。你可以结合下图来看下渲染主线程和合成线程之间的关系：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2dbc7eb84663413185b17d092184ec03~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>如上图所示，当图层的绘制列表准备好之后，主线程会把该绘制列表提交（commit）给合成线程，那么接下来合成线程是怎么工作的呢？</p><p>那我们得先来看看什么是视口，你可以参看下图：通常一个页面可能很大，但是用户只能看到其中的一部分，我们把用户可以看到的这个部分叫做视口（viewport）。</p><p>在有些情况下，有的图层可以很大，比如有的页面你使用滚动条要滚动好久才能滚动到底部，但是通过视口，用户只能看到页面的很小一部分，所以在这种情况下，要绘制出所有图层内容的话，就会产生太大的开销，而且也没有必要。</p><p>基于这个原因，合成线程会将图层划分为图块（tile），这些图块的大小通常是 256x256 或者 512x512，如下图所示：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26a9df7f3aac437ca74f8b7bf97b65fb~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>然后合成线程会按照视口附近的图块来优先生成<code>位图</code>，实际生成位图的操作是由栅格化来执行的。</p><p>所谓栅格化，是指将图块转换为位图。</p><p>而图块是栅格化执行的最小单位。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的</p><p>通常，栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。</p><p>GPU 操作是运行在 GPU 进程中，如果栅格化操作使用了 GPU，那么最终生成位图的操作是在 GPU 中完成的，这就涉及到了跨进程操作。具体形式你可以参考下图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a20a8be01e5042d98c66a8728a11c3ac~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>从图中可以看出，渲染进程把生成图块的指令发送给 GPU，然后在 GPU 中执行生成图块的位图，并保存在 GPU 的内存中。</p><h2 id="合成与显示" tabindex="-1">合成与显示 <a class="header-anchor" href="#合成与显示" aria-hidden="true">#</a></h2><p>一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。</p><p>浏览器进程里面有一个叫 viz 的组件，用来接收合成线程发过来的 DrawQuad 命令，然后根据 DrawQuad 命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。</p><p>到这里，经过这一系列的阶段，编写好的 HTML、CSS、JavaScript 等文件，经过浏览器就会显示出漂亮的页面了。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h2><p>好了，我们现在已经分析完了整个渲染流程，从 HTML 到 DOM、样式计算、布局、图层、绘制、光栅化、合成和显示。下面我用一张图来总结下这整个渲染流程：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dedf745ba55046549152758f3fa6bfbd~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>结合上图，一个完整的渲染流程大致可总结为如下：</p><ol><li>渲染进程将 HTML 内容转换为能够读懂的 DOM 树结构。</li><li>渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。</li><li>创建布局树，并计算元素的布局信息。</li><li>对布局树进行分层，并生成分层树。</li><li>为每个图层生成绘制列表，并将其提交到合成线程。</li><li>合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。</li><li>合成线程发送绘制图块命令 DrawQuad 给浏览器进程。</li><li>浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。</li></ol><h2 id="重排、重绘与合成" tabindex="-1">重排、重绘与合成 <a class="header-anchor" href="#重排、重绘与合成" aria-hidden="true">#</a></h2><blockquote><p>最后我们再来看看三个和渲染流水线相关的概念——“重排”“重绘”和“合成”。理解了这三个概念对于你后续 Web 的性能优化会有很大帮助。</p></blockquote><h3 id="重排" tabindex="-1">重排 <a class="header-anchor" href="#重排" aria-hidden="true">#</a></h3><blockquote><p>更新了元素的几何属性</p></blockquote><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d1d7dfd77e346b5abba7da5f88e539f~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>从上图可以看出，如果你通过 JavaScript 或者 CSS 修改元素的几何位置属性，例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就叫重排。</p><p>无疑，重排需要更新完整的渲染流水线，所以开销也是最大的。</p><h3 id="重绘" tabindex="-1">重绘 <a class="header-anchor" href="#重绘" aria-hidden="true">#</a></h3><blockquote><p>更新元素的绘制属性</p></blockquote><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/155c9b3b4a904e06aa204049300e74e9~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>从图中可以看出，如果修改了元素的背景颜色，那么布局阶段将不会被执行，因为并没有引起几何位置的变换，所以就直接进入了绘制阶段，然后执行之后的一系列子阶段，这个过程就叫重绘。</p><p>相较于重排操作，重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些。</p><h3 id="合成" tabindex="-1">合成 <a class="header-anchor" href="#合成" aria-hidden="true">#</a></h3><p>那如果你更改一个既不要布局也不要绘制的属性，会发生什么变化呢？</p><p>渲染引擎将跳过布局和绘制，只执行后续的合成操作，我们把这个过程叫做合成。具体流程参考下图：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8af066076ae94428920088b99fce4fd7~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>在上图中，我们使用了 CSS 的 transform 来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。</p><p>这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。</p><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>',104);function u(g,k,_,S,v,j){const p=l,i=c,t=r;return d(),s("div",null,[f,e(p,{readTime:"11",words:"3.8k"}),b,e(i),e(t)])}const C=n(m,[["render",u]]);export{x as __pageData,C as default};
