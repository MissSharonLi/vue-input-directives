import { ToDBC } from '@utils'
export default {
  install(Vue) {
    /**
     * @description 小数 默认保留2位小数
     * @author zmq
     * @date 2021-05-27
     * @export v-num-point
     */
    Vue.directive('numPoint', {
      inserted: (el, binding) => {
        let lock = false
        const num = binding.value ? binding.value : 2
        const res = new RegExp(`^\\D*(\\d*(?:\\.\\d{0,${num}})?).*$`, 'g') // 正则变量拼接 /^\D*(\d*(?:\.\d{0,4})?).*$/g
        const input = el.querySelector('.el-input__inner') || el
        const filterInput = (e) => {
          const oldValue = ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value)
            ? ToDBC(e.target.value).replace(res, '$1')
            : ToDBC(e.target.value)
          e.target.value =
            e.target.value && ToDBC(e.target.value).substring(0, 2) === '00'
              ? 0
              : ToDBC(e.target.value)
          e.target.value =
            e.target.value &&
            ToDBC(e.target.value).substring(0, 1) === '0' &&
            ToDBC(e.target.value).substring(1, 2) !== '.'
              ? 0
              : ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value)
            ? ToDBC(e.target.value).replace(!/^\d+(\.\d+)?$/g, '')
            : ToDBC(e.target.value)
          oldValue !== ToDBC(e.target.value) && input.dispatchEvent(new Event('input'))
        }
        el.addEventListener('compositionstart', () => (lock = true))
        el.addEventListener('compositionend', (e) => {
          lock = false
          filterInput(e)
        })
        el.addEventListener('input', (e) => {
          if (!lock) filterInput(e)
        })
      }
    })
  }
}
