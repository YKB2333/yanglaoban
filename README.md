# Yanglao

###  项目名称：
洋老板 （移动端APP）

## 技术栈

### 前端

- React
- React-Router
- Redux
- Create-React-App
- axios
- antd
- git
- webpack
- rem布局
- Swiper
- MUI
- Scss 

### 后端

- Nodejs
- Koa
- MongoDB


## 项目分工

      * 商品列表页
        - 用axios请求数据，渲染页面
        - 懒加载
        - 商品分类
        - 编程式导航带参跳转详情页
      
      * 商品详情页
        - 商品分类渲染
        - 加入购物车
        - 价格排序
        
      * 首页
        - axios请求渲染数据
        - 点击跳转详情页
        - 滚动条高度记录
        - 轮播图
        - 分流请求数据
        
      * 购物车页
        - 根据react-redux公共仓库渲染列
        - 商品多选单选
        - 购物车数量显示
        - 商品删除
        - 商品价格合计
        
      * 用户页面
        - 用户查看权限认证
        - 用户登录
        - 登录跳转
        - 登录逻辑
    
    
   ### 项目结构
    
|-- undefined
    |-- .gitignore
    |-- mddir.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- config
    |   |-- env.js
    |   |-- paths.js
    |   |-- webpack.config.js
    |   |-- webpackDevServer.config.js
    |   |-- jest
    |       |-- cssTransform.js
    |       |-- fileTransform.js
    |-- kuayu
    |   |-- src
    |       |-- package-lock.json
    |       |-- server.js
    |       |-- api
    |           |-- chunqiu.json
    |           |-- chunqiu_home.json
    |           |-- find.json
    |           |-- list.json
    |           |-- orderForm.json
    |           |-- travel.json
    |           |-- user.json
    |           |-- db
    |           |   |-- index.js
    |           |-- routers
    |           |   |-- Find_ykb.js
    |           |   |-- goodslist.js
    |           |   |-- index.js
    |           |   |-- List.js
    |           |   |-- login.js
    |           |   |-- orderForm.js
    |           |   |-- registry.js
    |           |   |-- tokenverify.js
    |           |   |-- userlist_login.js
    |           |-- utils
    |               |-- token.js
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- manifest.json
    |-- scripts
    |   |-- build.js
    |   |-- start.js
    |   |-- test.js
    |-- src
        |-- App.js
        |-- App.test.js
        |-- index.css
        |-- index.js
        |-- serviceWorker.js
        |-- actions
        |   |-- cartAction.js
        |   |-- commonAction.js
        |   |-- loginAction.js
        |-- assets
        |   |-- image
        |   |   |-- agree.png
        |   |   |-- au.png
        |   |   |-- car01.png
        |   |   |-- Cart_1.png
        |   |   |-- cart_2.jpg
        |   |   |-- headmeg.png
        |   |   |-- huiyuan01.png
        |   |   |-- index-line11.png
        |   |   |-- index-line22.png
        |   |   |-- index-line33.png
        |   |   |-- index-line44.png
        |   |   |-- miaosha01.png
        |   |   |-- mvp.png
        |   |   |-- vip01.png
        |   |   |-- VIP@2x.png
        |   |   |-- ylogin.png
        |   |   |-- Yperson.jpg
        |   |   |-- yzm.png
        |   |   |-- zixun01.png
        |   |   |-- zuxun02.png
        |   |-- lib
        |       |-- rem.js
        |-- components
        |   |-- Footer.js
        |   |-- Header_ykb.js
        |   |-- ListClassLeft.js
        |   |-- ListClassRight.js
        |   |-- swiper.js
        |   |-- Xbanner.js
        |   |-- Xbanner2.js
        |   |-- Xiconlist.js
        |   |-- Xmiaosha.js
        |   |-- Xnavlist.js
        |   |-- Xnavlist2.js
        |   |-- Xproduct01.js
        |   |-- Xproduct02.js
        |   |-- Xproduct03.js
        |   |-- Xvip.js
        |-- hoc
        |   |-- withAxios.js
        |-- pages
        |   |-- Cart
        |   |   |-- Cart.js
        |   |   |-- Cart.scss
        |   |-- Detail
        |   |   |-- Detail.scss
        |   |   |-- index.js
        |   |-- Home
        |   |   |-- Home.js
        |   |   |-- Home.scss
        |   |-- List
        |   |   |-- index.js
        |   |   |-- List.scss
        |   |-- ListClass
        |   |   |-- index.js
        |   |   |-- ListClass.scss
        |   |-- Login
        |   |   |-- index.js
        |   |   |-- Login.scss
        |   |-- PersonCenter
        |       |-- index.js
        |       |-- PersonCenter.scss
        |-- reducers
        |   |-- cartReducer.js
        |   |-- commonReducer.js
        |   |-- index.js
        |   |-- loginReducer.js
        |-- saga
        |   |-- index.js
        |-- sass
        |   |-- base.scss
        |   |-- Footer.scss
        |   |-- Header_ykb.scss
        |-- server
        |   |-- .gitignore
        |   |-- 19proxy.js
        |   |-- package-lock.json
        |   |-- package.json
        |-- store
            |-- index.js
            
            
   ## 演示地址 
      * http://47.98.140.212:1811/
      
   * 演示账号
         18188888888
         
   * 演示密码
          123456
      
      
 ## 商品后台管理系统
 
       * 商品管理 
         - 商品分类数据渲染
         
        * 购物车
          - 商品数据渲染、删除商品
         
        * 用户管理
          - 用户权限
          - 用户列表渲染
          
   ## 演示地址
       
       
   ### 演示账号
           * 管理员 ：
               账号：admin
               密码：admin
               
           * 游客 ：
                
