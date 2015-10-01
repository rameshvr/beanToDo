'use strict';

/**
 * @ngdoc function
 * @name beanToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beanToDoApp
 */
angular.module('beanToDoApp')
    .controller('MainCtrl', function($scope, $timeout, localStorageService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var todosInStore = localStorageService.get('todos');
        $scope.todos = todosInStore || [];

        //keeping the objects in sync
        $scope.$watch('todos', function() {
            localStorageService.set('todos', $scope.todos);
        }, true);

        $scope.addTodo = function() {
            $scope.todos.push({
                text: $scope.formTodoText,
                done: false
            });
            $scope.formTodoText = '';
        };

        $scope.removeTodo = function(index) {
            $timeout(function() {
                $scope.todos.splice(index, 1);
            }, 100);
            // $scope.todos.push({
            //     text: this.item.text,
            //     done: true
            // });
        };

        // $scope.handleKey = function(e) {
        //     switch (e.which) {
        //         case 40:
        //         	$(e.target).parent().parent().toggleClass('hover');
        //             break;
        //         case 38:
        //             break;
        //         default:

        //     }

        // };

        // $scope.moveUp = function(index) {
        //     // $scope.todos.splice(index, 1);
        //     console.log(index);
        // };

        // $scope.moveDown = function(index) {
        //     // $scope.todos.splice(index, 1);
        //     console.log(index);
        // };

        // Array.prototype.move = function(old_index, new_index) {
        //     while (old_index < 0) {
        //         old_index += this.length;
        //     }
        //     while (new_index < 0) {
        //         new_index += this.length;
        //     }
        //     if (new_index >= this.length) {
        //         var k = new_index - this.length;
        //         while ((k--) + 1) {
        //             this.push(undefined);
        //         }
        //     }
        //     this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        //     return this; // for testing purposes
        // };



    });