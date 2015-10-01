'use strict';

/**
 * @ngdoc function
 * @name beanToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beanToDoApp
 */
angular.module('beanToDoApp')
    .controller('MainCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.todos = [{
            text: 'ToDo1',
            done: false,
            priority:2
        }, {
            text: 'ToDo2',
            done: true,
            priority:-1
        }];

        $scope.addTodo = function() {
            $scope.todos.push({
                text: $scope.formTodoText,
                done: false
            });
            $scope.formTodoText = '';
        	$scope.updateLocalStorage($scope.todos);
        };
        
        $scope.toggleDone = function(){
        	this.item.done = !this.item.done;
        	if(this.item.done === true){
        		$.each($scope.todos, function(key){
        			console.log(key);
        		});
        	}
        };

        $scope.updateLocalStorage = function(){};

    });