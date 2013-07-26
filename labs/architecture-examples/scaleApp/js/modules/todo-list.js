(function( sa ) {

  sa.modules.todoList = function(sb){

    var tasks     = {};
    var taskViews = {};
    var actions   = {};
    var isEditing = false;

    actions.add = function(task) {
      var view = taskViews[task.id] = $(sb.template(task));
      tasks[task.id] = task;
      sb.container.append(view);
    };

    actions.toggle = function(task) {
      task.done = !task.done;
      $('li[rel="' + task.id + '"]', sb.container).addClass('completed');
    };

    actions.destroy = function(task) {
      var view = taskViews[task.id];
      view && view.remove();
      delete tasks[task.id];
      delete taskViews[task.id];
    }

    actions.clear = function() {
      var ct = getCompletedTasks();
      for(i in ct){
        sb.emit('destroy', ct[i].id);
      }
    };

    actions.edit = function(task) {
      if (isEditing) return;
      isEditing = true;
      var view = taskViews[task.id];
      var input = $("input.edit",view);
      view.addClass("editing");
      input.focus()
      input.on("keyup",function(e){
        if (e.which === 13) {
          var val = input.val();
          if (val) {
            task.description = val;
            $("label",view).text(val);
          }
          view.removeClass("editing");
          isEditing = false;
        }
        else if (e.which === 27) {
          input.val(task.description);
          input.blur();
          view.removeClass("editing");
          isEditing = false;
        }
      });
    }

    var getCompletedTasks = function() {
      var completed = [];
      for(id in tasks){
        if(tasks[id].done)
          completed.push(tasks[id]);
      }
      return completed;
    };

    var getStats = function() {
      var total = Object.keys(tasks).length;
      var completed = getCompletedTasks().length;
      return {
        total: total,
        completed:completed,
        remaining: total-completed
      };
    };

    var onDOMElement = function(e){
      var data = $(e.target).data();
      var task = tasks[data.taskId];
      var action = data.taskAction && data.taskAction.toLowerCase();
      if(action === 'edit' & e.type === "click") return;
      if (task && action) {
        sb.emit(action, task);
      }
    };

    var handleEvent = function(data, ev) {
      var fn = actions[ev];
      if (!fn) return;
      if (typeof data === 'string')
        data = tasks[data];
      data && fn(data);
      sb.emit('stats', getStats());
    };

    var init = function(opt) {
      sb.container.on("click dblclick","li [data-task-action]", onDOMElement)
      sb.on(['add', 'destroy', 'toggle', 'edit'], handleEvent);
      sb.on('clear', actions.clear);
    };

    return { init: init };
  };

})( window.scaleApp );
