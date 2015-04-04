Ext.define('schoolBus.controller.CtrlMapStudentEdit', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMapStudentEdit: 'viewmapstudentedit'
        },
        control: {
            "viewmapstudentedit #btnReturnLocationEdit": {
                tap: 'btnReturnLocationEdit'
            },
            "viewmapstudentedit #btnNewLocationEdit": {
                tap: 'btnNewLocationEdit'
            }

        }
    },
    init: function () {
        ctrlMapStudentEdit = this;
    },
    btnReturnLocationEdit: function () {
        ctrlMapStudentEdit.getViewLogin().pop(1);
    },
    btnNewLocationEdit: function () {
        ctrlMapStudentEdit.getViewLogin().pop(1);
    }
});