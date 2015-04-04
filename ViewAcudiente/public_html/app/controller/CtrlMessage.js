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
            },
            "viewmessage #btnDriver": {
                tap: 'btnDriver'
            },
            "viewmessage #btnRoute": {
                tap: 'btnRoute'
            },
            "viewmessage #btnInfor": {
                tap: 'btnInfor'
            },
            "viewmessage #btnNewMessage": {
                tap: 'btnNewMessage'
            }

        }
    },
    init: function () {
        ctrlMessage = this;
    },
    btnInfor: function () {
        viewLogin = ctrlMessage.getViewLogin();
        viewStudentEdit = Ext.create('schoolBus.view.ViewStudentEdit');
        viewLogin.add(viewStudentEdit);
    },
    btnRoute: function () {
        viewLogin = ctrlMessage.getViewLogin();
        viewMapRoute = Ext.create('schoolBus.view.ViewMapRoute');
        viewLogin.add(viewMapRoute);
    },
    btnDriver: function () {
        viewLogin = ctrlMessage.getViewLogin();
        viewDetailDriver = Ext.create('schoolBus.view.ViewDetailDriver');
        viewLogin.add(viewDetailDriver);
    },
    btnReturnMessage: function () {
        ctrlMessage.getViewLogin().pop(1);
    },
    btnNewMessage: function () {
        viewLogin = ctrlMessage.getViewLogin();
        viewSendMessage = Ext.create('schoolBus.view.ViewSendMessage');
        viewLogin.add(viewSendMessage);
    }
});