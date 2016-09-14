define(['text'], function(text) {
    var go = function (arg, vm) {
        if(arg.indexOf('search') === 1) {
            require(['./modules/searchDemo', 'text!../templates/searchDemo.html'], function(nowModel, tpl) {
                nowModel.initFunc();
                vm.componentTpl = tpl;
            });
        } else {
            vm.componentTpl = '';
        }
    }
    return {go: go};
});