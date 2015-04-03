Ext.define('schoolBus.controller.CtrlSendMessage', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewSendMessage: 'viewsendmessage'
        },
        control: {
            "viewsendmessage #btnReturnSendMessage": {
                tap: 'btnReturnSendMessage'
            },
            "viewsendmessage #btnSendMessage": {
                tap: 'btnSendMessage'
            }
            
        }
    },
    init: function () {
        ctrlSendMessage = this;
    },
    btnReturnSendMessage : function() {
        ctrlSendMessage.getViewLogin().pop(1);
    },
    btnSendMessage : function() {
        Ext.Msg.alert('Confirmación','El mensaje ha sido enviado');
        ctrlSendMessage.getViewLogin().pop(1);
    }
});