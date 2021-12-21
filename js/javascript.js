$(function () {


  // mainmnu
  const $gnb=$(' nav>.nav-items > li.nav-item ')
  const $lnb = $('nav>.nav-items > li.nav-item>.nav-subs');
  const $bar=$('.nav-title > .bar');
  let nowIdx = 0;

  
  // $gnb.on({'mouseenter':function(){
  //     nowIdx = $gnb.index(this);
  //     $lnb.eq(nowIdx).stop().fadeIn(400);
  //   },
  //   'mouseleave':function(){
  //     $lnb.stop().fadeOut(400);
  //   }
  // });

  $gnb.on('mouseover',function(evt){
    evt.preventDefault();
    nowIdx = $gnb.index(this);
    $lnb.eq(nowIdx).stop().fadeIn(100);
  });
  
  $gnb.on('mouseout',function(evt){
    evt.preventDefault();
    nowIdx = $gnb.index(this);
    $lnb.stop().fadeOut(100);
  });

// 반응형웹 gnb-btn
  $gnb.on('mouseover',function(){
    nowIdx = $gnb.index(this);
    $bar.eq(nowIdx).addClass('on').siblings().removeClass('on');
    $bar.eq(nowIdx).show();
  });
  
  $gnb.on('mouseout',function(){
    nowIdx = $gnb.index(this);
    $bar.eq(nowIdx).addClass('on').siblings().removeClass('on');
    $bar.eq(nowIdx).hide();
  });//end of mainmnu
  



  // 체크카드 슬라이드
  const $container = $('.screen > .slides-container');
  const $slides = $container.children('li');
  let slideIdx = 2;
  let aniChk = false;
  
  $('.next').on('click', function(evt){
    evt.preventDefault();

    if(aniChk === false){

        aniChk = true;
      
          if(slideIdx<4){
            slideIdx++;
          }else{
            slideIdx=0;
          }
      
          //활성화 표시
          $slides.removeClass('on').eq(slideIdx).addClass('on');
      
          //컨테이너 이동
          $container.stop().animate({left : -480},400,function(){
            //$slides.first().appendTo($container);
            $('.slides-container>li').first().appendTo($container);
            $container.css({left : -240});

            aniChk = false;
          });

    }

  });

  $(".prev").on("click", function(evt){
    evt.preventDefault();

    if(aniChk === false){
      aniChk = true;

      if(slideIdx > 0){
        slideIdx--;
      }else{
        slideIdx = 4;
      }
  
      $slides.eq(slideIdx).addClass("on").siblings().removeClass("on");
  
      $container.stop().animate({left: 0}, function(){
        $(".slides-container>li").last().prependTo($container);
        $container.css({left: -240});

        aniChk = false;
      });
    };
  }); 

  // 애니메이션 및 효과
  const $deposit=$('.intro_cont.cont_deposit_savings .cont_img img');
  const $foreign=$('.cont_foreign_remmittance > .cont_img > img');
  const $background=$('.blue');
  $(window).on('scroll',function(){
    // 현재시점 스크롤바의 top값을 추출
    const scrollTop = $(window).scrollTop();
  
    console.log(scrollTop);
  
    if(scrollTop>=1300){
      $deposit.animate({left:-100}, 700, 'easeInOutCubic')
    }
  if(scrollTop>=3600){
    $foreign.animate({top:-10},800,'easeInOutCubic')
  }
  if(scrollTop>=100){
   $('.to_top').fadeIn();
  }
  if(scrollTop>=4400){
    $background.css('background-color','#333b58');
    $('.moon_original').css('background-color','#fff');
    $('.moon_show').css({left:-23, top:-23});
    $('ico_star').hasClass('on').css('visibility:visible').css('background-color','#fff');
  }else{
    $background.css('background-color','#559cde');
    $('.moon_original').css('background-color','#ffdc00');
    $('.moon_show').css({left:-100, top:-100});
  }
});


  //top button
  $('.to_top').on('click',function(evt){
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop : 0
    },1000,'easeInOutCubic');
  });

  // 모바일 
  $('.gnb_btn').on('click',function(evt){
    evt.preventDefault();
    $('.mob').fadeIn(400);
  });
 
  $('.clse').on('click',function(evt){
    evt.preventDefault();
    $('.mob').fadeOut(400);
  });

  // 모바일메뉴 toggle
  const $mobList=$('.list-group');
  const $btnTalk=$('.gnb_mob>li button');
  const $listItem=$('.list-contents');

  $('.list-item').on('click', function (evt) {
    evt.preventDefault();
    $listItem.stop().slideToggle(200);
       if($btnTalk.hasClass('on')){
        $btnTalk.removeClass('on')
      }else{
        $btnTalk.addClass('on');
      }
});

});

