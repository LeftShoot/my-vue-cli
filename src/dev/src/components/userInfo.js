/**
 * Created by yiyang on 2017/4/18.
 */

let userInfo = {};

userInfo.getInfo = function (info) {

    if( info && typeof info == 'object'){
        return info
    }
    return {}
}

export default userInfo;
