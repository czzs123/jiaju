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
/**；轮播图 */
var i=0;
    var LIWIDTH=1000;
    var DURATION=500;
    var LICOUNT=4;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-idxs");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
      //console.log(i);
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        //console.log(i+n);
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }


    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }

    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    };
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