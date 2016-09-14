define(function () {
    var isLocal = window.location.hostname.toLowerCase() === 'localhost',
        origin = window.location.protocol + '//' + window.location.host + '/';
    var urlObj = {
        'GET_LIST_DATA': 'test/list'
    };
    var getUrl = function (arg) {
        var url = urlObj[arg];
        url = (isLocal ? 'mokedatas/' : origin) + url + (isLocal ? '.json' : '');
        return url;
    };
    return {getUrl: getUrl};
});