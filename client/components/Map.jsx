var React = require('react');

var Map = React.createClass({

	render: function() {
		return (
			<div className='map'>
				<a className='map-link' href='#logoSection'><i className='fa fa-arrow-up'/><div className='tooltip'>Top</div></a>
				<div className='map-system'>
					<img src='img/map.svg' className='map-image'/>
					<a className='map-link' href='#slideCollector'><div className='tooltip'>Collector</div></a>
					<a className='map-link' href='#slideStorage'><div className='tooltip'>Storage</div></a>
					<a className='map-link' href='#slideSiphon'><div className='tooltip'>Siphon</div></a>
				</div>
				<a className='map-link' href='#bioSection'><i className='fa fa-user'/><div className='tooltip'>Inventor</div></a>
			</div>
		);
	}

});

module.exports = Map;