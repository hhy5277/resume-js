!function(){
    var view ={
        $skills: $('#siteSkills .skillItem wired-item'),
        $skillContent: $('#siteSkills .skillContents')
    }
    var controller={
        view:null,
        $lastContent: null,
        $currentContent: null,
        index:null,
        init: function(view){
            this.view = view
            this.bindEvent()
        },
        bindEvent:function(){
            for(let i=0;i<this.view.$skills.length;i++){
                $(this.view.$skills[i]).on('click',(e,)=>{
                    this.index = $(e.currentTarget).index()
                    this.$lastContent = $(this.view.$skillContent[this.view.$skillContent.length-1])
                    this.$currentContent = $(this.view.$skillContent[this.index])
            
                    if(this.index===0){
                        $(this.view.$skillContent[this.index]).show()
                        this.$lastContent.hide()
                        $(this.view.$skillContent[this.index]).addClass('active').siblings().removeClass('active')
                    }else{
                        $(this.view.$skillContent[this.index]).show()
                        this.$currentContent.prev().hide()
                        this.$currentContent.addClass('active').siblings().removeClass('active')       
                    }
                })
            }
        }
    }

    controller.init(view)

}.call()

