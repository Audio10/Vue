const blur = {}

function setBlur(el,binding) {
  // AGREGA UN BLUR
  el.style.filter = !binding.value ? 'blur(3px)' : 'none'
  // QUITA LA FLECHITA DEL CURSOR Y PONE UNA DE NEGACION
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(a => {
    if (!binding.value) {
      // SI ESE ELEMENTO NO TIENE EL ATRIBUTO SE PONE DISABLED
      a.setAttribute('disabled', true)
    }else {
      // SI TIENE EL ATRIBUTO SE QUITA LA PROPIEDAD DISABLED
      a.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur