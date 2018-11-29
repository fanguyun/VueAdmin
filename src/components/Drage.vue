<template>
  <div id="main" ref="main">
    <svg width=500 height=1000></svg>
  </div>
</template>
<script>
// import $ from 'jquery'
export default {
  name: 'Main',
  mounted() {
    this.drage();
  },
  data() {
    return {}
  },
  methods: {
    drage () {
      // Create a new directed graph
      var g = new dagreD3.graphlib.Graph().setGraph({});

      // States and transitions from RFC 793
      var states = {
        开始: {
          description: "represents no connection state at all.",
          style: "fill: #f77"
        },

        公文发行: {
          description: "represents waiting for a connection request from any " +
                       "remote TCP and port."
        },
        处长审核: {
          description: "represents waiting for a connection request from any " +
                       "remote TCP and port."
        },
        办公室修审: {},
        关联处室审批1: {},
        关联处室审批2: {},
        签发: {},
        登记放号: {},
        文印室: {},
        机要员: {},
        归档: {},
        结束: {}
      };

      // Add states to the graph, set labels, and style
      Object.keys(states).forEach(function(state) {
        var value = states[state];
        value.label = state;
        value.rx = value.ry = 5;
        g.setNode(state, value);
      });

      // Set up the edges
      g.setEdge("开始", "公文发行", { label: "" });
      g.setEdge("公文发行", "处长审核", { label: "" });
      g.setEdge("处长审核", "公文发行", { label: "驳回" });
      g.setEdge("处长审核", "关联处室审批1", { label: "会签" });
      g.setEdge("处长审核", "办公室修审", { label: "不会签" });
      g.setEdge("办公室修审", "公文发行", { label: "驳回" });
      g.setEdge("关联处室审批1", "办公室修审", { label: "" });
      g.setEdge("办公室修审", "签发", { label: "不补充会签" });
      g.setEdge("办公室修审", "关联处室审批2", { label: "补充会签" });
      g.setEdge("签发", "办公室修审", { label: "驳回" });
      g.setEdge("关联处室审批2", "签发", { label: "" });
      g.setEdge("签发", "登记放号", { label: "" });
      g.setEdge("登记放号", "文印室", { label: "" });
      g.setEdge("文印室", "机要员", { label: "" });
      g.setEdge("机要员", "归档", { label: "" });
      g.setEdge("归档", "结束", { label: "" });


      // Create the renderer
      var render = new dagreD3.render();

      // Set up an SVG group so that we can translate the final graph.
      var svg = d3.select("svg"),
          inner = svg.append("g");

      // Set up zoom support
      var zoom = d3.zoom()
          .on("zoom", function() {
            inner.attr("transform", d3.event.transform);
          });
      svg.call(zoom);

      // Simple function to style the tooltip for the given node.
      var styleTooltip = function(name, description) {
        return "<p class='name'>" + name + "</p><p class='description'>" + description + "</p>";
      };
      // Run the renderer. This is what draws the final graph.
      render(inner, g);

      // inner.selectAll("g.node")
      //   .attr("title", function(v) { return styleTooltip(v, g.node(v).description) })
      //   .each(function(v) { $(this).tipsy({ gravity: "w", opacity: 1, html: true }); });

      // Center the graph
      var initialScale = 0.75;
      svg.call(zoom.transform, d3.zoomIdentity.translate((svg.attr("width") - g.graph().width * initialScale) / 2, 20).scale(initialScale));

      svg.attr('height', g.graph().height * initialScale + 40);
    }
  }
}
</script>
<style lang="scss">
#main{
  width:300px;
  height:1500px;
}
text {
  font-weight: 300;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serf;
  font-size: 14px;
}

.node rect {
  stroke: #333;
  fill: #fff;
}

.edgePath path {
  stroke: #333;
  fill: #333;
  stroke-width: 1.5px;
}

.node text {
  pointer-events: none;
}

/* This styles the title of the tooltip */
.tipsy .name {
  font-size: 1.5em;
  font-weight: bold;
  color: #60b1fc;
  margin: 0;
}

/* This styles the body of the tooltip */
.tipsy .description {
  font-size: 1.2em;
}
</style>
