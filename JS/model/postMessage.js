var APP_ID = 'tUYToXEYLQGuwyqQmfjYiDTA-gzGzoHsz';
var APP_KEY = '4CjXAIao7GJAnxDJsp1Ssm58';
// 初始化AV
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

postMessageForm.addEventListener('submit',function(e){
    e.preventDefault()
    var content = document.querySelector('input[name=content]').value
    // console.dir(content)
    var name = document.querySelector('input[name=name]').value
    // console.log(name)
    
    // 存入数据
    var Messages = AV.Object.extend('Messages');
    var messages = new Messages();
    messages.save({
        name: name,
        content: content   
    }).then((object)=>{
        let li=document.createElement('li')
        li.innerText= `${object.attributes.name}：${object.attributes.content}`
        console.log(li.innerText)
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        document.querySelector('input[name=content]').value = ''

    })
})


//获取数据到页面

var query = new AV.Query('Messages');
query.find().then(function (messages) {
    // console.log(messages)
    let array = messages.map((items)=>{return items.attributes})
    console.log(array)
    array.forEach((items)=>{
        let li=document.createElement('li')
        li.innerText= `${items.name}：${items.content}`
        // console.log(li.innerText)
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })


}).then(function(messages) {
// 更新成功
}, function (error) {
// 异常处理
})