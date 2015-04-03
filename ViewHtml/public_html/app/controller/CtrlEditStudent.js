Ext.define('schoolBus.controller.CtrlEditStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewEditStudent: 'vieweditstudent'
        },
        control: {
            "vieweditstudent #btnEditStudent": {
                tap: 'btnEditStudent'
            },
            "vieweditstudent #btnDisableStudent": {
                tap: 'btnDisableStudent'
            },
            "vieweditstudent #btnDeleteStudent": {
                tap: 'btnDeleteStudent'
            },
            "vieweditstudent #btnReturnEditStudent": {
                tap: 'btnReturnEditStudent'
            }
        }
    },
    init: function () {
        ctrlEditStudent = this;
    },
    btnReturnEditStudent: function () {
        ctrlEditStudent.getViewLogin().pop(1);
    },
    btnEditStudent: function () {
        ctrlEditStudent.getViewLogin().pop(1);
    },
    btnDisableStudent: function () {
        Ext.Msg.confirm('Confirmación', '¿Esta seguro que desea inhabilitar esta persona?', function (btn, text) {
            if (btn === 'yes') {
                ctrlEditStudent.getViewLogin().pop(1);
            }
        });
    },
    btnDeleteStudent: function () {
        Ext.Msg.confirm('Confirmación', '¿Esta seguro que desea borrar este registro?', function (btn, text) {
            if (btn === 'yes') {
                ctrlEditStudent.getViewLogin().pop(1);
            }
        });
    }
});