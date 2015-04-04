Ext.define('schoolBus.controller.CtrlEditParent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewEditParent: 'vieweditparent'
        },
        control: {
            "vieweditparent #btnEditParent": {
                tap: 'btnEditParent'
            },
            "vieweditparent #btnReturn": {
                tap: 'btnReturn'
            }
        }
    },
    init: function () {
        ctrlEditParent = this;
    },
    btnEditParent: function () {
        ctrlEditParent.getViewLogin().pop(1);
    },
    btnReturn: function () {
        ctrlEditParent.getViewLogin().pop(1);
    }
});