Ext.define('schoolBus.controller.CtrlDetailDriver', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewDetailDriver: 'viewdetaildriver'
        },
        control: {
            "viewdetaildriver #btnReturnDetailDriver": {
                tap: 'btnReturnDetailDriver'
            }
        }
    },
    init: function () {
        ctrlDetailDriver = this;
    },
    btnReturnDetailDriver: function () {
        ctrlDetailDriver.getViewLogin().pop(1);
    }
});