Ext.define('schoolBus.controller.CtrlCheckList', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewCheckList: 'viewchecklist'
        },
        control: {
            "viewchecklist #btnReturnCheckList": {
                tap: 'btnReturnCheckList'
            },
            "viewchecklist #btnSaveChecklist": {
                tap: 'btnSaveChecklist'
            }
        }
    },
    init: function () {
        ctrlCheckList = this;
    },
    btnReturnCheckList: function () {
        ctrlCheckList.getViewLogin().pop(1);
    },
    btnSaveChecklist: function () {
        ctrlCheckList.getViewLogin().pop(1);
    }
});