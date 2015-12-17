var React = require('react');
var SlideSection = require('./SlideSection');

var Slide = React.createClass({
	render: function() {
		var self = this;

		var sectionNodes = this.props.sections.map(function (section, idx) {
			return (<SlideSection
				title={section.title}
				text={section.text}
				image={section.image}
				key={idx}
				index={idx}
				onClick={self.props.handleSectionClick.bind(null, section)}
				close={self.props.resetActiveSection.bind(null, section)}
			/>);
		});

		var id = 'slide' + this.props.title;

		return (
			<div className='slide' id={id} onClick={this.resetActiveSection}>
				<h2 className='slide-title'>{this.props.title}</h2>
				<div className='slide-sections'>
					{sectionNodes}
				</div>
			</div>
		);
	}

});

module.exports = Slide;