---
theme: default
---

### 空间冗余

帧内预测通过利用已经编码的相邻像素的值来预测待编码的像素值，最后达到减少空间冗余的目的

具体预测方法
整体思路是利用一帧图像中已经编码部分来预测尚未编码部分图像，实际值和预测值之间的差别叫做残差。实际上真正编码的是残差数据，因为残差一般比较小，所以对残差编码比对实际数据编码会小很多
同个宏块的像素值可以采用同一种预测模式

其中亮度块为 16 x 16，色度块为 8 x 8，一个亮度块y对应2个色度块（uv），帧内预测中亮度块和色度块是分开独立进行预测的

![img](https://pic3.zhimg.com/80/v2-ab69474933318a4227d3acead8ba1d5a_720w.webp "img")
