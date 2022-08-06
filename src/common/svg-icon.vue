<template lang="pug">
  svg(:class="svgClass" aria-hidden="true")
    use(:xlink:href="svgName")
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    svgName() {
      return `#icon-${this.iconName}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return 'svg-icon';
    },
  },
};
</script>

<style lang="stylus" scoped>
.svg-icon
  width 1.5em
  height 1.5em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
</style>
