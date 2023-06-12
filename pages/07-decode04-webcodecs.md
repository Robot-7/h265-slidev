---
theme: default
---

### 解码视频流

#### WebCodecs解码
* WebCodecs API 为 web 开发者提供了对视频流的单个帧和音频数据块的底层访问能力。
1. 初始化VideoDecoder对象
 ```ts
    const handleError = (e: unknown): void => {
        console.error(e);
    };

    const handleOutput  = (frame: TexImageSource): void => {
        console.log(frame);
    };

    const videoDecoder = new (self as unknown as any).VideoDecoder({
            error: handleError,
            output: handleOutput,
    })
```
2.传入编解码器配置信息
 ```ts
         const config = {
                    codec: 'hev1.1.6.L93.90',
                    codedHeight: 1080,         //解码数据宽度
                    codedWidth: 606,        //解码数据高度
                    description: hvCcBox //
            };
        videoDecoder.configure(config);
```
3.传入帧数据信息
 ```ts
        const chunk =  new EncodedVideoChunk({
            timestamp: (1e6 * (targetData.cts ?? 0)) / 15360,                       //视频帧的时间戳
            duration: 33333.333333333336,
            type: true ? 'key' : 'delta',   //是否是关键帧
            data: targetData.data,           //视频数据
        });
        videoDecoder.decode(chunk);
```