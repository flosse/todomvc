(function( window ) {

  var init = function(){

    var startCB = function(err){
      if(err) console.error(err.message);
    };
    var plugins = scaleApp.plugins;
    var app = new scaleApp.Core()
      .use(plugins.container)
      .use(plugins.handlebars, {dir:'js/modules/'})
      .register("header", scaleApp.modules.header)
      .register("main", scaleApp.modules.main)
      .register("footer",scaleApp.modules.footer)
      .start(function(err){
        if(err) return console.error(err.message);
        app.register("todo-list", scaleApp.modules.todoList)
           .register("toggle", scaleApp.modules.toggle)
           .start(["todo-list", "toggle"], startCB);
      });
  };

  $(init);

})( window );
