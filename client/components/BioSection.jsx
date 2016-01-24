var React = require('react');

var BioSection = React.createClass({

	render: function() {
		return (
			<div className="bio" id="bioSection">
                <div className='bio-content'>
                    <div className="avatar-container"><img className="avatar" src="img/avatar_placeholder.jpg"/></div>
                    <div className="bio-info">
                        <h1 className="brand-font accent">Brad Forrest</h1>
                        <p>Inventor &amp; Design Consultant</p>
                        <p>919-677-8352</p>
                        <a href="mailto:brad@rain-flex.com">brad@rain-flex.com</a>
                    </div>
                </div>
			</div>
		);
	}

});

module.exports = BioSection;