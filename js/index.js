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
	//上部内容右面选显卡部分(促销,公告)
    uat('.centerright-middleL li','on','.centerright-middleR');

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








//**************上部内容中间区域区域的轮播图*******************







//**************上部内容区域右面的选项卡函数*******************
function uat(user,classname,useruta){ //选项卡函数
	$(user).mouseover(function(){
		var loginmain=$(this).index();
		//一个列表里面，点击当前的增加class，删除同级的class
		$(user).eq(loginmain).addClass(classname).siblings().removeClass(classname);
		$(useruta).eq(loginmain).show(100).siblings(useruta).hide(100);
	});
}













