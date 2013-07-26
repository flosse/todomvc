(function( sa ) {

  sa.modules.footer = function(sb){

    var render = function(stats) {
      sb.container.html(sb.template(stats || {}));
      if(stats && stats.total > 0){
        sb.container.show();
      }else{
        sb.container.hide();
      }
    };

    var init = function(opt) {
      sb.container.hide()
      sb.container.on('click', 'button', function() {
        sb.emit('clear');
      });
      sb.on('stats', render);
    };

    return { init: init };
  };

})( window.scaleApp );
