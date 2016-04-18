var React = require('react');
var Section = require('./Section');
var Rotator = require('./Rotator');

var HookSection = React.createClass({

	render: function() {
		return (
			<Section className="section-bg hook-section" id="hookSection">
                <div>The simple,<br/>efficient,<br/><span className="accent">flexible</span><br/>rainwater collection solution.
                </div>
			</Section>
		);
	}

});

module.exports = HookSection;