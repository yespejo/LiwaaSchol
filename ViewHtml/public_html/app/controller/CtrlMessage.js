Ext.define('schoolBus.controller.CtrlMessage', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMessage: 'viewmessage'
        },
        control: {
            "viewmessage #btnReturnMessage": {
                tap: 'btnReturnMessage'
            }
        }
    },
    init: function () {
        ctrlMessage = this;
    },
    btnReturnMessage : function() {
        ctrlMessage.getViewLogin().pop(1);
    }
});