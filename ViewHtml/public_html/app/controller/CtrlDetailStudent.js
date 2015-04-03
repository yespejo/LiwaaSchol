Ext.define('schoolBus.controller.CtrlDetailStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewDetailStudent: 'viewdetailstudent'
        },
        control: {
            "viewdetailstudent #btnReturnDetailStudent": {
                tap: 'btnReturnDetailStudent'
            },
            "viewdetailstudent #btnImageStudent": {
                tap: 'btnImageStudent'
            },
            "viewdetailstudent #btnMessageDetail": {
                tap: 'btnMessageDetail'
            },
            "viewdetailstudent #btnGroupDetail": {
                tap: 'btnGroupDetail'
            }
        }
    },
    init: function () {
        ctrlDetailStudent = this;
    },
    btnReturnDetailStudent: function () {
        ctrlDetailStudent.getViewLogin().pop(1);
    },
    btnImageStudent: function () {
        viewLogin = ctrlDetailStudent.getViewLogin();
        viewImageStudent = Ext.create('schoolBus.view.ViewImageStudent');
        viewLogin.add(viewImageStudent);
    },
    btnMessageDetail: function () {
        viewLogin = ctrlDetailStudent.getViewLogin();
        viewSendMessageStudent = Ext.create('schoolBus.view.ViewSendMessageStudent');
        viewLogin.add(viewSendMessageStudent);
    },
    btnGroupDetail: function () {
        viewLogin = ctrlDetailStudent.getViewLogin();
        viewRegroup = Ext.create('schoolBus.view.ViewRegroup');
        viewLogin.add(viewRegroup);
    }
});