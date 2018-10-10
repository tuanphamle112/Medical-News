(function (cbfn) {
  cbfn(window.jQuery, window.WOW)
})(function cbfn ($, WOW) {
  $(homepageReady)
  $(topNavigationReady)
  $(scrollToTopReady)

  function homepageReady () {
    var wow = new WOW()
    var $statistic = $('.count')

    var $sliderPartner = $('#sliderPartner')
    var sliderPartnerOption = {
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 1500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 6
        }
      }
    }

    var $sliderNews = $('#sliderNews')
    var sliderNewsOption = {
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    }

    var $sliderHomeHeader = $('#sliderHomeHeader')
    var $listMediaSlide = $('.video-background')
    var sliderHomeHeaderOption = {
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayHoverPause: true
    }

    wow.init()
    $statistic.countTo()

    $sliderPartner.owlCarousel(sliderPartnerOption)
    $sliderNews.owlCarousel(sliderNewsOption)
    $sliderHomeHeader.owlCarousel(sliderHomeHeaderOption)
    $sliderHomeHeader.on('changed.owl.carousel', changeBannerImage)

    function changeBannerImage (event) {
      $listMediaSlide.hide().eq(event.page.index).show()
    }// changeBannerImage
  }// homepageReady

  function topNavigationReady () {
    var $dropDownMenu = $('ul.nav li.dropdown')
    var $body = $('body')
    var $mobileLeftMenu = $('.mobile-left-sidebar')
    var $overlayLeftMenu = $('.overlay-menu')
    var $buttonCloseLeftMenu = $('.btn-clo')
    var $buttonBuggerMenu = $('.humburger')
    var $window = $(window)
    var $header = $('header')
    var $mobileNavLink = $mobileLeftMenu.find('a')

    $window.scroll(fixedHeaderOnScreen).trigger('scroll')
    $dropDownMenu.hover(showSubMenu, hideSubMenu)
    $buttonBuggerMenu.on('click', showMobileMenu)
    $buttonCloseLeftMenu.on('click', hideMobileMenu)
    $overlayLeftMenu.on('click', hideMobileMenu)
    $mobileNavLink.on('click', hideMobileMenu)

    function fixedHeaderOnScreen () {
      $window.scrollTop() > 30
        ? $header.addClass('fix-header')
        : $header.removeClass('fix-header')
    }// fixedHeaderOnScreen
    function showMobileMenu () {
      $mobileLeftMenu.removeClass('hide').addClass('show')
      $overlayLeftMenu.removeClass('hide').addClass('show')
      $body.addClass('non-scroll')
    }
    function hideMobileMenu () {
      $mobileLeftMenu.removeClass('show').addClass('hide')
      $overlayLeftMenu.removeClass('show').addClass('hide')
      $body.removeClass('non-scroll')
    }

    function hideSubMenu () {
      $(this).find('.dropdown-menu').hide()
    }
    function showSubMenu () {
      $(this).find('.dropdown-menu').show()
    }
  }// topNavigationReady

  function scrollToTopReady () {
    var $window = $(window)
    var $htmlOrBody = $('html, body')
    var $scrollTopButton = $('.scroll-top')

    scrollTop()

    function scrollTop () {
      $scrollTopButton
        .hide()
        .on('click', doScrollTop)
      $window.scroll(toogleDisplayButtonScrollTop)

      function doScrollTop () {
        return $htmlOrBody.animate({
          scrollTop: 0
        }, 'slow')
      } // doScrollTop

      function toogleDisplayButtonScrollTop () {
        $window.scrollTop() > 350 ? $scrollTopButton.fadeIn(400) : $scrollTopButton.fadeOut(400)
      }
    }// scrollTop
  }// scrollToTopReady
})
