export default {
  name: 'svg2vue-style',
  functional: true,
  render: function(h, ctx) {
    return h('style', ctx.data, ctx.children)
  }
}
