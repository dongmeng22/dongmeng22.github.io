import{_ as r,a as s}from"./chunks/Contributors.vue_vue_type_script_setup_true_lang.3dcd3b9e.js";import{_ as d}from"./chunks/PageInfo.vue_vue_type_script_setup_true_lang.358bd1c3.js";import{_ as n,o as i,c as p,D as o,x as e,a as b,Q as h}from"./chunks/framework.c7127555.js";import"./chunks/commonjsHelpers.725317a4.js";const v=JSON.parse('{"title":"速率","description":"","frontmatter":{},"headers":[{"level":2,"title":"Contributors","slug":"contributors","link":"#contributors","children":[]}],"relativePath":"basics/networks/03性能指标.md","lastUpdated":null}'),_={name:"basics/networks/03性能指标.md"},l=e("blockquote",null,[e("p",null,"我们在上网的时候总是关心自己的网速快不快，打游戏的时候关系自己的网络稳定不稳定，延迟高不高，这一节我们就来说说计算机网络中的一些主要的性能指标")],-1),f=e("h1",{id:"速率",tabindex:"-1"},[b("速率 "),e("a",{class:"header-anchor",href:"#速率","aria-hidden":"true"},"#")],-1),m=h('<p>计算机网络中的<code>速率</code>也就是我们常说的<code>网速</code>。我们知道计算机中存储的数据都是二进制，<code>1</code>和<code>0</code>，存储一个二进制数据需要一个比特（<code>bit</code>），所以计算机网络中的速率就是<code>bit/s</code>也叫做 <code>bps</code>（bit per second）.</p><p>当然，随着网速越来越快，这个单位实在是太小了，就出现kbit/s、Mbit/s、Gbit/s、Tbit/s</p><p>其中 1kb = 1024b = $2^{10}$ b ; 1Mb = 1024 kb ; 1Gb = 1024 Mb; 1Tb = 1024Gb</p><h1 id="带宽" tabindex="-1">带宽 <a class="header-anchor" href="#带宽" aria-hidden="true">#</a></h1><p>带宽是用来表示网络的通信线路所能传送数据的能力，所以网络的带宽就是表示在单位时间内从网络中的某一点到另一点所能通过的<strong>最高数据率</strong></p><p>我们经常说的百兆宽带，指的就网速最高是<code>100Mbit/s</code></p><p>但是我们经常发现电脑中显示的网速只有十几兆每秒，这是因为计算机中的数据量往往用字节作为度量的单位，一个字节（byte）代表8个比特（bit），一般为了区别字节一般用B来表示。所以我们真实看到的百兆宽带（<code>100Mbit/s</code>）的实际下载网速是<code>12.5MB/s</code></p><h1 id="吞吐量" tabindex="-1">吞吐量 <a class="header-anchor" href="#吞吐量" aria-hidden="true">#</a></h1><p>吞吐量表示在单位时间内通过某个网络（或信道、接口）的数据量。吞吐量受网络的<strong>带宽</strong>或网络的<strong>额定速率</strong>的限制。我们经常测网速，其实就是在测网络的吞吐量</p><p>我们的百兆宽带，有时候根本达不到<code>12.5MB/s</code>的下载速度这是因为对于一个<code>100Mbit/s</code>的以太网，其典型的吞吐量<strong>可能</strong>也只有<code>80Mbit/s</code>左右 ，也就是说下载的速度是<code>10MB/s</code></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/488802a38c1d4180a016f0c10f0f3bee~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h1 id="时延" tabindex="-1">时延 <a class="header-anchor" href="#时延" aria-hidden="true">#</a></h1><p>时延指的是数据从网络的一端传送到另一端所需要的时间。这就是生活中我们常常说的是网络<code>延迟</code>。</p><p>时延分为发送时延、传播时延、处理时延和排队时延，具体可以看下面这张图</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b899d0456640479a8fdb52f44faa3ad0~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h1 id="丢包率" tabindex="-1">丢包率 <a class="header-anchor" href="#丢包率" aria-hidden="true">#</a></h1><p>丢包率反映了网络的拥塞情况，指的是在一定的时间范围内，分组在传输过程中丢失的分组数量与总的分组数量的比。丢包率具体可分为接口丢包率、结点丢包率、链路丢包率、路径丢包率、网络丢包率等。</p><p>有时候我们感觉网络变慢，网络延时变大，这可能是因为网络处于拥塞中，丢包率较高，导致自动重传，所以我们感觉不到丢包，只感觉到了网速变慢了。</p><h1 id="利用率" tabindex="-1">利用率 <a class="header-anchor" href="#利用率" aria-hidden="true">#</a></h1><p>利用率有<strong>信道</strong>利用率和<strong>网络</strong>利用率两种。<code>信道利用率</code>指出某信道有百分之几的时间是被利用的（有数据通过）。<code>网络利用率</code>是指全网络的信道利用率的加权平均值</p><blockquote><p>最后，欢迎关注我的专栏，和<strong>YK菌</strong>做好朋友</p></blockquote><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-hidden="true">#</a></h2>',22);function u(g,k,x,M,T,$){const t=d,a=r,c=s;return i(),p("div",null,[l,f,o(t,{readTime:"2",words:"848"}),m,o(a),o(c)])}const w=n(_,[["render",u]]);export{v as __pageData,w as default};
