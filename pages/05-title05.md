---
theme: default
title: YUV
---

### YUV

YUV 4:4:4采样，每1个Y对应1组UV分量,一个YUV占 8 + 8 + 8 = 24bits 3个字节  (YUV444)
YUV 4:2:2采样，每2个Y共用1组UV分量,一个YUV占 8 + 8 / 2 + 8 / 2 = 16bits 2个字节 (YUV422)
YUV 4:2:0采样，每4个Y共用1组UV分量,一个YUV占 8 + 8 / 4  + 8 / 4  = 12bits 1.5个字节 (YUV420P)

YUV420P 主流的采样方式

<v-clicks>

```ts
假设图像像素为：
[Y1 U1 V1]、[Y2 U2 V2]、 [Y3 U3 V3]、 [Y4 U4 V4]
[Y5 U5 V5]、[Y6 U6 V6]、 [Y7 U7 V7] 、[Y8 U8 V8]
其中，每采样过一个像素点，都会采样其 Y 分量，而 U、V 分量每间隔一行按照 2 : 1 进行采样
```

```ts
采样的码流为：
Y1 U1 Y2 Y3 U3 Y4 
Y5 V5 Y6 Y7 V7 Y8
```

```ts
[Y1 U1 V5]、[Y2 U1 V5]、[Y3 U3 V7]、[Y4 U3 V7]
[Y5 U1 V5]、[Y6 U1 V5]、[Y7 U3 V7]、[Y8 U3 V7]
```

</v-clicks>

<!--
Y1 U1 Y2 Y3 U3 Y4
Y5 V5 Y6 Y7 V7 Y8
-->
