# AudioContext
Web Audio API 提供了在 Web 上控制音频的一个非常有效通用的系统，允许开发者来自选音频源，对音频添加特效，使音频可视化，添加空间效果（如平移），等等。

## 一个简单而典型的 web audio 流程如下
* 创建音频上下文
* 在音频上下文里创建源 — 例如 audio标签, 振荡器，流
* 创建效果节点，例如混响、双二阶滤波器、平移、压缩
* 为音频选择一个目的地，例如你的系统扬声器
* 连接源到效果器，对目的地进行效果输出


<img  src="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/audio-context_.png?raw=true">