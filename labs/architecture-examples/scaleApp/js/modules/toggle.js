(function( sa ) {

  sa.modules.toggle = function(sb){

    var toggle = function(){
      sb.emit("toggle/all", $(this).is(':checked'));
    };

    var init = function(opt) {
      sb.container.html(sb.template());
      sb.container.on("click", "input", toggle);
    };

    return { init: init };
  };

})( window.scaleApp );
