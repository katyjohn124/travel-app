# My Project:仿去哪儿网webapp 技术栈：Vue+webpack+vue-router+vuex

- 三个大组件：首页、城市选择详情页、详情页

- 开发方式是用模块化：一个大组件里会有多个子组件，由这些子组件来'填充'大组件，这样方便后续维护:

- city
    - city.vue
    - components
        - city-header.vue
        - etc...
    
## 做项目过程中主要遇到的问题：

- Git的坑，相信很多小白新手或者有一些经验的人遇到git棘手的问题时也不知道如何解决，比如这个：

1. 当你对github仓库拉取请求或提交时，如果报这样的错OpenSSL SSL_read: Connection was reset, errno 10054....，你可能会以为是网络的问题、防火墙没设置好、没科学上网等等；我当时也以为是这样，于是就去防火墙那设置允许gitxxx，结果重启后还是不行，然后多次开关网络也不行。直到我搜到这篇文章，虽然写得简洁，但是句句都是干货：

- [git报错-ssl](https://blog.csdn.net/weixin_40908748/article/details/122367878)

2. 第二个问题就是还是有点小粗心，我觉得编程还是很注意细节的，往往你解决半天的问题只是因为细节上的疏忽。因此一定要学会排错。



