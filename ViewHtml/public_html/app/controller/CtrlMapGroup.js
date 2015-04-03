Ext.define('schoolBus.controller.CtrlMapGroup', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMapGroup: 'viewmapgroup'
        },
        control: {
            "viewmapgroup #btnReturnLocationGroup": {
                tap: 'btnReturnLocationGroup'
            },
            "viewmapgroup #btnNewLocationGroup": {
                tap: 'btnNewLocationGroup'
            }

        }
    },
    init: function () {
        ctrlMapGroup = this;
    },
    btnReturnLocationGroup: function () {
        ctrlMapGroup.getViewLogin().pop(1);
    },
    btnNewLocationGroup: function () {
        ctrlMapGroup.getViewLogin().pop(1);
    }
});