/**
 * Created by yiyang1990 on 2017/3/19.
 */

let PMT = {
    _PMT: this.PMT,
    _util: {},              // 帮助类对象
    _data: {},              // 数据库操作类对象
    isdebug: true,          // 调试模式 [非调试模式false]
    isdebuggap: false,      // 是否开启debuggap [默认不开启false]
    _config: {
        baseUrl: '',         // 站点根目录
        // interfaceUrl: 'http://192.168.100.132:90',     //版本根目录
        // interfaceUrl: 'http://192.168.101.146:90',     //版本根目录
        interfaceUrl:'http://pmo.esyun.cn/90',  //版本根目录
        siteUrl:'http://192.168.101.110:8080/tfs/web/UI/Pages/WorkItems/', //bug地址
        service1:'/Service1.svc',
        service2:'/Service2.svc',
        // interfaceUrl2: 'http://192.168.99.140:52192/api',
        // interfaceUrl2: 'http://192.168.101.49:81/api',
        interfaceUrl2: 'http://pmo.ewaytec.cn/api',
        // interfaceUrl2: 'http://192.168.98.19:52192/api',
        // interfaceUrl2: 'http://192.168.98.118:52192/api',
        // interfaceUrl2: 'http://192.168.99.126:52192/api',
        // interfaceUrl2: 'http://192.168.98.202:52192/api',
        marketingId: 1,
        // 用于原生应用鉴权参数配置
        PARAMS: {
            CLIENT_ID: '1000',
            RESPONSE_TYPE: 'code',
            REDIRECT_URI: 'eap://app?url=src/Default.html'
        }
    }
};

/**
 * 接口配置(增加配置时注意格式)
 */
(function (config) {
    /**********************************************公共接口****************************************************/
    // 项目列表接口
    config.ProjectList = config.interfaceUrl + config.service1 +'/GetProjects';
})(PMT._config);

export default PMT;