# GUI
GUI 一款基于小程序规范的组件库  

简单、易用、可扩展

![image](https://github.com/Gensp/GUI/blob/c30e536ae8be5fcedab835020076122a06a888b1/qrcode.jpg)

使用微信扫一扫体验小程序组件示例

## 文档
前端小哥正在整理中...

## 使用之前
在开始使用 GUI 之前，您需了解 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档

## 如何使用
到 [GitHub](https://github.com/Gensp/GUI) 下载 GUI 的代码，将组件目录 component 拷贝到自己的项目中。然后按照如下的方式使用组件，以 Input 为例，其它组件在对应的文档页查看：

1、添加所需要的组件，在引用页面的 json 中配置：

```
"usingComponents": {
    "g-input": "../../component/input/input" //路径根据自己项目位置配置
} 
```

2、在 wxml 中使用组件：

```
<g-input placeholder='我可以自动获取焦点' focus bindchange="inChange" bindfocus="inFocus" bindblur="inBlur" bindconfirm="inConfirm" />

```

## 更新日志
 v1.0.0(2018-09-27)
 - 初始版本
 - 整理了一些常用基本组件，后续会慢慢再更新一些常用功能组件。
