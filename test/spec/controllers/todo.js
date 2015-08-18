'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('testingApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('TodoCtrl as todo', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no todos', function () {
    expect(scope.todo.items.length).toBe(0);
  });
  
  it('should have a blank task', function(){
    expect(scope.todo.task).toBe('');
  });
  
  it('should add a task', function(){
    expect(scope.todo.items.length).toBe(0);
    scope.todo.task = 'TEST';
    scope.todo.add();
    expect(scope.todo.items.length).toBe(1);
    expect(scope.todo.items[0]).toBe('TEST');
  });
  
  it('should not add a blank task', function(){
    expect(scope.todo.items.length).toBe(0);
    scope.todo.task = '';
    scope.todo.add();
    expect(scope.todo.items.length).toBe(0);
  });
  
});
