var React = require('react');
var Section = require('./Section');

var LogoSection = React.createClass({

	render: function() {
		return (
			<Section className="logo-section" id="logoSection">
				<div className="logo-container">
					<img className="logo" src="img/logo.png"/>
					<img className="box" src="img/box.png"/>
				</div>
			</Section>
		);
	}

});

module.exports = LogoSection;