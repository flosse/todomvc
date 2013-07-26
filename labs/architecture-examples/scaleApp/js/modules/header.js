(function( sa ) {

  sa.modules.header = function(sb){

    var createNewTask = function(e) {
      if (e.which === 13) {
        var val = $(this).val();
        if (val) {
          var date = new Date();
          var taskId = ['todo', date.getTime(), date.getMilliseconds()].join('-');
          var task = { id: taskId, description: val,  done: false };
          sb.emit('add', task);
          $(this).val('');
        }
      }
    };

    var init = function(opt) {
      sb.container.on('keyup', 'input', createNewTask);
      sb.container.html(sb.template());
    };

    return { init: init };
  };

})( window.scaleApp );
