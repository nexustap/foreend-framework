define([], 
	function () {
		console.debug("TestModel");

		function TestModel() {
			var _self = this;

			this.title = 'ddd';

			this.test = function() {
				var content = _self.title;
				return content;
			};
		}

		return TestModel;
});

