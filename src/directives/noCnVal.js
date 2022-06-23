import { ToDBC } from '@utils'
export default {
  install(Vue) {
    /**
     * @description 不能输入中文
     * @author zmq
     * @date 2021-05-27
     * @export v-no-cn-val
     */
    Vue.directive('noCnVal', {
      inserted: (el) => {
        let lock = false
        const input = el.querySelector('.el-input__inner') || el
        const filterInput = (e) => {
          const oldValue = ToDBC(e.target.value)
          e.target.value = ToDBC(e.target.value)
            ? ToDBC(e.target.value).replace(/[\u4E00-\u9FA5]/g, '')
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
