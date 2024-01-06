(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{424:function(t,a,s){t.exports=s.p+"assets/img/冯·诺依曼架构.0a432126.png"},425:function(t,a,s){t.exports=s.p+"assets/img/cpu和gpu.eb025e1a.png"},441:function(t,a,s){"use strict";s.r(a);var v=s(2),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"冯诺依曼架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼架构"}},[t._v("#")]),t._v(" 冯诺依曼架构")]),t._v(" "),a("img",{attrs:{src:s(424),alt:"冯诺依曼"}}),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("现代计算机是基于冯诺依曼架构的。在冯诺依曼架构中，包括输入设备、寄存器、控制器和运算器、以及输出设备。通过输入设备输入数据后，将数据存储到寄存器中，然后寄存器中的数据交给控制器进行调度，然后交给运算器做相应的计算，随后将运算结果通过输出设备输出。")]),t._v(" "),a("li",[t._v("CUP又叫中央处理器，包括控制器和运算器两个部分，负责数据和运算的控制调度和计算。")])])]),t._v(" "),a("h2",{attrs:{id:"gpu和cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu和cpu"}},[t._v("#")]),t._v(" GPU和CPU")]),t._v(" "),a("img",{attrs:{src:s(425),alt:"CPU和GPU"}}),t._v(" "),a("h3",{attrs:{id:"cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpu"}},[t._v("#")]),t._v(" CPU")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("CPU和GPU本质上是一样的，只是侧重的任务不同。CPU是计算机中的核心部分，主要负责处理计算器通用的运算和控制，CPU的内核(包括了ALU(算数逻辑运算))数量比较少，最多只有几十个。但是，CPU有大量的缓存(Cache)和复杂的控制器(CU)。")]),t._v(" "),a("li",[t._v("这样设计的原因，是因为CPU是一个通用处理器。作为计算机的主核心，它的任务非常复杂，既要应对不同类型的数据计算，还要响应人机交互。")]),t._v(" "),a("li",[t._v("复杂的条件和分支，还有任务之间的同步协调，会带来大量的分支跳转和中断处理工作。它需要更大的缓存，保存各种任务状态，以降低任务切换时的时延。它也需要更复杂的控制器，进行逻辑控制和调度")]),t._v(" "),a("li",[t._v("CPU的强项是管理和调度。真正干活的功能，反而不强(ALU占比大约5%~20%)。")]),t._v(" "),a("li",[t._v("如果我们把处理器看成是一个餐厅的话，CPU就像一个拥有几十名高级厨师的全能型餐厅。这个餐厅什么菜系都能做，但是，因为菜系多，所以需要花费大量的时间协调、配菜，上菜的速度相对比较慢。")])])]),t._v(" "),a("h3",{attrs:{id:"gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu"}},[t._v("#")]),t._v(" GPU")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("GPU为图形处理而生，任务非常明确且单一。它要做的，就是图形渲染。图形是由海量像素点组成的，属于类型高度统一、相互无依赖的大规模数据。所以，GPU的任务，是在最短的时间里，完成大量同质化数据的并行运算。所谓调度和协调的“杂活”，反而很少。并行计算，当然需要更多的核啊。")]),t._v(" "),a("li",[t._v("GPU的内核远远超过CPU，可以达到几千甚至上万个。GPU的核，称为流式多处理器(Stream Multi-processor，SM)，是一个独立的任务处理单元。")]),t._v(" "),a("li",[t._v("在整个GPU中，会划分为多个流式处理区。每个处理区，包含数百个内核。每个内核，相当于一颗简化版的CPU，具备整数运算和浮点运算的功能，以及排队和结果收集功能。")]),t._v(" "),a("li",[t._v("PU的控制器功能简单，缓存也比较少。它的ALU占比，可以达到80%以上。")]),t._v(" "),a("li",[t._v("虽然GPU单核的处理能力弱于CPU，但是数量庞大，非常适合高强度并行计算。同等晶体管规模条件下，它的算力，反而比CPU更强。")]),t._v(" "),a("li",[t._v("还是以餐厅为例。GPU就像一个拥有成千上万名初级厨师的单一型餐厅。它只适合做某种指定菜系。但是，因为厨师多，配菜简单，所以大家一起炒，上菜速度反而快。")])])]),t._v(" "),a("h2",{attrs:{id:"ai和cpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai和cpu"}},[t._v("#")]),t._v(" AI和CPU")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("大模型的训练和推理运算过程中，需要大量的并行运算的过程。在前期训练模型阶段，需要通过大量的数据进行计算，从而形成一个比较负责的神经网络模型，以此在推理阶段，根据训练好的模型得出结论。")]),t._v(" "),a("li",[t._v("训练环节由于涉及海量的训练数据，以及复杂的深度神经网络结构，所以需要的计算规模非常庞大，对芯片的算力性能要求比较高。而推理环节，对简单指定的重复计算和低延迟的要求很高。")]),t._v(" "),a("li",[t._v("因此在大模型的领域内，要完成一个大模型的构建等操作，需要有大量的GPU来训练")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);