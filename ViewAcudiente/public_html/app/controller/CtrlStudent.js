Ext.define('schoolBus.controller.CtrlStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewStudent: 'viewstudent'
        },
        control: {
            "viewstudent #btnReturn": {
                tap: 'btnReturn'
            },
            "viewstudent #btnImage": {
                tap: 'btnImage'
            },
            "viewstudent #btnLocationGroup": {
                tap: 'btnLocationGroup'
            },
            "viewstudent #btnSaveStudent": {
                tap: 'btnSaveStudent'
            }
        }
    },
    init: function () {
        ctrlStudent = this;
    },
    btnSaveStudent: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewListStudent = Ext.create('schoolBus.view.ViewListStudent');
        viewLogin.add(viewListStudent);
    },
    btnLocationGroup: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewMapStudent = Ext.create('schoolBus.view.ViewMapStudent');
        viewLogin.add(viewMapStudent);
        viewMapStudent.loadUbication();
    },
    btnReturn: function () {
        ctrlStudent.getViewLogin().pop(1);
    },
    btnImage: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewImageStudent = Ext.create('schoolBus.view.ViewImageStudent');
        viewLogin.add(viewImageStudent);
    }
});