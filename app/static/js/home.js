/**
 * Created by yubo on 16/4/1.
 */

$(function(){
    $(".page").each(function(){
        $(this).addClass("section");
    })
    $("#box").fullpage({
        "navigation":true,
        "navigationPosition":"right",
        "navigationColor":["#fff"],
        "fixedElements":".menuBox",
        afterLoad: function(anchorLink, index){
            if(index == 1){
                page1();
                $(".to-top").css({
                    opacity:0
                })
            }
            if(index == 2){
                page2();
                $(".to-top").css({
                    opacity:1
                })
            }
            if(index == 3){
                page3();
                $(".to-top").css({
                    opacity:1
                })
            }
            if(index == 4){
                page4();
                $(".to-top").css({
                    opacity:1
                })
            }
            if(index == 5){
                page5();
                $(".to-top").css({
                    opacity:1
                })
            }
            if(index == 6){
                page6();
                $(".to-top").css({
                    opacity:1
                })
            }
            if(index == 7){
                page7();
                $(".to-top").css({
                    opacity:1
                })
            }
        },
        onLeave: function(index, direction){
            if(index == 1){
                reset1();
            }
            if(index == 2){
                reset2();
            }
            if(index == 3){
                reset3();
            }
            if(index == 4){
                reset4();
            }
            if(index == 5){
                reset5();
            }
        }
    });
})




function page1(){
    $(".menuBox").hide();
    $("#textBox").animo({animation: 'bounceInLeft', duration: 1 })
}

function reset1(){
    $("#textBox").animo({animation: 'bounceInLeft', duration: 1 })
}

function page2(){
    $(".menuBox").show();
    /*两张大图分别从左边和右边滑进来*/
    $('#pic1').show().animo( { animation: 'bounceInLeft', duration: 1 }, function() {
        $('#pic2').show().animo( { animation: 'bounceInRight', duration: 1 },function () {
            $("#pic1,#pic2").addClass("partOne3d");
            showIcons();
        } );
    });
}

function reset2(){
    $("#pic1,#pic2,#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8").hide();
}

function showIcons(){
    $("#b1").hide();
    $("#b2").show().animo({animation: 'bounceIn', duration: 0.2},function(){
        $("#b3").show().animo({animation: 'bounceIn', duration: 0.2},function(){
            $("#b4").show().animo({animation: 'bounceIn', duration: 0.2},function(){
                $("#b5").show().animo({animation: 'bounceIn', duration: 0.2},function(){
                    $("#b6").show().animo({animation: 'bounceIn', duration: 0.2},function(){
                        $("#b7").show().animo({animation: 'bounceIn', duration: 0.2},function(){
                            $("#b8").show().animo({animation: 'bounceIn', duration: 0.2});
                        })
                    })
                })
            })
        })
    });
}
function page3(){
    $("#two1").show().animo({animation: 'fadeInDownBig', duration: 0.8},function(){
        $("#two2").show().animo({animation: 'fadeInUpBig', duration: 0.8},function(){
            $("#two3").show().animo({animation: 'fadeInUpBig', duration: 0.8},function(){
                $("#two4").show().animo({animation: 'bounceIn', duration: 0.8});
            })
        })
    })
}
function reset3(){
    $("#two1,#two2,#two3,#two4").hide();
}
function page4(){
    $("#yuan1").show().animo('rotate', { degrees: 360,duration: 1},function(){
        $("#yuan2").show().animo('rotate', { degrees: 360,duration: 1.3},function(){
            $("#yuan3").show().animo('rotate', { degrees: -360,duration: 1.6});
        })
    })
    setTimeout(function(){
        $("#zhu3").show();
        $("#zhu3_img").animate({height:"292px"},1500);
        setTimeout(function(){
            $("#zhu3 .numName").show().animo({animation: 'fadeIn', duration: 1.5});
        },2500);
        $("#zhu2").show();
        $("#zhu2_img").animate({height:"123px"},2500);
        setTimeout(function(){
            $("#zhu2 .numName").show().animo({animation: 'fadeIn', duration: 1.5});
        },2500);
        $("#zhu1").show();
        $("#zhu1_img").animate({height:"70px"},2500);
        setTimeout(function(){
            $("#zhu1 .numName").show().animo({animation: 'fadeIn', duration: 1.5});
        },2500);
    },1000);
}
function reset4(){
    // $("#yuan1,#yuan2,#yuan3").hide();
    $("#zhu1 .numName,#zhu2 .numName,#zhu3 .numName").hide();
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

function reset5(){
    $("#ring-1").hide();
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
    console.log("第七页显示");
}
function backTop(){
    $.fn.fullpage.moveTo(1,0);
}