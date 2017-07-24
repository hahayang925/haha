$(document).ready(function(){

//首頁文字效果
/*$('#blow').hover(function(){
  $('#blow').animate({
    marginLeft:'-=1000'
  },500,function(){
    $('#blow').hide();
    $('#wind').show().addClass('animated slideInRight');
  });
})*/
 //首頁文字動畫
  $('#blow').delay(1000).animate({
    marginLeft:'-=1000'
  },600,function(){
    $('#blow').hide();
    $('#wind').show().addClass('animated slideInRight');
  });

//burger menu效果
$('.menu').on('click',function(e){
  e.preventDefault();
  $('.burger_menu').addClass('show');
  $('.burger_menu').slideToggle();
  $(this).children().toggleClass('fa-bars');
  $(this).children().toggleClass('fa-times')
})


//螢幕滾動效果
$('.top_bar_menu').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html,body').animate({scrollTop:targetPos} , 1000);
  });

  //burgermenu滾動效果
  $('.burger_menu a').click(function(e){
      e.preventDefault();
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      $('html,body').animate({scrollTop:targetPos} , 1000);
      $('.burger_menu').hide();
      $('.menu i').toggleClass('fa-times');
      $('.menu i').toggleClass('fa-bars');
    });


 $(window).scroll(function(){
   var scrollPos = $(window).scrollTop();
   var windowHeight=$(window).outerHeight();

   $('.top_bar_menu').each(function(){
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    var targetHeight=$(target).outerHeight();
    if( targetPos-10 <= scrollPos && (targetPos+targetHeight) >scrollPos){
      $('.header a').removeClass('active');
      $(this).addClass('active');
    }else{
       $(this).removeClass('active');
    }
   });

   //about動畫效果
   $('.about p').each(function(index){
     if( scrollPos > ($('.about').offset().top)-300){
   $(this).delay(300*index).fadeIn(300);
   $('._slider').delay(2000).fadeIn(300);
     }
   })

   //profile動畫效果
   function profile(){
     if(scrollPos > ($('.profile').offset().top)-200){
      $('.wrapper').delay(200).slideDown(700);
    };
    if(scrollPos > ($('.contact').offset().top)-200){
      $('.pic').addClass('animated jello');
    };
   }
   profile();

   //skill動畫效果 opacity寫法
   $('.flipper_container').each(function(){
     if(scrollPos > ($('.skill').offset().top)-200){
       $(this).fadeIn(1000);
     }
   })

   $('.workshop img').each(function(){
     if(scrollPos > ($('.workshop').offset().top)-200){
       $(this).animate({opacity:1},800);
     }
   })

})//scroll ends



//touch 取代 skills翻轉效果
$('.front').on('click',function(){
  $(this).css('transform', 'rotateY(-180deg)');
  $(this).next().css('transform', 'rotateY(0deg)');
})

$('.back').on('click',function(){
  $(this).css('transform', 'rotateY(-180deg)');
  $(this).prev().css('transform', 'rotateY(0deg)');
})

//lightbox plugin
lightbox.option({
    //'disableScrolling': true,
    'positionFromTop': 100,
    'wrapAround':	true,
     //'resizeDuration': 200,
     //'wrapAround': true
   })

})



//禁止按右鍵&複製
/*function click() {

return false;
}
function click1() {
if (event.button==2) {
return false;
}
}
function CtrlKeyDown(){
if (event.ctrlKey) { return false; }
}
document.onkeydown=CtrlKeyDown;
document.onselectstart=click;
document.onmousedown=click1;
document.oncontextmenu=function(event) {
if (document.all)
window.event.returnValue = false;
else
event.preventDefault();
}
document.oncontextmenu = function(){
return false;
}
document.onkeydown = function(){
if (event.ctrlKey && window.event.keyCode==67){
return false;
}
}
document.body.oncopy = function (){
return false;
}
//原文網址：https://kknews.cc/other/qyo4v3r.html*/
