Ext.define('schoolBus.controller.CtrlMapStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMapStudent: 'viewmapstudent'
        },
        control: {
            "viewmapstudent #btnReturnLocationGroup": {
                tap: 'btnReturnLocationGroup'
            },
            "viewmapstudent #btnNewLocationGroup": {
                tap: 'btnNewLocationGroup'
            }

        }
    },
    init: function () {
        ctrlMapStudent = this;
    },
    btnReturnLocationGroup: function () {
        ctrlMapStudent.getViewLogin().pop(1);
    },
    btnNewLocationGroup: function () {
        ctrlMapStudent.getViewLogin().pop(1);
    }
});