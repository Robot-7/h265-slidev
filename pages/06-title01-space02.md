---
theme: default
---

### 空间冗余

对于4*4的宏块，帧内预测模式总共有 9 个

1.Vertical 模式 Vertical 模式就是指，当前编码亮度块的每一列的像素值，都是复制上边已经编码块的最下面那一行的对应位置的像素值。
![img](https://pic1.zhimg.com/80/v2-2b048867f2dae7671fb62667fbf55f28_720w.webp "img")

2.Horizontal 模式 Horizontal 模式就是指，当前编码亮度块的每一行的像素值，都是复制左边已经编码块的最右边那一列的对应位置的像素值
![img](https://pic3.zhimg.com/80/v2-090194f289850dd842a81b3316335ade_720w.webp "img")