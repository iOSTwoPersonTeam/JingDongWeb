/***
 *  京东首页(一个部分一个部分去实现)
 */
/*
   console.log(210); //打印数据
   jQuery基本语法   $(selector).action() 尽量用英文状态下输入代码
*/
   
//**************整体部分*******************
$(function(){

    //顶部定位函数
	  GPS();
	
	  //上部内容左侧菜单选项卡
    twolist('.centerleft-ul li','.centerleftlist');

    //上部内容中部轮播图
     middleslideshow();

	  //上部内容右面选显卡部分(促销,公告)
    uat('.centerright-middleL li','on','.centerright-middleR');

    //京东秒杀大图方法功能
    moveBigimg();

    //顶部固定搜索框以及左侧固定导航栏显示
    scrollNavigation();
    
});

//**************顶部广告显示与关闭*******************





//**************顶部定位部分*******************
function GPS(){  //定位函数
	//$(selector).action() JQuery语法  注意要在英文状态下书写
	$('.GPS ul li').click(function(){
		//选中的文字变为红色
		$(this).addClass('GPSli-color').siblings().removeClass('GPSli-color');
		//进行文字替换
		$('.replace').text($(this).text());
	});
}

//**************上部内容左边部区域的二级菜单*******************
function twolist(user,finduser){ //二级菜单显示函数
	$(user).hover(function(){
				$(this).find(finduser).show();
			},function(){
				$(this).find(finduser).hide();
	});
}


//**************上部内容中间区域区域的轮播图(左右箭头暂不隐藏)*******************
function middleslideshow(){
   var index =0,timer;
   var size = $('.slideshow ul>li').length;
   //焦点图下面的小按钮
   $('.slidepoint li').click(function(){  
       index = $(this).index();
       manual();
   });
   
   //焦点图左的小按钮
  $('#left').click(function(){
  	if (timer) {
  		clearInterval(timer);
  	}
    if (index ==0) {
  		index = size -1;
  	} else {
  		index--;
  	}
     manual();
  });

  //焦点图右的小按钮
  $('#right').click(function(){
  	  if (timer) {
  	  	clearInterval(timer);
  	  }
      if (index == size-1) {
      	index=0;
      } else {
      	index++;
      }
  	 manual();
  });

   //焦点图片自动播放
   //clearInterval() 方法可取消由 setInterval() 设置的时间间隔
   clearInterval(timer);
   timer = setInterval(auto,4000);  //自动播放函数
   $('.slideshow').hover(function(){
       clearInterval(timer);
   },function(){
      timer =setInterval(auto,4000);
   });

   //自动播放函数
   function auto(){
      index ++;
      if (index >size-1) {
      	index =0;
      }
      manual();
   }

   //焦点图片样式切换
   //使用淡入效果来显示一个隐藏的元素  fadeIn()
   //使用淡出效果来隐藏一个元素   fadeOut()  
   //$(selector).fadeOut(speed,callback) speed 毫秒
   //stop() 方法停止当前正在运行的动画
   function  manual() {  
      $('.slidepoint li').eq(index).addClass('red').siblings().removeClass('red');
      $('.slideshow ul li').eq(index).stop(true,true).fadeIn(600).siblings().stop(true,true).fadeOut(600);
   }

}


//**************上部内容区域右面的选项卡函数*******************
function uat(user,classname,useruta){ //选项卡函数
	$(user).mouseover(function(){
		var loginmain=$(this).index();
		//一个列表里面，点击当前的增加class，删除同级的class
		$(user).eq(loginmain).addClass(classname).siblings().removeClass(classname);
		$(useruta).eq(loginmain).show(100).siblings(useruta).hide(100);
	});
}

//**************上部内容区域右面的选项卡函数*******************
function moveBigimg(){
   // alert(123);

   //鼠标移入图片上时候将图片显示出来,并且跟随是鼠标一起移动
   var x=30,y=-40;
   //e这个就是event的简写,是事件的意思~
   //这个e是mouseover事件，在这里用到了e.pageX和e.pageY e这里的功能就是获取鼠标的坐标信息
   $('.JDMSimg-left-ul-img img').mouseover(function(e){  //鼠标指针位于元素上方 mouseover
         var _divone = $("<div class='moveimg'><img src='"+this.src+"'/></div>");
         $('body').append(_divone);
         $('.moveimg').css({ //这里对图片css具体样式在css文件中定义了
                        "top":(e.pageY +y) +"px",
                        "left":(e.pageX+x) +"px"
         }).show('fast');
   }).mouseout(function(){  //当鼠标从元素上移 mouseout
        $('.moveimg').remove();
   }).mousemove(function(e){ //当鼠标指针在指定的元素中移动时,就会发生事件
        $('.moveimg').css({
              "top":(e.pageY +y) +"px",
              "left":(e.pageX +x) +"px"
        }).show('fast');
   })

}


//**************顶部固定搜索框以及左侧固定导航栏显示*******************
function scrollNavigation(){
   var off =true;
   $(window).scroll(function(){ //鼠标滚动事件
     if (off) {
       var clientH =$(window).height();
       var scrollytop =$(window).scrollTop();
       if (scrollytop >=clientH) {
           $('.toplog').slideDown();  //顶部固定搜索框显示
       } 
       else {
           $('.toplog').slideUp();  //顶部固定搜索框隐藏
       }
       

     }
   });


}
























