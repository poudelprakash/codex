(function() {
  function ExerciseController() {
    // fixes scoping issues
    var ctrl = this;

    ctrl.problem = gon.problem;
    ctrl.code = ctrl.problem.main_body;
    ctrl.tests = ctrl.problem.test_body;

    ctrl.resultsVisible = false;

    // set initial value


    // public
    ctrl.toggleResults = function() {
      ctrl.resultsVisible = !ctrl.resultsVisible;
    };

    ctrl.aceLoaded = function(editor) {
      editor.on('change', function() {
          // When we detect continued typing, we'll hide the results
          ctrl.resultsVisible = false;
      });
    };

    ctrl.specsLoaded = function(editor) {
      editor.setReadOnly(true);
    };
  };


  angular
    .module('Codex')
    .controller('ExerciseController', ExerciseController);
})();
