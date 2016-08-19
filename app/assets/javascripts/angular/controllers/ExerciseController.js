(function() {
  function ExerciseController() {
    // fixes scoping issues
    var ctrl = this;

    ctrl.problem = gon.problem;
    ctrl.resultsVisible = false;

    // set initial value
    // ctrl.code = 'puts hi'
    // public
    ctrl.toggleResults = function() {
      ctrl.resultsVisible = !ctrl.resultsVisible;
    };

    ctrl.aceLoaded = function(editor) {
      editor.on("change", function() {
          // When we detect continued typing, we'll hide the results
          ctrl.resultsVisible = false;
      });
    };
  };


  angular
    .module('Codex')
    .controller('ExerciseController', ExerciseController);
})();
