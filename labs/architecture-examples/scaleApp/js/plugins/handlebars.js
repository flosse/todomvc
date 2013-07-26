(function( sa ) {

  sa.plugins.handlebars = function(core, opts){
    var dir = 'templates/';
    var ext = '.hbs';
    if (opts && opts.dir) dir = opts.dir;
    if (opts && opts.ext) ext = opts.ext;

    return {
      'init': function(sb, opts, done){
        $.get(dir +  sb.instanceId + ext)
          .success(function(tmpl){
            sb.template = Handlebars.compile(tmpl);
            done();
          }).fail(done);

      }
    };
  };

})( window.scaleApp );
