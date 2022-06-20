const req = require.context('./', false, /[^index]\.js$/)
const requireAll = (requireContext, Vue) =>
  requireContext.keys().map((cur) => {
    const module = requireContext(cur)
    Vue.use(module.default)
  })

export default {
  install(Vue) {
    requireAll(req, Vue)
  }
}
