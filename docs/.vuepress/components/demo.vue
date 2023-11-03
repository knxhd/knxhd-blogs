<template>
  <div id="wrapper">
    <div class="line-wrap" style="margin-left: 70px">
      <div id="item-1" class="state-item">item 1</div>
      <div id="item-2" class="state-item">item 2</div>
    </div>
  </div>
</template>

<script>
  import {jsPlumb} from 'jsplumb'
  export default {
    name: 'landing-page',
    mounted () {
      let plumbIns = jsPlumb.getInstance()
      plumbIns.ready(function () {
        plumbIns.connect({
          // 对应上述基本概念
          source: 'item-1',
          target: 'item-2',
          anchor: ['Left', 'Right', 'Top', 'Bottom', [0.3, 0, 0, -1], [0.7, 0, 0, -1], [0.3, 1, 0, 1], [0.7, 1, 0, 1]],
          connector: ['StateMachine'],
          endpoint: 'Blank',
          overlays: [ ['Arrow', { width: 8, length: 8, location: 1 }] ], // overlay
          // 添加样式
          paintStyle: { stroke: '#909399', strokeWidth: 2 }, // connector
          // endpointStyle: { fill: '#909399', outlineStroke: '#606266', outlineWidth: 1 } // endpoint
        })
      })
    }
  }
</script>

<style>
#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}
.state-item {
  width: 80px;
  height: 40px;
  color: #606266;
  background: #f6f6f6;
  border: 2px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  line-height: 40px;
  font-family: sans-serif;
  border-radius: 4px;
  margin-right: 60px;
}
.line-wrap {
  display: flex;
  margin-bottom: 40px;
}
</style>
