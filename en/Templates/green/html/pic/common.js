// JavaScript Document

//城市切换	
	$(document).ready(function(){
	  $("dd p").click(function(){
	  $(".menu-qie").fadeIn("slow")
	  });
	  $(".header,body,h1 img,h2 img").hover(function(){
	  $(".menu-qie").fadeOut("slow");
	  });
	});
//返回顶部
$(function(){
	$("#fhdb dl dt").hover(function(){
		$("#fhdb dl dd").stop().fadeIn("slow")},function(){
		$("#fhdb dl dd").stop().fadeOut("slow");
		})
		$(document).ready(function(){
			$("#fhdb").hide();			
			$(function () {			
			$(window).scroll(function(){			
			if($(window).scrollTop()>150){
			$("#fhdb").stop().fadeIn("slow");			
			}			
			else			
			{			
			$("#fhdb").stop().fadeOut("slow");			
			}			
			});			
			$("#fhdb").click(function(){			
			$('body,html').animate({scrollTop:0},100);			
			return false;			
			});			
			});			
			});
	})
//导航下拉
 $(function(){
            $("ol").hide();
            $("ul li").hover(function(){
                $(this).find("ol").stop(true,true);
                $(this).find("ol").slideDown();
            },function(){
                $(this).find("ol").stop(true,true);
                $(this).find("ol").slideUp();
            });
        })

//信息滚动
$(function(){
	function box(){$(".newsG ul li:first").animate({"margin-top":"-24"},1000,function(){
		$(".newsG ul li:first").clone().appendTo(".newsG ul")
		$(".newsG ul li:first").remove()
		$(".newsG ul li:last").css("margin-top","0")
	})}
	var bannerTime=setInterval(box,3000)//定时器
	$(".newsG").mouseover(function(){//当数遍划过时改变图片和按钮背景颜色
		clearInterval(bannerTime)//停止定时器（切换）
	})
	$(".newsG").mouseout(function(){//当鼠标离开后重新调用定时器
		bannerTime=setInterval(box,3000)
	})
})

//在地施工导航
$(function(){
	$(".zsgd ul li:eq(1)").css("margin-left","850px");
	$(".zsgd ul li:eq(2)").css("margin-left","9px");
	$(".zsgd ul li:gt(2)").css("margin-left","8px");
	})
		
//在地施工图片
$(function(){
	$(".zsgd dl:gt(0)").css("margin-left","24px");	
	})
//精品案例导航
$(function(){
	$(".jpal ul li:eq(7)").css("margin-right","42px");	
	})


//遮罩层	  
$(function(){
	$(".jpal dl").hover(function(){
		$(this).find("dd").stop(true,true);
		$(this).find("dd").animate({'bottom':'3px'},"500");
	},function(){
		$(this).find("dd").stop(true,true);
		$(this).find("dd").animate({'bottom':'-52px'},"500");
	});
})

//遮罩层位置
$(function(){
	$(".jpal dl:gt(0)").css("margin-left","22px");
	$(".jpal dl:eq(5)").css("margin-left","0px");
	$(".jpal dl:gt(2)").css("margin-bottom","15px");
})

//推荐设计师导航
$(function(){
	$(".tjsj ul li:eq(2)").css("margin-right","42px");	
	})


//推荐设计遮罩层	  
$(function(){
	$(".tjsj dl").hover(function(){
		$(this).find("dd").stop(true,true);
		$(this).find("dd").animate({'bottom':'2px'},"500");
	},function(){
		$(this).find("dd").stop(true,true);
		$(this).find("dd").animate({'bottom':'-52px'},"500");
	});
})

/*//推荐设计遮罩层位置
$(function(){
	$(".tjsj dl:gt(0)").css("margin-left","20px");	
	})*/

//施工保障
$(function(){
	$(".sgbz .left-1 dl:gt(0)").css("margin-left","15px");	
	})

$(function(){
	$(".sgbz .right-1 .zy li:gt(0)").css("margin-top","5px");
	$(".sgbz .right-1 .zy li:eq(2)").css("border-bottom","none");		
	})

//别墅生活
$(function(){
	$(".bssh dl:odd").css("float","right");
	$(".bssh dl:gt(1)").css("margin-bottom","30px");		
	})
//生活方式
$(function(){
	$(".shfs ul li:gt(0)").css("font-size","14px");
	$(".shfs ul li:eq(1)").css("margin-left","850px");
	$(".shfs ul li:eq(2)").css("float","right").css("color","#D2A011");
	$(".shfs ul li a").css("color","#D2A011");
	})

//生活方式
$(function(){
	$(".bg-stu dl:odd").css("float","right");
	$(".bg-stu dl:gt(1)").css("margin-top","15px");
	})

$(function(){
	$(".db-tu dl:gt(0)").css("margin-left","20px");
	})

//装修流程
$(function(){
	$(".left-3 ul li:eq(1)").css("margin-left","380px").css("font-size","14px");
	$(".left-3 ul li:eq(2)").css("float","right").css("font-size","14px").css("color","#D2A011");
	})
	
//选项卡
  $(function(){
	$(".nei-1 dl:gt(0)").hide()
	$(".an p").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".nei-1 dl").eq(index).show().siblings().hide();
		})
	})


//装修工具
$(function(){
	$(".right-3 dl:gt(0)").css("margin-left","15px");
	$(".right-3 dl:gt(2)").css("margin-top","0px");
	$(".right-3 dl:eq(3)").css("margin-left","0px");
	
	})	
//底部列表
$(function(){

	$(".footer ul li:last").css("text-align","center");
	$(".footer ul li p:last").css("font-size","13px").css("line-height","30px");
	})

$(function() {
    //集体调用
    $(".form input").each(function(){
        $(this).setDefauleValue();
    });
    //单个调用
    $("#key").setDefauleValue();
    $("#key2").setDefauleValue();
    $("#key3").setDefauleValue();
})
 
//设置input,textarea默认值
$.fn.setDefauleValue = function() {
    var defauleValue = $(this).val();
    $(this).val(defauleValue).css("color","#666");
 
    return this.each(function() {       
        $(this).focus(function() {
            if ($(this).val() == defauleValue) {
                $(this).val("").css("color","#666");//输入值的颜色
            }
        }).blur(function() {
            if ($(this).val() == "") {
                $(this).val(defauleValue).css("color","#666");//默认值的颜色
            }
        });
    });
}

//热装楼盘列表页

  //选项卡
  $(function(){
	$(".kgd .nei-2 form:gt(0)").hide()
	$(".kgd dl dd").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".nei-2 form").eq(index).show().siblings().hide();
		})
	})

//在地施工详情页
$(function(){
	$(".left-5 dl dd:last").css("float","right")
	})


//网站案例

$(function(){
	$(".ansx ul li:eq(1)").css("margin-left","180px")
	})


$(function(){
	$(".anzs .tc dd:odd").css("float","right")
	})


$(function(){
	$(".right-1 .tc dd:even").css("float","right")
	})

  //选项卡
$(function(){
	$(".xk-1 .lkz .kzz:gt(0)").hide()
	$(".xk-1 h3 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xk-1 .lkz .kzz").eq(index).show().siblings().hide();
		})
	})
$(function(){
	$(".xk-2 .lkz .kzz:gt(0)").hide()
	$(".xk-2 h3 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xk-2 .lkz .kzz").eq(index).show().siblings().hide();
		})
	})

$(function(){
	$(".xk-3 .lkz .kzz:gt(0)").hide()
	$(".xk-3 h3 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xk-3 .lkz .kzz").eq(index).show().siblings().hide();
		})
	})


$(function(){
	$(".xk-4 .lkz .kzz:gt(0)").hide()
	$(".xk-4 h3 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xk-4 .lkz .kzz").eq(index).show().siblings().hide();
		})
	})
	
$(function(){
	$(".xk-5 .lkz .kzz:gt(0)").hide()
	$(".xk-5 h3 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xk-5 .lkz .kzz").eq(index).show().siblings().hide();
		})
	})
	
	
$(function(){
	$(".xk-6 .lkz .kzz:gt(0)").hide()
	$(".xk-6 h3 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xk-6 .lkz .kzz").eq(index).show().siblings().hide();
		})
	})	

$(function(){
	$(".mzbj .bq-y").click(function(){
	$(this).css("display","none")})
	})


$(function(){
	$(".right-fdd ul li img").click(function(){
	$(".right-fdd").css("display","none")})
	})



$(function(){
	$(".xsk .check .checked:gt(0)").hide()
	$(".xsk h5 a").hover(function(){
	$(this).addClass("bg").siblings().removeClass("bg");
	var index=$(this).index();
	$(".xsk .check .checked").eq(index).show().siblings().hide();
		})
	})	
	



$(function(){
//	$(".submian .witnessLeft ul li a:last").css("border-bottom","none");
	})	


$(function(){
	//$(".xianshi_yin2 ul li>4(n) a:last").css("border","none");
	})	


//黑色导航
$(window).scroll(function(){
	if($(window).scrollTop() > 350){
       // $(".yysq").css('display','block')
         $(".yysq").css('display','none')

	}else{
		 $(".yysq").css('display','none')
	};})





