/**
 * Created by yiyang1990 on 2017/4/26.
 */
import axios from 'axios'
import storageKeyName from './storageKeyName.js'
import PMT from '../config.js'
import userInfo from './userInfo.js'

function makeJsonData(mData) {
    if(!mData){
        return false;
    }

    for (var item in mData){
        let thisItem = mData[item];

        if(thisItem instanceof Array){

            // for
            // debugger;
        }
    }
}

let customAjax = function(){
    this.http = null; //http实体

    this.appName = storageKeyName.appName; //appName

    this.keyNameArray = JSON.parse(sessionStorage.getItem(this.appName + '_cacheKeyName')) || [this.appName + '_cacheKeyName'];

    //Get请求模式
    this.get = function (instance, params, successCallback, invalidCallback, failCallback) {
        var that = this;
        var cacheKeyName = that.setCacheKeyName(instance.cacheKeyName)
        var isCacheMode = Boolean(cacheKeyName);

        var isloading = instance.hasOwnProperty('that');

        isloading && (instance.that.tableLoading = true);

        let user =  userInfo.getInfo(JSON.parse(sessionStorage.getItem(storageKeyName.userInfo)));

        if(instance.url !=  PMT._config.Login){
            // params.Token = user.Token || '1269fff0-7ec7-430e-aa39-ae5fb2ad9e45';
            instance.url += `?Token=${(user.Token || '')}`;
        }

        if(!this.prepare(cacheKeyName)){
            this.http.get(instance.url, { params: params }).then(m => {
                let result = m.data;

                if(result.IsCompleted){
                    if(isCacheMode){
                        sessionStorage.setItem(cacheKeyName, JSON.stringify(result));
                        that.keyNameArray.push(cacheKeyName);
                        sessionStorage.setItem(that.appName + '_cacheKeyName',JSON.stringify(that.keyNameArray));
                    }
                    // makeJsonData(result);
                    successCallback(result);
                }else{
                    invalidCallback(result);
                }
                setTimeout(function () {
                    isloading && (instance.that.tableLoading = false);
                },1000)

            }).catch(e => {
                failCallback(e)
                setTimeout(function () {
                    isloading && (instance.that.tableLoading = false);
                },1000)
            });
        }else {
            successCallback(this.prepare(cacheKeyName)) //读取缓存数据
            setTimeout(function () {
                isloading && (instance.that.tableLoading = false);
            },1000)
        }
    }

    //Post请求模式
    this.post = function (instance, params, successCallback, invalidCallback, failCallback) {
        let user =  userInfo.getInfo(JSON.parse(sessionStorage.getItem(storageKeyName.userInfo)));

        if(instance.url !=  PMT._config.Login){
            // params.Token = user.Token || '1269fff0-7ec7-430e-aa39-ae5fb2ad9e45';
            instance.url += `?Token=${(user.Token || '')}`;
        }

         this.http.post(instance.url, params).then(m => {
             if(m.data.IsCompleted){
                 successCallback(m.data);
             }else{
                 invalidCallback(m.data);
             }
         }).catch(e => {
             failCallback();
         });
    }

    //请求处理模式
    this.prepare = function (cacheKeyName) {
        var isCacheMode = cacheKeyName ? true : false;
        var cacheData = null;

        if(isCacheMode){
            var cache = sessionStorage.getItem(cacheKeyName);

            if(cache) {
                cacheData = JSON.parse(cache);
            }
        }
        return cacheData
    }

    //设置缓存key值
    this.setCacheKeyName = function (cacheKeyName) {
        let keyname = '';

        if(typeof cacheKeyName == 'string' && cacheKeyName.substr(0,1) == '_'){
            keyname = this.appName + cacheKeyName;
        }else{
            keyname = cacheKeyName;
        }

        return keyname
    }

    //缓存清理
    this.clearCache = function () {
        var arr = JSON.parse(sessionStorage.getItem(this.appName + '_cacheKeyName'));

        arr && arr.forEach(function (item) {
            sessionStorage.removeItem(item);
        })
    }

    //初始化函数
    this.init = function (http) {
        if(http){
            this.http = http;
        }
    }

    //执行初始化
    this.init(axios);
};

export default new customAjax()
