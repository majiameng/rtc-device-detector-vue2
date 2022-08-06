import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only'; // 提取css，压缩能力不行
import CleanCSS from 'clean-css'; // 压缩css
import { writeFileSync } from 'fs'; // 写文件

const config = {
  input: './src/index.js', // 必须，入口文件
  external: ['vue', 'trtc-js-sdk'],
  output: { // 必须，输出文件 (如果要输出多个，可以是一个数组)
    sourcemap: true,
    file: './dist/index.js',
    format: 'umd',
    name: 'rtc-device-detector',
    exports: 'named', // 输出多个文件
    globals: {
      vue: 'Vue', // 告诉rollup全局变量Vue即是vue
    },
  },
  plugins: [ // 引入的插件在这里配置
    resolve(),
    css({ output(style) {
      // 压缩 css 写入 dist/vue-rollup-component-template.css
      writeFileSync('dist/index.css', new CleanCSS().minify(style).styles);
    } }),
    // css: false 将<style>块转换为导入语句，rollup-plugin-css-only可以提取.vue文件中的样式
    vue({
      css: false,
      compileTemplate: true,
    }),
    babel({
      presets: ['@vue/babel-preset-jsx'],
      exclude: '**/node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs(),
    image(),
  ],
};

export default config;
