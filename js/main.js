
$(function(){

    function init(){
        shopSigns();
        qrClose();
        searchInput();
        slide(".slide-up .slide-main");
        slide(".slide-down .slide-main");
    }
    function shopSigns(){
        var search = $("#shop-signs .search");
        var tab = search.find(".search-tab li");
        tab.each(function(){
            var id = this.className;
            $(this).click(function(){
                search.attr("id",id);
            })
        })
    }

    function qrClose(){
        $("#shop-signs .close").click(function(){
            $(this).parent().hide();
        })
    }

    function searchInput(){
        $("#q").focus(function () {
            $(".search-value").hide();
        }).blur(function(){
            $(".search-value").show();
        })
    }

    function slide(obj){
        var obj =$(obj);
        var len = obj.find("li").length;
        var liw = obj.find("li").width();
        var cur = parseInt(obj.css("left"));
        function run(){
            if(-cur>=(len-1)*liw){
                cur = 0;
            }else{
                cur -= liw;
            }
            obj.animate({left:cur}) ;
        }
        obj.parent().find(".prev").click(function(){
            if(cur>=0){
                cur = -liw*len-3;
            }else{
                cur += liw;
            }
            obj.animate({left:cur});
        })
        obj.parent().find(".next").click(function(){
            cur -= liw;
            obj.animate({left:cur});
        })
        obj.parent().find(".slide-point li").each(function(i,ele){
            $(ele).click(function(){
                if(cur == -liw*i) return;
                $(ele).siblings().attr("class","");
                $(ele).addClass("current");
                cur = -liw*i;
                obj.animate({left:cur});
            })
        })

        var timer = setInterval(run,4000);
        obj.parent().hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(run,4000);
        })
    }

init();
})

