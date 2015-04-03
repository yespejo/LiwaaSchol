Ext.define('schoolBus.controller.CtrlRegroup', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewRegroup: 'viewregroup'
        },
        control: {
            "viewregroup #btnSaveRegroup": {
                tap: 'btnSaveRegroup'
            },
            "viewregroup #btnCancelRegroup": {
                tap: 'btnCancelRegroup'
            }
        }
    },
    init: function () {
        ctrlRegroup = this;
    },
    btnSaveRegroup: function () {
        viewRegroup.hide();
        ctrlRegroup.getViewLogin().pop(2);
    },
    btnCancelRegroup: function () {
        viewRegroup.hide();
    }
});