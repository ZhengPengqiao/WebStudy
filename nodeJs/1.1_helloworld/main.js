//--------------------------------------------------------------------------
// 引入 events 模块
var events = require('events');
console.log("回调时间开始!");
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});
// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("回调时间结束!\n");
//==========================================================================


//--------------------------------------------------------------------------
// 引入 fs 模块
var fs = require("fs");
// 文件操作
// 阻塞读文件
console.log("阻塞读文件开始!");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("阻塞读文件结束!\n");

// 异步读文件
console.log("异步读文件开始!");
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log("异步读文件结束的打印："+data.toString()+"\n");
});
console.log("异步读文件结束!\n");
//==========================================================================


//--------------------------------------------------------------------------
// 定时使用
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    console.log("定时使用的打印："+'some_event occured.'); 
}); 

//我们通过 setTimeout 在1000毫秒以后向 event 对象发送事件 some_event
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 
//==========================================================================


//--------------------------------------------------------------------------
// 回调事件
var events = require('events'); 
var emitter = new events.EventEmitter(); 

emitter.on('someEvent', function(arg1, arg2) { 
    console.log('回调事件：listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
 console.log('回调事件：listener2', arg1, arg2); 
}); 

emitter.emit('someEvent', 'byvoid', 1991); 
//==========================================================================


//--------------------------------------------------------------------------
// buffer使用
buf = new Buffer(256);
len = buf.write("www.w3cschool.cn");
console.log("写入字节数 : "+  len);
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
//==========================================================================


//--------------------------------------------------------------------------
var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序执行完毕");
//==========================================================================


//--------------------------------------------------------------------------
// 使用模块，模块名：hellomodule
var Hellomodule = require('./hellomodule'); 
hellom = new Hellomodule(); 
hellom.setName('hellomodule test'); 
hellom.sayHello(); 
//==========================================================================

