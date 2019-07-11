(function(){
    var bg_color = document.querySelectorAll('.bg_color');
        //console.log(bg_color);
        for (var l of bg_color) {
            l.onclick = function() {
                // l.classname+="bgColor";
                let l = this;
                l.classList.toggle("bgColor");
                for (var k of bg_color) {
                    if(k!=l){
                        k.classList.remove("bgColor");
                    }
                }
            }
        }
})()
(function(){
    var tabs=document.querySelectorAll("div.daohang>ul.fenlei>li>div>[data-click=tab]");
        var zIndex=10;
        //遍历tabs中每个按钮
        for(var tab of tabs){
          //每遍历一个按钮，就要为其绑定单击事件
          tab.onclick=function(){
            var tab=this;//<a>
            //3.查找要修改的元素
            //获得当前a对应div的id
            var id=tab.getAttribute("data-div");
            //按id查找当前a对应的div
            var div=document.getElementById(id);
            //4.修改元素
            //修改当前a对应div的z-index属性
            div.style.zIndex=zIndex;
            //修改之后，必须将本次的z-index+1，保证下次的值高于本次
            zIndex++;
          }
        }
  })()