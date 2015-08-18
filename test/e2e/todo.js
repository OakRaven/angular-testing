'use strict';

describe('Todo App', function(){
	beforeEach(function(){
		browser().navigateTo('/');
	});
	
	it('adds a task', function(){
		expect(element('ul li').count()).toEqual(0);
		input('vm.task').enter('New item');
		element('button').click();
		expect(element('ul li').count()).toEqual(1);
	});
});