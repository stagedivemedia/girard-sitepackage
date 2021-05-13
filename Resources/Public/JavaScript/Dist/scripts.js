$(document).ready(function() {

    $('.section-column .frame-container .frame-inner').matchHeight();
    $('#p1 .card-group-element .card-teaser').matchHeight();
    $('#p77 .card-group-element .card-teaser').matchHeight();
    $('.news-list-view .article .tease').matchHeight();
    $('.news-list-view .article .header').matchHeight();
    checkInput();
    //callImageSlider();
});

function checkInput() {
      var empty = true
      $('.btn-add-to-cart').attr('disabled', 'disabled');
      $(":radio").change(function() {
      var names = {};
      $(':radio').each(function() {
            names[$(this).attr('name')] = true;
      });
      var count = 0;
      $.each(names, function() { 
            count++;
      });
      if ($(':radio:checked').length === count) {
            empty = false
            if (empty) {
                  $('.btn-add-to-cart').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
                  
            } else {
                  $('.btn-add-to-cart').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
            }
      }
      }).change();

      
}
AimeosCatalogDetail.setupBlockPriceSlider = function() {}


function callImageSlider() {
      $('.image-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.thumbs-custom',
            infinite:false
      }); 
      $('.thumbs-custom').slick({
            asNavFor: '.image-single',
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            infinite:false,
            //centerMode: true,
            focusOnSelect: true
      }); 

}