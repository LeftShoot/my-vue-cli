/**
 * Created by asus on 2018/1/4.
 */

import storageKeyName from '../storageKeyName.js'

// 权限控制合并汇总
import cxoConfig from './cxoConfig'
import dmConfig from './dmConfig'
import pmConfig from './pmConfig'
import pmoConfig from './pmoConfig'
import prConfig from './prConfig'
import salesConfig from './salesConfig'

export default function configIndex() {
    let userInfo = JSON.parse(sessionStorage.getItem(storageKeyName.userInfo))
    let userRoles = userInfo.Roles;

    let rolesArr = userRoles.split(',');

    let mixinsConfigArr = [];

    rolesArr.map(function (item) {
        switch (item){
            case '销售':
                mixinsConfigArr.push(salesConfig);
                break;
            case '项目管理':
                mixinsConfigArr.push(pmConfig);
                break;
            case '总监':
                mixinsConfigArr.push(cxoConfig);
                break;
            case '项目负责人':
                mixinsConfigArr.push(prConfig);
                break;
            case 'PMO':
                mixinsConfigArr.push(pmoConfig);
                break;
            case '部门管理':
                mixinsConfigArr.push(dmConfig);
                break;
            default:
                mixinsConfigArr.push(salesConfig);
                break;
        }
    })


    if(mixinsConfigArr.length == 1){
        return mixinsConfigArr[0];
    }
    
    let newMixinsConfig = {};
    
    mixinsConfigArr.map(function (item, index) {
         if(index <= mixinsConfigArr.length - 2){
             for(var i in mixinsConfigArr[index]){
                  if(mixinsConfigArr[index][i] != mixinsConfigArr[index + 1][i]){
                      newMixinsConfig[i] = true;
                  }else {
                      newMixinsConfig[i] = mixinsConfigArr[index][i];
                  }
             }
         }
    })

    return newMixinsConfig;

}


