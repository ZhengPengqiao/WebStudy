# Electron的hello world

## 建立第一个demo

* main.js

```javascript
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var window = null;

app.on('ready', function() {
  window = new BrowserWindow({width: 1280, height: 720});
  window.loadURL('https://www.baidu.com');
});
```

* package.json

```json
{
  "name"    : "demo",
  "version" : "0.1.0",
  "description": "A minimal Electron application",
  "main"    : "main.js",
  "scripts": {
    "start": "electron ."
  },
  "author": "GitHub",
  "license": "CC0-1.0"
}
```

## 解释

* 如果package.json文件没有scripts的话

```json
  "scripts": {
    "start": "electron ."
  },
```

* 可以直接electron .指令运行
* 要使用cnpm运行需要添加上script
