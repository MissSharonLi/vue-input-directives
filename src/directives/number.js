import { ToDBC } from '@utils'
export default {
  install(Vue) {
    /**
     * @description 0、正整数
     * @author zmq
     * @date 2021-05-27
     * @export v-number
     */
    Vue.directive('number', {
      inserted: (el) => {
        let lock = false
        const input = el.querySelector('.el-input__inner') || el
        const filterInput = (e) => {
          const oldValue = ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value)
            ? ToDBC(e.target.value).replace(/[^\d]/g, '')
            : ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value).substring(0, 1) === '0' ? 0 : ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value)
            ? Number(ToDBC(e.target.value))
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
