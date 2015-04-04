Ext.define('schoolBus.controller.CtrlStudentEdit', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewStudentEdit: 'viewstudentedit'
        },
        control: {
            "viewstudentedit #btnReturnEdit": {
                tap: 'btnReturnEdit'
            },
            "viewstudentedit #btnImage": {
                tap: 'btnImage'
            },
            "viewstudentedit #btnLocationEdit": {
                tap: 'btnLocationEdit'
            },
            "viewstudentedit #btnSaveStudentEdit": {
                tap: 'btnSaveStudentEdit'
            }
        }
    },
    init: function () {
        ctrlStudentEdit = this;
    },
    btnSaveStudentEdit: function () {
        ctrlStudentEdit.getViewLogin().pop(1);
    },
    btnLocationEdit: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewMapStudentEdit = Ext.create('schoolBus.view.ViewMapStudentEdit');
        viewLogin.add(viewMapStudentEdit);
        viewMapStudentEdit.loadUbication();
    },
    btnReturnEdit: function () {
        ctrlStudentEdit.getViewLogin().pop(1);
    },
    btnImage: function () {
        viewLogin = ctrlStudent.getViewLogin();
        viewImageStudent = Ext.create('schoolBus.view.ViewImageStudent');
        viewLogin.add(viewImageStudent);
    }
});