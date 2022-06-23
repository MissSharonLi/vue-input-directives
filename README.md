[源码 GIT 地址](https://github.com/MissSharonLi/vue-input-limited)

[npm 地址](https://www.npmjs.com/package/vue-input-limited)

#用法

`npm install vue-input-limited --save`

```
import Vue from vue
import directives from 'vue-input-limited'
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

#提示
如果已经安装vue-input-limited，但在main.js中引用时vscode提示报错信息如下：

<img width="814" alt="image" src="https://user-images.githubusercontent.com/41463466/175257481-8cf3141e-0fa8-41ff-a95c-a143b50efd35.png">

解决办法：
在src文件目录下创建一个 shime-vue.d.ts文件，在里面写入```declare module 'vue-input-limited'``` 即可

