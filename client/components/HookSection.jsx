var React = require('react');
var Section = require('./Section');

var HookSection = React.createClass({

	render: function() {
		return (
			<Section className="section-bg hook-section" id="hookSection">
				The simple,<br/>efficient,<br/><span style={{ fontFamily: 'inherit' }} className="accent">flexible</span><br/>rainwater collection solution.
			</Section>
		);
	}

});

module.exports = HookSection;