# VueStudy


### 启动后端服务器须知

启动服务器之前必须保证本地已经安装好mysql，如果没有安装mysql。
如果已安装并且启动mysql服务，先创建一个数据库（databases），
在项目中有一个vuestudy.sql文件将其导入到数据库里。导入成功后。即可启动服务器，否则无法启动后端服务器。

### 启动后端服务器
```js
  // 进入后端服务器，并且安装后端依赖包
  cd server && cnpm i 

  //全局安装pm2进程管理
  cnpm i pm2 -g

 //启动服务器三种方法
 npm start  //方法一

 DEBUG=server:* npm start   //方法二

 pm2 start pm2.json     //方法三，此方法需要全局安装pm2进程管理，依赖pm2.json文件的配置（推荐）
 
```

### 启动前端服务器
``` bash
# 安装前端依赖包
npm install

# 启动开发项目
npm run dev

# 打包生产环境
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


