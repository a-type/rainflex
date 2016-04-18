var React = require('react');

var SlideDisplay = React.createClass({
	html : function (sub) {
		return {
			__html : sub.text
		};
	},

    shortCircuit : function (e) {
        e.stopPropagation();
    },

	render : function () {
        var self = this;
		if (this.props.section) {
            var subsections = this.props.section.subsections.map(function (sub, idx) {
                return (<div className='slide-section-subsection' key={idx}>
                    <div className='slide-display-title'>{sub.title}</div>
                    <div className='slide-display-text' dangerouslySetInnerHTML={self.html(sub)} onClick={self.shortCircuit}/>
                </div>);
            });

			return (
				<div className='slide-display-modal active' onClick={this.props.close}>
					<div className='slide-display'>
						<div className='slide-display-content'>
                            {subsections}
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