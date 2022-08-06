import DeviceDetector from './DeviceDetector/index.vue';

const components = [DeviceDetector];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
