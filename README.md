rtc-device-detector-vue2 是腾讯云实时音视频 Web 端设备及网络检测公共组件, 
使用 [VUE](https://cn.vuejs.org/) 框架，依托 [trtc-js-sdk](https://www.npmjs.com/package/trtc-js-sdk) 以及 [rtc-detect](https://www.npmjs.com/package/rtc-detect) 完成公共组件开发。rtc-device-detector-vue2 支持网络检测可选，支持中英文两种语言，同时提供 [github 源码](https://github.com/majiameng/rtc-device-detector-vue2) 以供参考和使用。

![img](https://sdk-web-1252463788.cos.ap-hongkong.myqcloud.com/trtc/webrtc/assets/rtc-device-detector.jpeg)

### 安装

```bash
yarn add rtc-device-detector-vue2
or
npm install rtc-device-detector-vue2
```

### 使用

```vue
<template>
  <deviceDetector
    :hasNetworkDetect=true
    :onClose="handleClose"
    :networkDetectInfo="networkDetectInfo">
  </deviceDetector>
</template>

<script>
// rtc设备检测
import DeviceDetector from 'rtc-device-detector-vue2';
import 'rtc-device-detector-vue2/dist/index.css';
Vue.use(DeviceDetector)

export default {
  name: 'MyDeviceDetector',
  data() {
    return {
      roomId: 99999999,
      userSig: {},
      networkDetectInfo: {},
      visible: false,
    }
  },
  components: {},
  created() {},
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      // 获取用户签名
      this.userSig = res
      let uplinkUserId = "";//上行用户id
      let uplinkUserSig = "";//上行用户sig
      let downlinkUserId = "";//下行用户id
      let downlinkUserSig = "";//下行用户sig

      const roomId = this.roomId;
      const sdkappid = 'sdkappid';//SDK Appid
      //检测视频参数
      const networkDetectInfo = {
        sdkAppId: sdkappid,
        roomId,
        uplinkUserInfo: {
          uplinkUserId,
          uplinkUserSig,
        },
        downlinkUserInfo: {
          downlinkUserId,
          downlinkUserSig,
        },
      };
      this.networkDetectInfo = networkDetectInfo;
      console.log("检测视频参数：")
      console.log(this.networkDetectInfo )
    },
    handleClose() {
      this.visible = false;
    }
  },
}

</script>

```

### 参数

| 参数              | 类型     | 说明                                                         |
| :---------------- | :------- | :----------------------------------------------------------- |
| visible           | Boolean  | 控制是否展示设备检测弹窗                                     |
| onClose           | Function | 设备检测弹窗关闭的回调函数                                   |
| lang              | String   | 'zh-CN'\|'en', 用来指定设备检测语言类型，默认为'zh-CN'（中文） |
| audioUrl          | String   | 扬声器检测时播放的音频地址，默认为腾讯云实时音视频介绍语音。 |
| hasNetworkDetect  | Boolean  | 默认值为true, 是否包含网络检测                               |
| networkDetectInfo | Object   | 网络检测进房参数，如hasNetworkDetect为false，则不需要传入networkDetectInfo |

#### 网络检测参数说明

| 属性                                               | 类型             | 说明                                                         |
| :------------------------------------------------- | :--------------- | :----------------------------------------------------------- |
| networkDetectInfo.sdkAppId                         | Number           | 设备及网络检测 sdkAppId ，涉及进房推流，建议申请单独的 sdkAppId 用于设备及网络检测 |
| networkDetectInfo.roomId                           | Number \| String | 网络检测进房房间号                                           |
| networkDetectInfo.uplinkUserInfo.uplinkUserId      | String           | 设备及网络检测上行 useId                                     |
| networkDetectInfo.uplinkUserInfo.uplinkUserSig     | String           | 设备及网络检测上行 userSig                                   |
| networkDetectInfo.downlinkUserInfo.downlinkUserId  | String           | 设备及网络检测下行 userId，注意务必与上行 userId 不相同      |
| networkDetectInfo.downlinkUserInfo.downlinkUserSig | String           | 设备及网络检测下行 userSig                                   |

### 网络检测说明

rtc-device-detector-vue2 使用两个不同用户进入同一个 TRTC 房间的方式检测当前用户到 TRTC 后台服务器之间的网络延时和网络质量等级，因此需要使用方传入 sdkAppId， roomId, userId 以及 userSig 信息。

详细检测流程请参考：[检测通话前的网络质量](https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/tutorial-24-advanced-network-quality.html)。

检测过程将产生少量的[基础服务费用](https://cloud.tencent.com/document/product/647/17157#.E5.9F.BA.E7.A1.80.E6.9C.8D.E5.8A.A1)。默认以 640*480 的分辨率推流。

+ networkDetectInfo.sdkAppId

  rtc-device-detector-vue2 在网络检测阶段需要进房推拉流确认用户上下行网络质量，如使用网络检测，建议在 [实时音视频控制台/应用管理](https://console.cloud.tencent.com/trtc/app) 中为网络检测申请新的 sdkAppId，避免和线上业务发生用户被踢，其他用户进房等情况。
  

+ networkDetectInfo.roomId

  roomId 为 Number类型时，取值要求为 [1, 4294967294] 的整数;
  roomId 为 String 类型时，限制长度为64字节，且仅支持以下范围的字符集：

  > 大小写英文字母（a-zA-Z）;
  >
  > 数字（0-9）; 
  >
  > 空格、"!"、"#"、"$"、"%"、"&"、"("、")"、"+"、"-"、":"、";"、"<"、"="、"."、">"、"?"、"@"、"["、"]"、"^"、"_"、" {"、"}"、"|"、"~"、",";


+ networkDetectInfo.uplinkUserInfo.uplinkUserId / networkDetectInfo.downlinkUserInfo.downlinkUserId

  请务必保持`networkDetectInfo.uplinkUserInfo.uplinkUserId` 与 `networkDetectInfo.downlinkUserInfo.downlinkUserId` 的值不一致，且尽可能相关联。 

  举例：要对 userId 为 '123' 的用户进行网络检测，则 `networkDetectInfo.uplinkUserInfo.uplinkUserId` 为 '123_uplink', `networkDetectInfo.downlinkUserInfo.downlinkUserId` 为 '123_downlink'。 

  注意：建议限制长度为32字节，只允许包含大小写英文字母(a-zA-Z)、数字(0-9)及下划线和连词符。



+ networkDetectInfo.uplinkUserInfo.uplinkUserSig / networkDetectInfo.downlinkUserInfo.downlinkUserSig

  获取 userSig 的方式请参考 [Usersig相关问题](https://cloud.tencent.com/document/product/647/17275#Server)。

  建议签名过期时间不要设置的过短，造成用户在网络检测时进房失败，同时也不要设置的过长，防止被黑产利用。请根据业务需要酌情处理。
