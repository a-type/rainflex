var React = require('react');

var INACTIVE_HEIGHT = 120;
var INACTIVE_SPACING = 20;

var SlideSection = React.createClass({
	render: function() {
		var className = 'slide-section ' + (this.props.active ? 'slide-section-active' : '');
		var imageStyle = { backgroundImage : 'url("' + (this.props.image || 'img/bg1.jpg') + '")' };

		return (
			<div className={className} onClick={this.props.onClick} style={imageStyle}>
				<div className='slide-section-title' onClick={this.props.close}><h3>{this.props.title}</h3></div>
			</div>
		);
	}
});

module.exports = SlideSection;