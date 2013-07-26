(function( sa ) {

  sa.modules.main = function(sb){
    var init = function() {
      sb.container.html(sb.template());
      sb.container.hide();
      sb.on('stats', function(s){
        if (s.total > 0){
          sb.container.show();
        } else {
          sb.container.hide();
        }
      });
    };

    return { init: init };
  };

})( window.scaleApp );
