var React = require('react');

var Header = React.createClass({
	getInitialState : function () {
		return { scrolledTop : true };
	},

	componentDidMount : function () {
		var self = this;

		function updateScroll () {
			var showHeight = window.height;
			if (window.pageYOffset > showHeight) {
				self.setState({ scrolledTop : false });
			}
			else {
				self.setState({ scrolledTop : true });
			}
		}

		updateScroll();

		// debounce scroll
		(function() {
			var debounce = function (type, name, obj) {
				var obj = obj || window;
				var running = false;
				var func = function() {
				if (running) { return; }
					running = true;
					requestAnimationFrame(function() {
						obj.dispatchEvent(new CustomEvent(name));
						running = false;
					});
				};
				obj.addEventListener(type, func);
			};

			/* init - you can init any event */
			debounce("scroll", "debouncedScroll");
		})();

		window.addEventListener("debouncedScroll", updateScroll);
	},

	render : function() {
		var className = "header-sticky " + (this.state.scrolledTop ? "" : "show");
		return (
			<header className={className} ref="header">
				<img className="logo" src="img/logo.png"/>
			</header>
		);
	}

});

module.exports = Header;