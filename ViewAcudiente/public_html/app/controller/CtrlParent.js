Ext.define('schoolBus.controller.CtrlParent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewParent: 'viewparent'
        },
        control: {
            "viewlogin #btnSaveParent": {
                tap: 'btnSaveParent'
            }
        }
    },
    init: function () {
        ctrlParent = this;
    },
    btnSaveParent: function () {
        viewLogin = ctrlLogin.getViewLogin();
        viewStudent = Ext.create('schoolBus.view.ViewStudent');
        viewLogin.add(viewStudent);
    }
});