Ext.define('schoolBus.controller.CtrlDate', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewDate: 'viewdate'
        },
        control: {
            "viewdate #btnCancelDate": {
                tap: 'btnCancelDate'
            },
            "viewdate #btnSaveDate": {
                tap: 'btnSaveDate'
            }
        }
    },
    init: function () {
        ctrlDate = this;
    },
    btnCancelDate: function () {
        viewDate.hide();
    },
    btnSaveDate: function () {
        viewDate.hide();
        Ext.Msg.alert('Confirmación','El mensaje ha sido enviado');
        ctrlDate.getViewLogin().pop(1);
    }
});