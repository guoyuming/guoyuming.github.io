---
title: "Replit: 从 IDE 到 Coding Agent 的 10 年 接力"
---

> 视频来源：
> 
> 
> *Marc Andreessen & Amjad Masad on “Good Enough” AI, AGI, and the End of Coding*
> 
> *https://www.youtube.com/watch?v=g-WeCOUYBrk*
> 

## 编程语言和软件工程，不断被简化的历史

75 年前，格雷斯·霍珀（Grace Hopper）发明了编译器，把机器语言简化。她认为 C 语言已经在用 “英语编程“了。

后来出现的 JavaScript 和 Python，离英语又更近了一些。基于编程语言之上，我们又发明了框架、库、SDK，将写一个程序变得进一步简单。

《人月神话》的作者 Fred Brooks 将软件开发的复杂，分为本质复杂度和偶然复杂度。偶然复杂度并非问题本身必须存在的复杂，而是我们用的工具、语言、框架等人为制造出来的复杂性，比如环境配置、语言语法冗长、分布式部署、编译流程。

随着行业的演进，我们看到了偶然复杂度被大量解决。成熟开发框架让我们很快就能搭建一个功能齐全的网站。不懂 TCP/IP 这样的底层网络知识，也能做出性好的网络服务器。云服务、开箱即用的框架、包管理器和组件库，组件化工具将软件工程简化。

## Replit 的过去

![图片来源：https://review.firstround.com/replits-path-to-product-market-fit/](/images/replit-从-ide-到-coding-agent-的-10-年-接力/image.png)

图片来源：https://review.firstround.com/replits-path-to-product-market-fit/

过去 10 年，Replit 在致力解决编程中的偶然复杂度。在有 LLM 之前， Replit 是一个 IDE，支持几十种编程语言，让用户在浏览器中编码、运行、调试、协作和分享。

Replit 把一切都放在浏览器中，简化了安装环境和依赖包、部署服务器的门槛，它没有成为专业开发者的主流 IDE，而吸引来的主要用户群体是学生（甚至是高中生）、教师、独立开发者、初学编程者。

Replit 早期更像是在做编程教育，但它有了现在 vibe coding 的一个典型用户群体，想做创作、作品、创业的非技术群体。过去，他们要先用 Replit 学编程或做原型，今天，他们直接从想法到部署上线。

Replit 的原名是 repl.it，REPL IT！REPL 是编程语言解释器的概念：Read → Eval → Print → Loop。它表示一个交互循环：

1. **Read** – 读取用户输入的代码
2. **Eval** – 将代码执行/求值
3. **Print** – 输出结果
4. **Loop** – 再次等待输入，循环往复

创始人 Amjad Masad 的洞察是：想学编程，不应该被组装工具而阻碍，而从写出 ”Hello World“ 到产品到真实上线，需要：搭建本地开发环境、注册AWS账户、配置数据库和虚拟机、创建整套部署流水线。

> Let’s say you’re learning how to drive a car, we don’t ask you to build the car or assemble it, right? But in programming, we do ask you to assemble the tools before you start.
> 

他提出的方案是：在浏览器里获得一个 REPL 来学习编码，移除所有入门障碍，让人们尽早体验编程的乐趣。

> But the idea is that you should be able to get a REPL in the browser and learn how to code, just remove all the barriers to entry and let people experience the joy of programming as early as possible.
> 

做完这一切之后，代码语法（Syntax），成了最新或者是最后的偶然复杂。Replit 创始人认为，解决偶然复杂的终局，是用户输入的应该是想法（Thoughts），不应该是语法（Syntax），用户直接用英语编程。这与 Lovable 创始人 Anton 想做 ”last piece of software“ 不谋而合。

## AI 之后的 Pivot

![image.png](/images/replit-从-ide-到-coding-agent-的-10-年-接力/image%201.png)

Replit 之前 10 年一直做 IDE，用户在浏览器中可以执行任何语言。现在，用户可以指定 Replit 用某个语言或 stack 做 App，比如 Python 做数据分析 app，用 Javascript 和 Postgres 做网页 app。Replit 会自动分类用户需求，选择最合适的 stack 来做 App，所以创始人建议用户不指定语言。

目前很多 Agent 产品让用户选择模型，Replit 虽然产品设计工业化，与它做 IDE 起家不无原因，但它仅在需要复杂的地方暴露复杂给用户，比如集成和收费资源使用率，而用什么模型、用什么编程语言，它考虑到大众用户缺少选择能力，在后台自己做了路由，给用户简单和吸引人输入的 prompt box。

![image.png](/images/replit-从-ide-到-coding-agent-的-10-年-接力/image%202.png)

创始人说：非技术人群和专业程序员，使用 Replit 路径是一样，从 Prompt box 开始。

看产品主路径，功能和体验还是留给了主要的非技术用户群体，只有左侧的对话框和右侧的预览。高级配置、工具使用、集成（比如 Github, Emacs）、日志，代码文件库，都收纳进了二级入口。

![image.png](/images/replit-从-ide-到-coding-agent-的-10-年-接力/image%203.png)

Agent 生成了代码文件，从文件库，能同时打开多个文件，修改代码、保存、。这是 Replit 老本行 - 浏览器 IDE 的部分。

Replit 过去的 IDE 和现在的 Agent 结合，产品设计产生了转变。在 Pivot 到 coding agent 之后，创始人提到：他们发现在 IDE 中写代码的“程序员”，从人类用户变成了 Agent。

![image.png](/images/replit-从-ide-到-coding-agent-的-10-年-接力/image%204.png)

Replit 在模型之外的创新，是“多 agent 下的结果验证循环”。当一个 coding agent 编写代码 20 分钟，testing agent 会启动，在浏览器中运营和测试 coding agent 编写的代码。如果发现 bug，bug reporting 合并到前 20 分钟的任务工作总结，作为新的 agent 任务提示词。

创始人将这种模式称为 ”接力赛（Relay Race）“，上一批 agent 任务结果，作为上下文，提供给下一批 agent 任务。

**商业化如何融入产品特性**

Replit 有两个商业化相关设计，很好体现了产品商业价值和用户价值的一体两面。

首先是，在用户主路径加上了 Plan 环节。这个环节不消耗 AI 积分。当前 Agent 产品对用户和公司，最大成本都是 AI token 消耗。Replit 在 Plan 环节不消耗积分，只要不开始 App 设计和代码任务，用户可以免费开启多个 ap 的 Plan 环节。

在 Plan 环节，如同 Deep Research，Replit agent 会将 App 功能和设计点列出，用户可以确认和修改，提高 Agent 执行的任务与用户需求匹配度。

用户也可以选择是”先出原型设计不做功能“，还是”设计功能一起做“。这也符合软件工程的 SOP，设计先行，确认设计合理之后再进研发。

因为设计原型和做功能，都需要 Agent 开始工作，消耗 AI token，这个关键设计对用户价值是：

1. 降低了用户 AI 积分消耗，尤其是减少初始几轮 Agent 任务因为意图识别不准，而带来任务失败的积分消耗
2. 原型设计的交付，比代码交付耗时更短，让用户更快看到交付结果，减少耐心损耗，加快 Aha moment 到来

![image.png](/images/replit-从-ide-到-coding-agent-的-10-年-接力/image%205.png)

Agent 类产品还处于创新迅速向大众普及的阶段，因为新兴用户的新行为，传统 SaaS 指标如留存、频次和转化率，可能面临失效。Agent 公司都需要找到能够指引产品迭代的有效指标和口径。

目前一个共识是，要从真实用户的真实任务的数据中，衡量用户是否获得成功。AI app builder 类产品，用户获得成功的一个行为是 “做出了 App 并发布到线上”，因此都会看 App 发布数和转化率。

> and we measure that in real tasks from real users. So we're not doing benchmarking. We're actually doing AB tests and we're looking at the data that how users are successful or not. For us, the the absolute sign of success is you made an app and you published it. Because when you publish it, you're paying extra money. You're saying this app is economically useful. I'm going to publish it. So that's as clear-cut as possible.
> 

但用 Replit，用户发布 App 到线上，需要付费（升级到 $25/月的 Replit Core 套餐）。只有当用户相信自己的 App 能够有经济收入时，用户才会为 “发布 App 到线上” 付费。

这个将付费点设计在 “发布 App 到线上” 这一特性，Replit 将用户价值和商业价值统合在一起。