var React = require('react');

var Section = React.createClass({

	render: function() {
		return (
			<section className={this.props.className} id={this.props.id}>
				<div className="section-content">
					{this.props.children}
				</div>
			</section>
		);
	}

});

module.exports = Section;