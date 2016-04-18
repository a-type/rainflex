var React = require('react');

var Rotator = React.createClass({
    getInitialState: function () {
        return { index: 0 };
    },

    next: function () {
        var total = this.props.children.length;
        var nextIndex = this.state.index + 1;
        if (nextIndex >= total) {
            nextIndex = 0;
        }

        this.setState({ index: nextIndex });
    },

    prev: function () {
        var total = this.props.children.length;
        var prevIndex = this.state.index - 1;
        if (prevIndex <= -1) {
            prevIndex = total - 1;
        }

        this.setState({ index: prevIndex });
    },

    render: function() {
        var transformStyle = {
            position: 'absolute',
            left: (100 * this.state.index) + '%'
        };

        return (
            <div className='rotator'>
                <div className='rotator-content' style={transformStyle}>
                    {this.props.children}
                </div>
                <div className='rotator-prev' onClick={this.prev}>&lt;</div>
                <div className='rotator-next' onClick={this.next}>&gt;</div>
            </div>
        )
    }
});

module.exports = Rotator;