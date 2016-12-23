var React = require('react');
var $ = require('zepto');

var Search = React.createClass({

    getInitialState: function() {
        return {searchPlaceholderValue: null, keywords: ''};
    },

    handleKeywordChange: function(event) {
        var currentInputValue = event.target.value;

        this.setState({keywords: currentInputValue});
    },

    handleSubmit: function() {
        var searchKeywords;

        searchKeywords = this.state.keywords
            ? this.state.keywords
            : this.state.searchPlaceholderValue;

        document.location.href = 'http://search.diandong.com/zonghe/?words=' + searchKeywords;
    },

    componentWillMount: function() {
        this.getSearchPlaceholderRequest = $.ajax({
            url: 'http://car.diandong.com/api/getSectionData?sectionid=296',
            data: {},
            dataType: 'jsonp',
            type: 'POST',
            success: function(result) {
                var searchPlaceholderValue = result.data[0].title || '';

                this.setState({searchPlaceholderValue: searchPlaceholderValue});
            }.bind(this)
        });
    },

    componentWillUnmount: function() {
        this.getSearchPlaceholderRequest.abort();
    },

    render: function() {
        return (
            <div className="search-wrapper" id="search-wrapper">
                <div className="search-bar">
                    <input className="search-input" type="text" value={this.state.keywords} onChange={this.handleKeywordChange} placeholder={this.state.searchPlaceholderValue}/>
                    <a className="search-submit-btn" href="javascript:;" onClick={this.handleSubmit}>
                        <i className="icon">&#xe60a;</i>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Search;
