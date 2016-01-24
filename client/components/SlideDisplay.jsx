var React = require('react');

var SlideDisplay = React.createClass({
	html : function () {
		return {
			__html : this.props.section.text
		};
	},
    
    shortCircuit : function (e) {
        e.stopPropagation();
    },

	render : function () {
		if (this.props.section) {
			return (
				<div className='slide-display-modal active' onClick={this.props.close}>
					<div className='slide-display'>
						<div className='slide-display-content'>
                            <div className='slide-display-title' onClick={this.props.close}>{this.props.section.title}</div>
                            <div className='slide-display-text' dangerouslySetInnerHTML={this.html()} onClick={this.shortCircuit}/>
                        </div>
                        <div className='slide-display-image-container'>
                           <img className='slide-display-image' src={this.props.section.image || 'img/bg1.jpg'} />
                        </div>
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