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
    btnReturnSendMessage: function () {
        ctrlSendMessage.getViewLogin().pop(1);
    },
    btnSendMessage: function () {
        viewLogin = ctrlSendMessage.getViewLogin();
        viewDate = Ext.create('schoolBus.view.ViewDate');
        viewLogin.add(viewDate);
    }
});