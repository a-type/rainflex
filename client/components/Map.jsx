var React = require('react');

var Map = React.createClass({

	render: function() {
		return (
			<div className='map'>
				<a className='map-link' href='#logoSection'><i className='fa fa-arrow-up'/></a>
				<div className='map-system'>
					<img src='img/map.svg' className='map-image'/>
					<a className='map-link' href='#slideCollector'><div className='system-tooltip'>Collector</div></a>
					<a className='map-link' href='#slideStorage'><div className='system-tooltip'>Storage</div></a>
					<a className='map-link' href='#slideSiphon'><div className='system-tooltip'>Siphon</div></a>
				</div>
				<a className='map-link' href='#bioSection'><i className='fa fa-user'/></a>
			</div>
		);
	}

});

module.exports = Map;