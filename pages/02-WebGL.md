# YUV2RGB

### GLSL ES语言中，通过关键字mat2、mat3、mat4声明矩阵，并提供内置函数mat2()、mat3()、mat4()构造矩阵
    * 从第一列开始，逐列指定元素的值。这里与，高数中习惯按照逐行书写矩阵不同
    * 只传入一个值，作为对角矩阵的对角线值
    * 传入多个向量


```html
r = y * 1.1643828125 + 1.59602734375 * v - 0.870787598;             
g = y * 1.1643828125 - 0.39176171875 * u - 0.81296875 * v + 0.52959375;                 
b = y * 1.1643828125 + 2.01723046875 * u - 1.081389160375;

[R , G, B] = [Y, U ,V ,1] * 
[
    1.1643828125,  1.1643828125 ,  1.1643828125

    1.59602734375, -0.39176171875, 2.01723046875

    0,             -0.81296875,    0

    -0.870787598,  0.52959375,     - 1.081389160375
]
```

```html
precision highp float;
varying lowp vec2 vTextureCoord;    // 接收纹理坐标
uniform sampler2D YTexture;     // y图片纹理数据取样器     
uniform sampler2D UTexture;     // U图片纹理数据取样器
uniform sampler2D VTexture;     // V图片纹理数据取样器
const mat4 YUV2RGB = mat4(
    1.1643828125, 0, 1.59602734375, -.87078515625,
    1.1643828125, -.39176171875, -.81296875, .52959375,
    1.1643828125, 2.017234375, 0, -1.081390625,
    0, 0, 0, 1
);  // YUV 转 RGB 的数学计算公式

void main(void) {
    gl_FragColor = vec4(
        texture2D(YTexture, vTextureCoord).x, 
        texture2D(UTexture, vTextureCoord).x, 
        texture2D(VTexture, vTextureCoord).x, 
        1) * YUV2RGB;
}
```