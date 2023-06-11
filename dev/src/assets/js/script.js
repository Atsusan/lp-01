//　アコーディオン実装
$('.js-accordion').click(function() {
    $(this).next().slideToggle();
    $(this).children('.p-faq__item__icon').toggleClass( 'p-faq__item__open' );
    $(this).toggleClass( 'p-faq__item__open');
});