Ext.define('schoolBus.controller.CtrlProfileUpdate', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            ctrlProfileUpdate: 'ctrlprofileupdate'
        },
        control: {
            "viewprofileupdate #btnReturn": {
                tap: 'btnReturn'
            },
            "viewprofileupdate #btnPassword": {
                tap: 'btnPassword'
            },
            "viewprofileupdate #btnSave": {
                tap: 'btnSave'
            },
            "viewprofileupdate #btnDelete": {
                tap: 'btnDelete'
            }
        }
    },
    init: function () {
        ctrlProfileUpdate = this;
    },
    btnReturn: function () {
        ctrlProfileUpdate.getViewLogin().pop(1);
    },
    btnPassword: function () {
        viewLogin = ctrlProfileUpdate.getViewLogin();
        viewPassword = Ext.create('schoolBus.view.ViewPassword');
        viewLogin.add(viewPassword);
    },
    btnSave: function () {
        ctrlProfileUpdate.getViewLogin().pop(1);
    },
    btnDelete: function () {
        Ext.Msg.confirm('Confirmación', '¿Esta seguro que desea borrar la cuenta?', function (btn, text) {
            if (btn === 'yes') {
                ctrlProfileUpdate.getViewLogin().reset();
            }
        });
    }
});