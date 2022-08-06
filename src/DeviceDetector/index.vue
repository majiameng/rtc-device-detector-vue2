<template>
  <div v-if="isOpen" class="device-detector-backdrop">
    <div class="root" @click="stopBubble">
      <Button type="outlined" class="close" :onClick="handleClose">跳过检测</Button>
      <DeviceConnect
        :stepNameList="stepNameList"
        :startDeviceDetect="() => this.detectState = 1"></DeviceConnect>
    </div>
  </div>
</template>
<script>
import RTCDetect from 'rtc-detect';
import Button from './button.vue';
import DeviceConnect from './deviceConnect.vue';
export default {
  name: 'deviceDetector',
  components: {
    Button,
    DeviceConnect,
  },
  props: {
    onClose: Function,
    hasNetworkDetect: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      stepNameList: [],
      detectState: 0,
      activeStep: 0,
      isOpen: true,
      completed: {},
    }
  },
  methods: {
    stopBubble(event) {
      event.stopPropagation();
    },
    // 重新检测
    handleReset() {
      this.completed = {};
      this.detectState = 0;
      this.activeStep = 0;
    },
    // 结束检测
    handleClose() {
      this.isOpen = false;
      this.handleReset();
      this.onClose && this.onClose();
    },
  },
  mounted() {
    const detect = new RTCDetect();
    const result = detect.getSystem();
    const stepNameList = ['camera', 'microphone', 'speaker', 'network'];
    // iOS系统和firefox浏览器，不包含扬声器检测
    if (result.browser.name === 'Firefox' || result.OS === 'iOS') {
      stepNameList.indexOf('speaker') >= 0 && stepNameList.splice(stepNameList.indexOf('speaker'), 1);
    }
    if (!this.hasNetworkDetect) {
      stepNameList.indexOf('network') >= 0 && stepNameList.splice(stepNameList.indexOf('network'), 1);
    }
    this.stepNameList = stepNameList;
  }
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
