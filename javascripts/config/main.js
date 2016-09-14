require.config({
    baseUrl: 'javascripts/',
    paths: {
        jquery: 'core/main/jquery.min',
        bootstrap: 'core/main/bootstrap',
        avalon: 'core/main/avalon',
        mmHistory: 'core/main/mmHistory',
        mmRouter: 'core/main/mmRouter',
        domReady: 'core/main/domReady',
        text: 'core/main/text',
        redirect: 'config/redirect',
        mapping: 'config/mapping'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        avalon: {
            exports: 'avalon'
        },
        mmHistory: {
            deps: ['avalon'],
            exports: 'mmHistory'
        },
        mmRouter: {
            deps: ['mmHistory'],
            exports: 'mmRouter'
        },
        domReady: {
            exports: 'domReady'
        },
        text: {
            exports: 'text'
        },
        redirect: {
            exports: 'redirect'
        },
        mapping: {
            exports: 'mapping'
        }
    },
    waitSeconds: 0
});
require(['mapping', 'redirect', 'mmRouter', 'bootstrap', 'domReady!'], function(mapping, redirect){
    var vm = avalon.define({
        $id: 'mainCtrl',
        componentTpl: ''
    });
    var urlCallback = function(){
        var _path = this.path;
        redirect.go(_path, vm);
    }
    avalon.router.get('/*path', urlCallback);
    avalon.history.start();
    avalon.scan(document.body);
});