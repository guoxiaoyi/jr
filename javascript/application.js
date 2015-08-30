jQuery(document).ready(function($) {
    $('.load-page').hide()
    $(".nav-button").click(function(event) {
      $(".nav").fadeIn();
    });
    $(".close").click(function(event) {
      $(".nav").fadeOut();
    });
    $(function() {

      var $window           = $(window),
          win_height_padded = $window.height() * 1.1,
          isTouch           = Modernizr.touch;

      // if (isTouch) { $('.revealOnScroll').addClass('animated show'); }

      $window.on('scroll', revealOnScroll);

      function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        // Showed...
        $(".revealOnScroll:not(.animated)").each(function () {
          var $this     = $(this),
              offsetTop = $this.offset().top;

          if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated show ' + $this.data('animation'));
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated show ' + $this.data('animation'));
            }
          }
        });
        // Hidden...
       $(".revealOnScroll.animated").each(function (index) {
          var $this     = $(this),
              offsetTop = $this.offset().top;
          if (scrolled + win_height_padded < offsetTop) {
            $(this).removeClass('animated show ' + $this.data('animation'))
          }
        });
      }

      revealOnScroll();
    });
    $(".logo").addClass('animated show');
    $(".logo").click(function(event) {

      location.href='index.html';
    });
});
