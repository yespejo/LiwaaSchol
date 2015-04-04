Ext.define('schoolBus.controller.CtrlConfig', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewConfig: 'viewconfig'
        },
        control: {
            "viewconfig #btnReturnConfig": {
                tap: 'btnReturnConfig'
            },
            "viewconfig #btnSaveConfig": {
                tap: 'btnSaveConfig'
            }
        }
    },
    init: function () {
        ctrlConfig = this;
    },
    btnReturnConfig: function () {
        ctrlConfig.getViewLogin().pop(1);
    },
    btnSaveConfig: function () {
        ctrlConfig.getViewLogin().pop(1);
    }
});