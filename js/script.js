$(function () {
   $('.boxes-wrapper .col').eq(0).addClass('block-1');
   $('.boxes-wrapper .col').eq(1).addClass('block-2');
   $('.boxes-wrapper .col').eq(2).addClass('block-3');
   $('.boxes-wrapper .col').eq(3).addClass('block-4');
   $('.boxes-wrapper .col').eq(4).addClass('block-5');
   $('#boxes .container ').eq(0).addClass('grey');
   $('#buy-it .wrapper:first .inner:even , #buy-it .wrapper:last .inner:even').css({
        'height':'40px',
        // 'margin':'10px 0',
        // 'border': '1px solid black'
   })
    
   ;
  

});
$(function checkPosition() {
        if (window.matchMedia('(min-width: 767px)').matches) {
            var $samochod = $('#samochod');
            var $paralaxSpeed = $samochod.data('speed');
            var $window = $(window);
            var $posY = '100vh' - ($window.scrollTop() / $paralaxSpeed);
            var $coords = '50% ' + $posY + 'px';
            $(this).scroll(function() {
                var wScroll = $(this).scrollTop();
                $('#iphone').css({
                    'transform': 'translate(0px,-' + wScroll / 20 + '%)'
                });
                $('#landscape figure ').css({
                    'transform': 'translate(0px,' + wScroll / 3.0 + '%)'
                });
                $('#bg').css({
                    'top': -(wScroll * 0.10) + 'px'
                });

                $($samochod).css({
                    backgroundPosition: $coords
                });
            });

        }
    });