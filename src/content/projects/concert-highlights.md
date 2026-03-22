---
title: "ConcertHighlights"
description: "拖拽视频文件到 App 里，调用 Gemini API 自动分析视频并剪辑合并成高光时刻。"
cover: "/images/projects/concert-highlights/preview.webp"
urlLabel: "MacOS app"
order: 5
tags: ["MacOS app", "Claude Code", "Video editor"]
images:
  - "/images/projects/concert-highlights/detail-1.png"
---

某天从演唱会拍了十几个视频回来，想剪成一个高光时刻。下载剪映 MacOS 版本，下载、注册、Onboarding、导入素材、学习用音频和视频轨道…. 发现 UI 不好看、用起来不赏心悦目、很难用。

业界第一的剪辑工具竟然是这般难用，或者它是给专业创作者的工具。

在线 AI 剪辑工具也有，十几个拍摄的视频素材，加起来也有很多 G 了，不想为了一次性需求上传那么多文件和等待。

XCode 从来没有用过的我，于是打开 Claude Code，从 Claude Code 教我用 XCode GUI 创建项目开始，一步一步做出了这个 MacOS 本地 App。拖拽视频文件到 App 里，它调用 Gemini API 自动分析视频语义化内容并给出质量评估，然后自动将多个视频素材剪辑后合并成一个高光时刻。
