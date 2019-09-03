## 这是用electron+vue3.0构建的网易音乐桌面版

### clone

````js
git clone git@github.com:naihe138/NeteaseCloudMusic.git
````

### install

````js
// 为了安装electron-download模块成功
npm config set registry https://registry.npm.taobao.org

npm install --unsafe-perm=true --allow-root

// 如果需要权限则运行
sudo npm install --unsafe-perm=true --allow-root
// —unsafe-perm:默认为false,如果为true则使用root用户安装，默认为非root用户安装 —allow-root: 允许root

````

### dev

````js

npm run dev

npm run electron-dev

````

### pro

````js
npm run build

npm run electron-build
````