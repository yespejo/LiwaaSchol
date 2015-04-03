Ext.define('schoolBus.controller.CtrlEditGroup', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewGroup: 'vieweditgroup'
        },
        control: {
            "vieweditgroup #btnNewGroup": {
                tap: 'btnNewGroup'
            },
            "vieweditgroup #btnReturnGroup": {
                tap: 'btnReturnGroup'
            },
            "vieweditgroup #btnLocationGroup": {
                tap: 'btnLocationGroup'
            },
            "vieweditgroup #btnDeleteGroup": {
                tap: 'btnDeleteGroup'
            }
            
        }
    },
    init: function () {
        ctrlEditGroup = this;
    },
    btnNewGroup: function () {
        ctrlEditGroup.getViewLogin().pop(1);
    },
    btnReturnGroup: function () {
        ctrlEditGroup.getViewLogin().pop(1);
    },
    btnLocationGroup: function() {
        viewLogin = ctrlEditGroup.getViewLogin();
        viewMapGroupEdit = Ext.create('schoolBus.view.ViewMapGroupEdit');
        viewLogin.add(viewMapGroupEdit);
        viewMapGroupEdit.loadUbication();
    },
    btnDeleteGroup : function() {
        Ext.Msg.confirm('Confirmación', '¿Esta seguro que desea eliminar este grupo?', function (btn, text) {
            if (btn === 'yes') {
                ctrlEditGroup.getViewLogin().pop(1);
            }
        });
    }
});