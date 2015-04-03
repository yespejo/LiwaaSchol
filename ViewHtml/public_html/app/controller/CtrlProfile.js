Ext.define('schoolBus.controller.CtrlProfile', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewProfile: 'viewprofile'
        },
        control: {
            "viewprofile #btnReturn": {
                tap: 'btnReturn'
            },
            "viewprofile #btnGroup": {
                tap: 'btnGroup'
            }

        }
    },
    init: function () {
        ctrlProfile = this;
    },
    btnReturn: function () {
        ctrlProfile.getViewLogin().pop(1);
    },
    btnGroup: function (){
        viewLogin = ctrlProfile.getViewLogin();
        viewGroup = Ext.create('schoolBus.view.ViewGroup');
        viewLogin.add(viewGroup);
    }
});