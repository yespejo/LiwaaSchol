Ext.define('schoolBus.controller.CtrlStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewStudent: 'viewstudent'
        },
        control: {
            "viewstudent #btnReturnStudent": {
                tap: 'btnReturnStudent'
            },
            "viewstudent #btnNewStudent": {
                tap: 'btnNewStudent'
            },
            "viewstudent #btnMessage": {
                tap: 'btnMessage'
            },
            "viewstudent #btnRoute": {
                tap: 'btnRoute'
            },
            "viewstudent #btnCheck": {
                tap: 'btnCheck'
            }
        }
    },
    init: function () {
        ctrlStudent = this;
    },
    btnNewStudent: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewNewStudent = Ext.create('schoolBus.view.ViewNewStudent');
        viewLogin.add(viewNewStudent);
    },
    btnReturnStudent: function () {
        ctrlStudent.getViewLogin().pop(1);
    },
    btnEditStudent: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewEditStudent = Ext.create('schoolBus.view.ViewEditStudent');
        viewLogin.add(viewEditStudent);
    },
    btnDetailStudent: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewDetailStudent = Ext.create('schoolBus.view.ViewDetailStudent');
        viewLogin.add(viewDetailStudent);
        viewDetailStudent.loadUbication();
    },
    btnMessage: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewSendMessageStudent = Ext.create('schoolBus.view.ViewSendMessageStudent');
        viewLogin.add(viewSendMessageStudent);
    },
    btnInvitedStudent: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewInvitedStudent = Ext.create('schoolBus.view.ViewInvitedStudent');
        viewLogin.add(viewInvitedStudent);
    },
    btnMessageStudent: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewMessageStudent = Ext.create('schoolBus.view.ViewMessageStudent');
        viewLogin.add(viewMessageStudent);
    },
    btnRoute: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewMapRoute = Ext.create('schoolBus.view.ViewMapRoute');
        viewLogin.add(viewMapRoute);
        viewMapRoute.loadUbication();
    },
    btnCheck: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewCheckList = Ext.create('schoolBus.view.ViewCheckList');
        viewLogin.add(viewCheckList);
    }
});