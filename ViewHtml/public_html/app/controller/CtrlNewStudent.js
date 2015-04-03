Ext.define('schoolBus.controller.CtrlNewStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewNewStudent: 'viewnewstudent'
        },
        control: {
            "viewnewstudent #btnReturnStudent": {
                tap: 'btnReturnStudent'
            },
            "viewnewstudent #btnSaveStudent": {
                tap: 'btnSaveStudent'
            }
        }
    },
    init: function () {
        ctrlNewStudent = this;
    },
    btnReturnStudent: function () {
        ctrlNewStudent.getViewLogin().pop(1);
    },
    btnSaveStudent: function () {
        ctrlNewStudent.getViewLogin().pop(1);
    }
});