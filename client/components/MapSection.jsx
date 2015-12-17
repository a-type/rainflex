var React = require('react');
var Section = require('./Section');
var Slide = require('./Slide');
var SlideDisplay = require('./SlideDisplay');

var MapSection = React.createClass({
	getInitialState : function () {
		return {
			slides : require('../data/slides'),
			activeSection : null
		}
	},

	handleSectionClick : function (section, event) {
		event.preventDefault();
		event.stopPropagation();
		this.setState({ activeSection : section });
	},

	resetActiveSection : function (event) {
		event.preventDefault();
		event.stopPropagation();
		this.setState({ activeSection : null });
	},

	render: function() {
		var self = this;
		var slideNodes = this.state.slides.map(function (slide, idx) {
			return (
				<Slide
					sections={slide.sections}
					title={slide.title}
					slideIndex={idx}
					key={idx}
					handleSectionClick={self.handleSectionClick}
					resetActiveSection={self.resetActiveSection}
					/>
			);
		});

		return (
			<Section className="map-section" id="mapSection">
				{slideNodes}
				<SlideDisplay section={this.state.activeSection} close={this.resetActiveSection}/>
			</Section>
		);
	}

});

module.exports = MapSection;