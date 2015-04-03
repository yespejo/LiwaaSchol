Ext.define('schoolBus.controller.CtrlSendMessageStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewSendMessageStudent: 'viewsendmessagestudent'
        },
        control: {
            "viewsendmessagestudent #btnReturnSendMessageStudent": {
                tap: 'btnReturnSendMessageStudent'
            },
            "viewsendmessagestudent #btnSendMessageStudent": {
                tap: 'btnSendMessageStudent'
            }
            
        }
    },
    init: function () {
        ctrlSendMessageStudent = this;
    },
    btnReturnSendMessageStudent : function() {
        ctrlSendMessageStudent.getViewLogin().pop(1);
    },
    btnSendMessageStudent : function() {
        Ext.Msg.alert('Confirmación','El mensaje ha sido enviado');
        ctrlSendMessageStudent.getViewLogin().pop(1);
    }
});