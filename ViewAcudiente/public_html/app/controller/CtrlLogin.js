Ext.define('schoolBus.controller.CtrlLogin', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin'
        },
        control: {
            "viewlogin #btnLoginButton": {
                tap: 'btnLoginButton'
            }
        }
    },
    init: function () {
        ctrlLogin = this;
    },
    btnLoginButton: function () {
        viewLogin = ctrlLogin.getViewLogin();
        viewParent = Ext.create('schoolBus.view.ViewParent');
        viewLogin.add(viewParent);
    }
});