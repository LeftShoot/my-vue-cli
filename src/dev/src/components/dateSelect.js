/**
 * Created by yiyang1990 on 2017/4/20.
 */
let dateSelect = [];

var install = function install(Vue) {
    Vue.component('ew-dateselect',{
        template: '<div>123</div>'
    });
}

if(typeof window!== 'undefined' && window.Vue){
    install(window.Vue);
}

export default dateSelect
