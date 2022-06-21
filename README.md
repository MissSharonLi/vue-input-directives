#[源码 GIT 地址](https://github.com/MissSharonLi/vue-input-limits)

#用法

`npm install vue-input-limits --save`

```
import Vue from vue
import directives from 'vue-input-limits'
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
