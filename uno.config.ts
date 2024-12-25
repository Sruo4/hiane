import { defineConfig, presetUno, presetAttributify, transformerDirectives } from 'unocss'
export default defineConfig({
  //自定义规则
  rules: [],
  //预设规则 有前两个预设可以满足95%以上的需求
  presets: [
    //默认预设，包括Tailwind CSS、Windi CSS、Bootstrap、Tachyons，可以使用以上任意规则
    presetUno(),
    //属性化模式 文档参考：https://unocss.nodejs.cn/presets/attributify
    presetAttributify(),
  ],
  //配置后可以使用 @apply、@screen等指令 参考地址：https://unocss.nodejs.cn/transformers/directives
  transformers: [transformerDirectives()],
  //以下可以按个人需求添加
  shortcuts: {
    "f-c-c": "flex justify-center items-center"
  },
  theme: {},
});

