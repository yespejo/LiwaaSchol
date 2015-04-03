Ext.define('schoolBus.controller.CtrlMapGroupEdit', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMapGroup: 'viewmapgroupedit'
        },
        control: {
            "viewmapgroupedit #btnReturnLocationGroup": {
                tap: 'btnReturnLocationGroup'
            },
            "viewmapgroupedit #btnNewLocationGroup": {
                tap: 'btnNewLocationGroup'
            }

        }
    },
    init: function () {
        ctrlMapGroupEdit = this;
    },
    btnReturnLocationGroup: function () {
        ctrlMapGroupEdit.getViewLogin().pop(1);
    },
    btnNewLocationGroup: function () {
        ctrlMapGroupEdit.getViewLogin().pop(1);
    }
});