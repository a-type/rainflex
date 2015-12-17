var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/Header');
var LogoSection = require('./components/LogoSection');
var HookSection = require('./components/HookSection');
var MapSection = require('./components/MapSection');
var Map = require('./components/Map');
var BioSection = require('./components/BioSection');

ReactDOM.render((
	<div className="page">
		<Map/>
		<Header/>
		<LogoSection/>
		<HookSection/>
		<MapSection/>
		<BioSection/>
	</div>
), document.getElementById('main'));