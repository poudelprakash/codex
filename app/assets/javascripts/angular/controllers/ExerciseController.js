(function() {
  function ExerciseController($scope) {
    // fixes scoping issues
    var ctrl = this;

    ctrl.problem = gon.problem;
    ctrl.language = gon.language;
    ctrl.user = gon.user;

    ctrl.code = ctrl.problem.main_body;
    ctrl.tests = ctrl.problem.test_body;

    ctrl.resultsVisible = false;
    ctrl.showSpinner = false;
    ctrl.correctAnswer = false;
    ctrl.alreadySubmitted = 0;

    // set initial value


    // public
    ctrl.toggleResults = function() {
      ctrl.resultsVisible = !ctrl.resultsVisible;
    };

    ctrl.aceLoaded = function(editor) {
      editor.$blockScrolling = Infinity;
      editor.on('change', function() {
          // When we detect continued typing, we'll hide the results
          ctrl.resultsVisible = false;
      });
    };

    ctrl.specsLoaded = function(editor) {
      editor.$blockScrolling = Infinity;
      editor.setReadOnly(true);
    };

    ctrl.run = function() {
      ctrl.showSpinner = true;

      fetch('http://localhost:3003/request', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: ctrl.code,
          tests: ctrl.problem.test_final
        })
      })
      .then(function(response) {
        ctrl.showSpinner = false;
        ctrl.resultsVisible = true;
        ctrl.results = null;
        ctrl.errorResults = null;

        if (!response.ok) {
          console.log(response);
          ctrl.errorResults = response.statusText + ": There is something wrong with your code.";

          $scope.$apply();
          throw Error(response.statusText);
        }
        $scope.$apply();
        return response.json();
      })
      .then(function(data) {
        console.log('Returning JSON');

        ctrl.summary = data.shift();
        ctrl.results = data;
        if(data.length == 0) {
          // hacky but will work for now.
          ctrl.errorResults = "You got everything correct! Feel free to refactor your solution and run again to submit!"
          if(ctrl.correctAnswer) {
            // AJAX POST request or something.
            submitAnswer();
          } else {
            ctrl.correctAnswer = true;
          }
        } else {
          ctrl.correctAnswer = false;
        }

        $scope.$apply();
      })
      .catch(function(err) {
        console.log('Something went wrong', err);
      });

    }; // end of ctrl.run

    function submitAnswer() {
      console.log("Submit Answer Called");
      if(ctrl.alreadySubmitted < 1){
        fetch('/progresses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            progress: {
              user_id: ctrl.user.id,
              problem_id: ctrl.problem.id,
              answer: ctrl.code,
              completed_at: true
            }
          })
        });
      } else {
        return
      }
      ctrl.alreadySubmitted += 1;
    }

  };

  angular
    .module('Codex')
    .controller('ExerciseController', ['$scope', ExerciseController]);
})();
