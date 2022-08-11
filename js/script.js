//hrefに#があるaタグをクリックした時に
jQuery('a[href^="#"]').on('click', function () {
  
    //headerの高さを取得　　//headerが固定の場合必要
    var header = jQuery('.header-top').innerHeight();
    
    //hrefの値をidに変換
    var id = jQuery(this).attr('href');
    
    //ポジションの初期値は0　//topに戻るボタンがある時のみの記述
    var position = 0;
    
    //もしidが#だけじゃなかったらヘッダーの高さを引いた分のidの場所を取得　//topに戻るボタンがないときは、中の記述のみ
    if (id != '#') {
      var position = jQuery(id).offset().top - header;
    }
    
    //取得した値に300msでスクロール
    jQuery('html,body').animate(
      {
        scrollTop: position,
      },
      300
    );
});

//1番目だけ開いている
$(function () {
  $('.ac-child').css('display', 'none');         
  $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
    $('.ac-parent').not($(this)).next('.ac-child').slideUp();
    $(this).toggleClass('is-active');
  })
});


//主な機能
jQuery('.function-list li:first-child').on('click', function() {
  jQuery('.function-contents01').fadeIn(600);
  jQuery('.function-contents02').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:nth-child(2)').on('click', function() {
  jQuery('.function-contents02').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:nth-child(3)').on('click', function() {
  jQuery('.function-contents03').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents02').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:nth-child(4)').on('click', function() {
  jQuery('.function-contents04').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents02').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:nth-child(5)').on('click', function() {
  jQuery('.function-contents05').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents02').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:nth-child(6)').on('click', function() {
  jQuery('.function-contents06').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents02').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:nth-child(7)').on('click', function() {
  jQuery('.function-contents07').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents02').fadeOut();
  jQuery('.function-contents08').fadeOut();
});

jQuery('.function-list li:last-child').on('click', function() {
  jQuery('.function-contents08').fadeIn(600);
  jQuery('.function-contents01').fadeOut();
  jQuery('.function-contents03').fadeOut();
  jQuery('.function-contents04').fadeOut();
  jQuery('.function-contents05').fadeOut();
  jQuery('.function-contents06').fadeOut();
  jQuery('.function-contents07').fadeOut();
  jQuery('.function-contents02').fadeOut();
});

//ハンバーガーメニュー
$('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
})

$('.drawer-content_item a').on('click', function() {
  $('.drawer-icon').removeClass('is-active');
  $('.drawer-content').removeClass('is-active');
})

//reasonアコーディオン
//1番目だけ開いている
$(function () {
  $('.reason-child').css('display', 'none');         
  $('.reason-topList_sp dd').on('click', function () {
    $(this).next().slideToggle();
    $('.reason-topList_sp dd').not($(this)).next('.reason-child').slideUp();
    $(this).toggleClass('is-active');
  })
});