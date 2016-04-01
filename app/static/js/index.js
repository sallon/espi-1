/**
 * Created by yubo on 16/4/1.
 */

$(function(){
    page1();
    var p = $("#rightpoint").find(".point");
    for (var i=1;i<=p.length;i++){
        $(p[i-1]).attr("onclick","changePage("+i+");")
    }
})
var currentPage = 1;
function setPage(i){
    currentPage = i;
}
function changePage(p){
    var n = parseInt(p);
    if(currentPage < n){
        for (var i = currentPage ; i<=n;i++){
            topage(i)
        }
    }else if(currentPage > n ){
        for (var i = currentPage ; i>=n;i--){
            setTimeout(function(){
                oneByOne(i-1);
            },1000)
        }
    }
}
function topage(x){
    $("#page"+x).animo({animation: 'bounceOutUp', duration: 1 })
}
function chooseIt(p){
    var n = parseInt(p);
    switch(n)
    {
        case 1:
            showPage1();
            setPage(1);
            break;
        case 2:
            showPage2();
            setPage(2);
            break;
        case 3:
            showPage3();
            setPage(3);
            break;
        case 4:
            showPage4();
            setPage(4);
            break;
        case 5:
            showPage5();
            setPage(5);
            break;
        case 6:
            showPage6();
            setPage(6);
            break;
        case 7:
            showPage7();
            setPage(7);
            break;
    }
}

function showPage1(){
    page1();
}
/*第一页转第二页*/
function showPage2(){
    $("#page1").animo({animation: 'bounceOutUp', duration: 1 },function(){
        $("#page1").hide();
    });
    $("#page2").show().animo({animation: 'bounceInUp', duration: 1 },function(){
        $(".menuBox").show();
        focusPoint(2);
        page2();
    });
}
/*第二页转第三页*/
function showPage3(){
    $("#page2").animo({animation: 'bounceOutUp', duration: 1 },function(){
        $("#page2").hide();
    });
    $("#page3").show().animo({animation: 'bounceInUp', duration: 1 },function(){
        $(".menuBox").show();
        focusPoint(3);
        page3();
    });
}
/*第三页转第四页*/
function showPage4(){
    $("#page3").animo({animation: 'bounceOutUp', duration: 1 },function(){
        $("#page3").hide();
    });
    $("#page4").show().animo({animation: 'bounceInUp', duration: 1 },function(){
        $(".menuBox").show();
        focusPoint(4);
        page4();
    });
}
/*第四页转第五页*/
function showPage5(){
    $("#page4").animo({animation: 'bounceOutUp', duration: 1 },function(){
        $("#page4").hide();
    });
    $("#page5").show().animo({animation: 'bounceInUp', duration: 1 },function(){
        $(".menuBox").show();
        focusPoint(5);
        page5();
    });
}
/*第五页转第六页*/
function showPage6(){
    $("#page5").animo({animation: 'bounceOutUp', duration: 1 },function(){
        $("#page5").hide();
    });
    $("#page6").show().animo({animation: 'bounceInUp', duration: 1 },function(){
        $(".menuBox").show();
        focusPoint(6);
        page6();
    });
}
/*第六页转第七页*/
function showPage7(){
    $("#page6").animo({animation: 'bounceOutUp', duration: 1 },function(){
        $("#page6").hide();
    });
    $("#page7").show().animo({animation: 'bounceInUp', duration: 1 },function(){
        $(".menuBox").show();
        focusPoint(7);
        page7();
    });
}

/*定位右边的焦点*/
function focusPoint(fag){
    setPage(fag);
    var i = parseInt(fag);
    $(".point.active").removeClass("active");
    $(".point[data-page = 'page"+i+"']").addClass("active");
}

function page1(){
    $("#textBox").animo({animation: 'bounceInLeft', duration: 1 })
}

function page2(){
    /*两张大图分别从左边和右边滑进来*/
    $('#pic1').show().animo( { animation: 'bounceInLeft', duration: 1 }, function() {
        $('#pic2').show().animo( { animation: 'bounceInRight', duration: 2 },function () {
            $("#pic1,#pic2").addClass("partOne3d");
            showIcons();
        } );
    });
}
function showIcons(){
    $("#b1").hide();
    $("#b2").show().animo({animation: 'bounceIn', duration: 1},function(){
        $("#b3").show().animo({animation: 'bounceIn', duration: 1},function(){
            $("#b4").show().animo({animation: 'bounceIn', duration: 1},function(){
                $("#b5").show().animo({animation: 'bounceIn', duration: 1},function(){
                    $("#b6").show().animo({animation: 'bounceIn', duration: 1},function(){
                        $("#b7").show().animo({animation: 'bounceIn', duration: 1},function(){
                            $("#b8").show().animo({animation: 'bounceIn', duration: 1});
                        })
                    })
                })
            })
        })
    });
}
function page3(){
    $("#two1").show().animo({animation: 'fadeInDownBig', duration: 1.5},function(){
        $("#two2").show().animo({animation: 'fadeInUpBig', duration: 1.5},function(){
            $("#two3").show().animo({animation: 'fadeInUpBig', duration: 1.5},function(){
                $("#two4").show().animo({animation: 'bounceIn', duration: 1.5});
            })
        })
    })
}
function page4(){
    $("#yuan1").show().animo('rotate', { degrees: 360,duration: 1},function(){
        $("#yuan2").show().animo('rotate', { degrees: 360,duration: 1.3},function(){
            $("#yuan3").show().animo('rotate', { degrees: -360,duration: 1.6});
        })
    })
    $("#zhu3").css("display","block");
    $("#zhu3_img").animate({height:"292px"},1500);
    setTimeout(function(){
        $("#zhu3 .numName").show().animo({animation: 'fadeIn', duration: 1.5});
    },1500);
    $("#zhu2").css("display","block");
    $("#zhu2_img").animate({height:"123px"},1500);
    setTimeout(function(){
        $("#zhu2 .numName").show().animo({animation: 'fadeIn', duration: 1.5});
    },1500);
    $("#zhu1").css("display","block");
    $("#zhu1_img").animate({height:"70px"},1500);
    setTimeout(function(){
        $("#zhu1 .numName").show().animo({animation: 'fadeIn', duration: 1.5});
    },1500);
}

var ring_node = $("#ring-1");
buildUI(ring_node);
function buildUI(row){
    for (var i = 1; i <= 24; i++) {
        var poster = document.createElement("div");
        $(poster).addClass("poster");
        $(poster).css({
            "background":"url(static/images/page/four/" + i + ".jpg) no-repeat",
            "transform":transform
        })
        if (i <= 6) {
            var transform = "translate(" + 135 * (i - 4) + "px,0px)"
        } else if (i <= 12) {
            var transform = "translate(" + 135 * (i - 10) + "px,75px)"
        } else if (i <= 18) {
            var transform = "translate(" + 135 * (i - 16) + "px,150px)"
        } else {
            var transform = "translate(" + 135 * (i - 22) + "px,225px)"
        }
        $(row).append(poster);
    }
}
$(".poster").css({"background-size": "120px 65px"});
function setup_posters_row(row) {
    var posterAngle = 360 / 24;
    console.log(row);
    for (var j = 0; j < 24; j++) {
        var poster = row.children[j];
        var poster = $(".poster")[j];
        var transform = "rotateY(" + posterAngle * j + "deg) translateX(0px) translate(0px) translateZ(" + 520 + "px)";
        $(poster).css("transform",transform);
    }
}
function page5(){
    $("#ring-1").show();
    $("#rotate").animo({animation: 'fadeInUp', duration: 1.5},function(){
        setup_posters_row(ring_node);
    })
}

function page6(){
    if($("#companyList .logoItem").length == 0){
        for (var i = 1;i <=20;i++){
            var poster = document.createElement("div");
            $(poster).addClass("logoItem");
            $(poster).css({"background-image":"url(static/images/page/five/" + i + ".jpg)"});
            $("#companyList").append(poster);
        }
    }

    $(".logoItem").each(function(){
        $(this).animo({animation: ['flip','tada'], duration: 2});
    })
}
function page7(){

}
