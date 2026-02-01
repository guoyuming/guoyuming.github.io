---
title: "如何定制Hexo博客菜单栏"
date: 2017-01-29T09:39:06+08:00
category: "making"
---

用Hexo搭建，托管在github，优雅简单地维护自己的博客。大家在Hexo上开发了不少主题，Next主题人气很高。它简洁不失贫乏，优雅不失灵动。如果你想行云流水般书写，让读者从归档和主页按时间轴阅览，搞定标配就足够。但如果你觉得读者从菜单点击分类项目，再进到选择类别页面，多了一步，想定制自己的菜单栏，用户点击某项直接进入分类，你要激活标配之外的功能：菜单栏显示自建分类，点击直接进入该类别文章。

[效果示范](https://guoyuming.github.io/2017/01/29/NewyearResolution@essays/)

上例中，点击"随笔"或"行动"，直接进入相应类别文章目录；点击每篇文章标题下方"归类于XX"也直接进入该分类目录。

怎么做到，[官方文档](http://theme-next.iissnan.com)无说明。这里结合[碎瞳Artin](https://www.zhihu.com/question/33324071)的分享，加上自己半天的折腾，总结出实现方法，和可以避免的坑。前置操作需要你已经搭建好了hexo博客，并熟悉如何布置next主题。以下操作在MacOS＋Next主题环境下实现。

首先，打开根目录下的scaffolds/post.md文件，添加categories参数。

```
title: "title" 
date: {date}   
tags:  
categories: # 添加此字段
```

此文件用以给每篇文章配置共同参数，添加之后每次新写文章，有机会给每篇文章规定categories，注意，此时文章分类赋值用英文，不然会碰到一个大坑，稍后解释。

```
title: '如何定制Hexo博客菜单栏'  
date: 2017-01-29 09:39:06  
categories: making
```

新文章加了分类之后，将主页菜单栏选项和分类目录连接，需要进入主题包下的配置文件（_config.yml），因为它决定了菜单如何呈现。该文件中找到menu参数，未加"#"的条目会陈列在菜单栏。其中essays和making是非默认选项，自己手动加上，并添加路径。

```
menu:   
  home: /   
  #categories: /categories   
  #about: /about   
  archives: /archives   
  #tags: /tags   
  #sitemap: /sitemap.xml  
  #commonweal: /404.html  
  essays: /categories/essays  
  making: /categories/making
```

比如making: /categories/making，直观表现是，点击菜单栏making选项，按照categories／making的路径读取文件，也就进入making分类页面。因为yml文件不能处理中文，如果之前单个文章归类名字用中文，这里making改成行动，会出现错误提示"invalid header"。

到此时配置已经基本结束，效果呈现：https://guoyuming.github.io/categories/essays/

你点击"随笔"，进入essays分类目录，因为yml文件无法输入中文。其实它们是同个路径。
