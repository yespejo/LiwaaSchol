Ext.define('schoolBus.controller.CtrlNewGroup', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewGroup: 'viewnewgroup'
        },
        control: {
            "viewnewgroup #btnNewGroup": {
                tap: 'btnNewGroup'
            },
            "viewnewgroup #btnReturnGroup": {
                tap: 'btnReturnGroup'
            },
            "viewnewgroup #btnLocationGroup": {
                tap: 'btnLocationGroup'
            }
        }
    },
    init: function () {
        ctrlNewGroup = this;
    },
    btnNewGroup: function () {
        ctrlNewGroup.getViewLogin().pop(1);
    },
    btnReturnGroup: function () {
        ctrlNewGroup.getViewLogin().pop(1);
    },
    btnLocationGroup: function() {
        viewLogin = ctrlNewGroup.getViewLogin();
        viewMapGroup = Ext.create('schoolBus.view.ViewMapGroup');
        viewLogin.add(viewMapGroup);
        viewMapGroup.loadUbication();
    }
});