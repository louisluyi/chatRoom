/**
 * Created by luyi-netease on 2016/5/16.
 */
'use strict';
const loginController = {
    //登录页面
    login:function(req, res){

    },
    checkLogin:function(req, res){

    }
}

module.exports =  function(app){
    app.get('/login', loginController.login);
    app.post('/login/check', loginController.checkLogin);
};