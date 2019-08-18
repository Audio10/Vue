const eventBust = {}

eventBust.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
}

export default eventBust
