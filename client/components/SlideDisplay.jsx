var React = require('react');

var SlideDisplay = React.createClass({
	html : function () {
		return {
			__html : this.props.section.text
		};
	},

	render : function () {
		if (this.props.section) {
			var imageStyle = { backgroundImage : 'url("' + (this.props.section.image || 'img/bg1.jpg') + '")' };

			return (
				<div className='slide-display-modal active' onClick={this.props.close}>
					<div className='slide-display' style={imageStyle}>
						<div className='slide-display-title' onClick={this.props.close}>{this.props.section.title}</div>
						<div className='slide-display-content' dangerouslySetInnerHTML={this.html()}></div>
					</div>
				</div>
			);
		}
		else {
			return <div className='slide-display-modal'/>
		}
	}
});

module.exports = SlideDisplay;