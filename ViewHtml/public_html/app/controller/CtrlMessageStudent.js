Ext.define('schoolBus.controller.CtrlMessageStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMessageStudent: 'viewmessagestudent'
        },
        control: {
            "viewmessagestudent #btnReturnMessageStudent": {
                tap: 'btnReturnMessageStudent'
            }
        }
    },
    init: function () {
        ctrlMessageStudent = this;
    },
    btnReturnMessageStudent : function() {
        ctrlMessageStudent.getViewLogin().pop(1);
    }
});