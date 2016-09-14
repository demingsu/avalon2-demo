define(['mapping'],function(mapping) {
    var vm = avalon.define({
        $id: 'searchCtrl',
        pageData: {
            arr0: [],
            arr1: [],
            arr2: [],
            arr3: [],
            arrAuto: []
        },
        autoData: '1234',
        initFunc: function(){
            $.ajax({
                method: 'POST',
                dataType: 'json',
                url: mapping.getUrl('GET_LIST_DATA'),
                success: function(data) {
                    vm.pageData.arr0 = data.model.arr0;
                    vm.pageData.arr1 = data.model.arr1;
                    vm.pageData.arr2 = data.model.arr2;
                    vm.pageData.arr3 = data.model.arr3;
                },
                error: function() { avalon.log('ajax error...'); }
            });

            var arr = [];
            for(var i = 0;i < 2800;i ++){
                var s = '';
                for(var k = 0;k < 3;k ++){
                    var rand = Math.random()*(21234-20000) + 20000;
                    s += String.fromCharCode(rand);
                    rand = Math.random()*(19000-16000) + 16000;
                    s += String.fromCharCode(rand);
                }
                arr.push({id: s});
            }
        }
    });
    vm.$watch('autoData', function(arg0){
        vm.pageData.arrAuto = [];
        var data = vm.$model.pageData.arr3;
        for(var i = 0;i < data.length;i ++) {
            if(data[i].id.indexOf(arg0) > -1) {
                vm.pageData.arrAuto.push(data[i]);
            }
            if(vm.pageData.arrAuto.length > 10) break;
        }
    });
    return vm;
});