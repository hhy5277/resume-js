!function(){
    var view=document.querySelector('section#message')
    var model={
        init:function(){
            var APP_ID = 'tUYToXEYLQGuwyqQmfjYiDTA-gzGzoHsz'
            var APP_KEY = '4CjXAIao7GJAnxDJsp1Ssm58'
            AV.init({appId: APP_ID,appKey: APP_KEY})
        },
        fetch:function(){
            var query = new AV.Query('Messages');
            query.descending('createdAt');
     
     
     
     
     
     
     
            return query.find()
        },
        save:function(name,content){
            var Messages = AV.Object.extend('Messages');
            var messages = new Messages();
           return messages.save({
                name: name,
                content: content   
            })
        }
    }

    var controller={
        view:null,
        model:null,
        messageList:null,
        form:null,
        appendMessages:function(messages){
            messages.forEach((items)=>{
                let li=document.createElement('li')
                if(items.attributes.name !==''&& items.attributes.content!==''){
                    li.innerText= `${items.attributes.name}：${items.attributes.content}`
                    this.messageList.appendChild(li)
                }else if(items.attributes.name === ''&&items.attributes.content !==''){
                    li.innerText= `匿名用户：${items.attributes.content}`
                    this.messageList.appendChild(li)
                }
            })
        },
        saveMessages:function(Messages){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then((messages)=>{
                let li=document.createElement('li')
                if(messages.attributes.name !=='' && messages.attributes.content !==''){
                    li.innerText= `${messages.attributes.name}：${messages.attributes.content}`
                    $(this.messageList).prepend(li)
                }else if(messages.attributes.name === ''&&this.messages.attributes.content !==''){
                    li.innerText= `匿名用户：${messages.attributes.content}`
                    $(this.messageList).prepend(li)
                }
            })
        },
        loadMessages:function(){
            this.model.fetch().then(this.appendMessages)
        },
        bindEvents:function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessages()
                
        })
        },

        init:function(view,model){
            this.view=view
            this.model = model
            this.model.init()
            this.form = view.querySelector('form')
            this.messageList = document.querySelector('#messageList')
            this.loadMessages()
            this.bindEvents()
        },
    }
    controller.init(view,model)
}.call()