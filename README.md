<!--
 * @Author: zoumingqing 17521355321@163.com
 * @Date: 2022-06-20 14:24:14
 * @LastEditors: zoumingqing 17521355321@163.com
 * @LastEditTime: 2022-06-20 14:28:15
 * @FilePath: /vue-input-directives/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
#[源码GIT地址](https://github.com/MissSharonLi/vue-input-directives)

#用法

`npm install vue-input-directives --save`

```
import Vue from vue
import directives from 'vue-input-directives'
Vue.use(directives)
```

1.v-num-init(限制输入正整数)

```
<el-input v-model="value" v-num-init></el-input>
```

2.v-number(限制输入 0、正整数)

```
<el-input v-model="value" v-number></el-input>
```

3.v-num-point(保留 n 位小数)

```
// 保留4位小数、其他位数依次类推
<el-input v-model="value" v-num-point="4"></el-input>

```

4.v-no-cn-val(限制不能输入中文)

```
// 保留4位小数、其他位数依次类推
<el-input v-model="value" v-no-cn-val></el-input>

```
