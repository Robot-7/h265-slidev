---
theme: default
---

### 解封装视频

视频封装格式

MP4视频格式：

MP4 文件是由一系列 box（盒子）组成的，每个 box 包含了不同类型的信息，如媒体数据、元数据、索引信息等。下面是 MP4 文件中常见的一些 box 类型及其作用：

* ftyp（File Type Box）：指定 MP4 文件的类型和版本号等信息。

* moov（Movie Box）：包含了媒体文件的元数据信息，如视频和音频的描述信息、时间戳、片段的位置、持续时间等。

* mvhd（Movie Header Box）：描述了整个媒体文件的基本信息，如创建时间、修改时间、时间戳信息等。

* trak（Track Box）：包含了一条轨道的信息，如音频或视频轨道的编码格式、时间戳、持续时间等。

* tkhd（Track Header Box）：描述了一条轨道的基本信息，如轨道类型、轨道编码格式等。

* mdia（Media Box）：包含了轨道的媒体数据和媒体信息，如媒体类型、编码格式、样本率等。

* mdhd（Media Header Box）：描述了轨道的媒体基本信息，如媒体创建时间、修改时间、时间戳信息等。

* minf（Media Information Box）：包含了轨道媒体数据的详细信息，如视频或音频帧的大小、码率、压缩格式等。

* stbl（Sample Table Box）：包含了样本数据的索引信息，如关键帧位置、样本大小、样本持续时间等。

* moof（Movie Fragment Box）：用于分片传输的 MP4 文件中，包含了一个或多个片段的信息。

* mdat（Media Data Box）：包含了实际的媒体数据，如音频和视频帧。

总之，MP4 文件中的 box 组成了一个层次结构，每个 box 负责存储不同类型的信息，这些 box 之间相互关联，共同组成了一个完整的 MP4 文件。