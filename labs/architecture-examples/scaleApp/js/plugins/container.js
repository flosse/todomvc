(function( sa ) {

  sa.plugins.container = function(core){
    return {
      'init': function(sb){ sb.container = $('#' + sb.instanceId); }
    };
  };

})( window.scaleApp );
