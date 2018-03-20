/**
 * Created by yiyang1990 on 2017/3/21.
 */

let storageKeyName = {};

let appName = 'vueRedmine';

storageKeyName.appName = appName;

storageKeyName.loginInfo = `${appName}_loginInfo`; //登录信息（用户名、密码）

storageKeyName.userInfo = `${appName}_userInfo`;  //用户信息

storageKeyName.menuItemIndex = `${appName}_menuItemIndex`; //顶部菜单选项索引

export default storageKeyName;
