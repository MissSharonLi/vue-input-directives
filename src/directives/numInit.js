import { ToDBC } from '@utils'
export default {
  install(Vue) {
    /**
     * @description 文本输入框限制输入正整数
     * @author zmq
     * @date 2021-05-27
     * @export v-num-init
     */
    Vue.directive('numVal', {
      inserted: (el) => {
        let lock = false
        const input = el.querySelector('.el-input__inner') || el
        const filterInput = (e) => {
          const oldValue = ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value)
            ? ToDBC(e.target.value).replace(/^\D*(^([1-9][0-9]*)*(?:\.^\d{0,2})?).*$/g, '$1')
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
