'use strict';

angular.module('testingApp')
	.controller('TodoCtrl', function () {
		var self = this;

		self.items = [];
		self.task = '';
		self.add = function () {
			if(self.task){
			self.items.push(self.task);
			}
		};
	});