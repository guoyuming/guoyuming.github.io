---
title: "用 AI 实际经验"
---

# 日常生产力提升

- 市场和产品调研：Gemini Pro Deep Research，验证自己假设、大量阅读场景下，更快速找到所需网页
- 工作流打通：Gemini Pro Deep Research  生态位很好，集成/打通了 Google 文档、表格和 Drive 云盘里的所有数据和工作流，项目文档、会议纪要、个人偏好，全部在 Google；而 ChatGPT 需要无限 copy paste 来工作，打断了心流。类似飞书的 Aily 在字节内部生产力工具中生态位好，但没有 Deep Research
- 内容速读和分析：特定领域、明确资料、高信息密度的信源研究，NotebookLM，灌入知识库，利用 RAG 来做信息检索和分析
    - 结合方法：Deep Research 检索而来的信源，放到 NotebookLM 里面专门抽取内容
- 非标的、低频需求：简历用 Cursor 写的、Chatbot 做数据格式转换

# 新工具尝试

Dify 搭建工作流：

- 复刻 Deep Research，接入了 AI 搜索和 LLM API，Loop 循环，复现出初级 Deep Research
- 电商客服机器人：连静态客服知识库、静态店铺政策知识库、动态商品数据 API，实现问答机器人

Cherry Studio, Claude Desktop 做内容、知识库检索：

- 连接 Notion MCP，读 Notion 的文章，查找内容
- 连接本地文件 MCP，读本地文件夹，查找内容

Prompt 甚至工程优化，还是很重要，单独一句话，大模型出现超级多幻想；另外还得工程优化降低成本，不管是 Notion 还是本地文件，没有上下文管理和 embeding，一次查询就注入大量上下文，token 暴增

最早的 GPTs，那时候工具调用是 Function call，在 ChatGPT 里面连了几个 API，用自然语言交互，聊天框返回：

- 查询店铺商品
- 查询电影海报
- 查询名人名言