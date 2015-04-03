Ext.define('schoolBus.controller.CtrlPassword', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewPassword: 'viewpassword'
        },
        control: {
            "viewpassword #btnPassword": {
                tap: 'btnPassword'
            }
        }
    },
    init: function () {
        ctrlPassword = this;
    },
    btnPassword: function () {
        Ext.Msg.alert('Confirmación','Clave Actualizada');
        viewPassword.hide();
    }
});