$(window).on('load', () => {
  $('#work_content').fadeIn(600);
  $('#main-images img').show();
});

const showTab = (selector) => {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);
  $('.main div').mouseover(function(e) {
    $('.main div').removeClass('active');
    $('.main div').addClass('non-active');
    $(this).removeClass('non-active');
    $(this).addClass('active');
  });

  // 一度すべての.main-content > sectionを非表示にする
  // $('.main-content > div').hide();
  // .main-content > sectionのうち、selectorに該当するものだけを表示する
  $(selector).show();

  $('.main div').mouseleave(function() {
    // $('#main-images img').hide();
    $('.main div').removeClass('active');
    $('.main div').removeClass('non-active');
  });
  
  $('#main-images img').hover( (e) => {
    e.stopPropagation();
  });
  
  $('.main div').hover(
    function (e) {
      $('#' + $(e.target).attr('id') + '__image1').removeClass('fadeOutUp').addClass('fadeInUp');
      $('#' + $(e.target).attr('id') + '__image2').removeClass('fadeOutUp').addClass('fadeInUp');
      $('#' + $(e.target).attr('id') + '__image3').removeClass('fadeOutUp').addClass('fadeInUp');
      console.log(e);
    }
  )

  $('.main div').mouseleave(
    function (e) {
      $('#' + $(e.target).attr('id') + '__image1').removeClass('fadeInUp').addClass('fadeOutUp');
      $('#' + $(e.target).attr('id') + '__image2').removeClass('fadeInUp').addClass('fadeOutUp');
      $('#' + $(e.target).attr('id') + '__image3').removeClass('fadeInUp').addClass('fadeOutUp');
      console.log(e);
    }
  )
};

// タブがクリックされたらコンテンツを表示
const $content = $('.main-content');
showTab();

// サイドバーのaboutをクリックした場合のハンドラー
$('#sidebar__about').on('click', () => {
  $('#work_content').fadeOut(800, () => {
    $('#about_content').fadeIn(600);
    window.scrollTo(0, 0);
  })
});

// サイドバーのaboutをクリックした場合のハンドラー
$('#sidebar__works').on('click', () => {
  $('#about_content').fadeOut(800, () => {
    $('#work_content').fadeIn(600);
    window.scrollTo(0, 0);
  })
});

// サイドバーのaboutをクリックした場合のハンドラー
$('#sidebar__skills').on('click', () => {
  $('#about_content').fadeOut(800, () => {
    $('#work_content').fadeIn(600);
    window.scrollTo(0, 3000);
  })
});