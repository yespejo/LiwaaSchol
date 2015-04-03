Ext.define('schoolBus.controller.CtrlInvitedStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewInvitedStudent: 'viewinvitedstudent'
        },
        control: {
            "viewinvitedstudent #btnReturnInvitedStudent": {
                tap: 'btnReturnInvitedStudent'
            },
            "viewinvitedstudent #btnMessageInvited": {
                tap: 'btnMessageInvited'
            },
            "viewinvitedstudent #btnGroupInvited": {
                tap: 'btnGroupInvited'
            }
        }
    },
    init: function () {
        ctrlInvitedStudent = this;
    },
    btnReturnInvitedStudent: function () {
        ctrlInvitedStudent.getViewLogin().pop(1);
    },
    btnMessageInvited: function () {
        viewLogin = ctrlInvitedStudent.getViewLogin();
        viewSendMessageStudent = Ext.create('schoolBus.view.ViewSendMessageStudent');
        viewLogin.add(viewSendMessageStudent);
    },
    btnGroupInvited: function () {
        viewLogin = ctrlInvitedStudent.getViewLogin();
        viewRegroup = Ext.create('schoolBus.view.ViewRegroup');
        viewLogin.add(viewRegroup);
    }
});