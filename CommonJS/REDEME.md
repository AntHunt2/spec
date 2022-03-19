### 学习目标
### 1、模块化的好处
    1.1 模块化的基本概念
        模块化是指结果一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块可是组合、分解和更换的单元。
        编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并相互依赖的多个小模块
        优点：
            提高了代码的可复用性
            提高了代码的可维护性
            可以实现按需加载
            降低了沟通成本，极大的方便了各个模块之间的相互调用
        模块化规范：
            模块化规范就是对代码进行模块化的拆分与组合时需要遵守的规则，例如用什么样的语法格式来引用模块，在模块中使用什么样的语法格式向外暴露成员方法、变量、函数等等
    1.2 NodeJs中模块的分类
        内置模块(由nodejs官方提供的，例如fs、path、http等)
        自定义模块(用户自己创建的js)
        第三方模块(第三方开发出来的模块，使用时需要提前下载的)
        1.2.1 引入模块的三种方式
            a: const parme = require('fs') //引入node内置模块
            b: const url = require('./xxx.js') // 引入自定义模块
            c: const other = require('xx') // 引入其他模块
    1.3 模块作用域
        和函数作用域类似，在自定义模块中的变量、方法等成员，只能在当前模块内访问，这种模块级别的访问限制，叫做模块作用域。
        模块作用域的好处：防止全局变量污染
    1.4 如何向外暴露模块作用域中的成员变量、方法等
        1.4.1 module对象
            每个js自定义模块中都有一个module对象，它里面存储了当前模块的有关信息。如：id、path、exports、parent、filename、loaded、childen、paths。
            再也定义模块中，module.exports将模块内的成员共享出去，供外界使用
        1.4.3 exports对象
            由于modules.exports写起来复杂，为了简化共享成员，Node提供了exports对象，默认情况下，exports和modules.exports指向同一个对象，最终共享结果还是以modules.exports指向的对象为准。
        
    1.3 npm与包
        nodeJs中的第三方模块又叫做包。
        
    1.4 模块的加载机制
### 2、CommonJs规定了哪些内容
    2.1、每个模块内部，module变量代表了当前模块
    2.2、module是一个对象，它的export属性是对外的接口
    2.3、加载某个模块时，其实加载的是module.export属性，require()方法用于加载模块
### 3、NodeJs中模块化的三大分类是什么
### 4、熟练使用npm包管理
    如何查看是否全局安装？
        查看官网推荐
    
    -g 全局安装
    -D 开发环境使用
    -o 转换完成以后自动打开

    4.1、nrm 切换下载包的服务器
        sudo cnpm install nrm -g
        nrm ls // 查看有哪些下载地址
        nrm user cnpm // 切换下载地址为cnpm 淘宝镜像

    4.2、i5ting_toc  把md文档转换为html页面的小工具
        cnpm install -g i5ting_toc // 安装i5ting_toc
        i5ting_toc -f xxx.md -o

### 5、了解什么是规范的包结构
    5.1、包必须以单独的目录存在
    5.2、包的顶级目录下一定要包含packge.json
    5.3、package.json中必须要包含name、version、main这三个属性，分别代码包的名字、版本号、入口
### 6、开发属于自己的包
    6.1、新建itheima-tools文件夹，作为包的根目录
    6.2、在itheima-tools文件夹中，新建如下三个目录
        6.2.1、package.json (包管理配置文件)
        6.2.2、index.js (包的入口文件)
        6.2.3、README.md (包的说明文档)
    {
        "name": "itheima-tools", // 包名
        "version": "1.0.0", // 版本号
        "main": "index.js", // 入口文件
        "description": "时间、HTML转换", // 包的描述
        "keywords": [ // 包的搜索关键字
            "HTML",
            "xxx"
        ],
        "license": "ISC"
    }
    6.3、发布包
        6.3.1、登录npm ------ npm login
        6.3.2、发布自己的包 ------ npm publish
    6.4、删除已发布的包
        npm unpublish 包名 --foce
    注意：
        npm unpublish只能删除72小时以内发布的包
        npm unpublish删除包以后在24小时内不允许重复发布
        发布包的时候要慎用，尽量不要往npm上发布没有意义的包
### 7、了解模块的加载机制
    7.1、模块第一次加载后会被缓存。
        无论是内置模块、自定义模块、第三方模块，他们都会优先从缓存中加载，从而提高记载效率。
        内置模块的加载优先级最高
    当自定义模块加载，扩展名省略时，系统会按顺序自动补充 文件本身、.js、.json、.node，否则就报加载失败。
    当加载模块目录时：
        1、在加载目录时，会查找package.json文件，查找main属性，查找main属性指定当入口目录。
        2、当没有package.json文件时，默认指定index.js为入口。
        3、如果没有package.json，贼会打印错误消息，找不到该模块。