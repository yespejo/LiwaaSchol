Ext.define('schoolBus.controller.CtrlMapRoute', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewMapRoute: 'viewmaproute'
        },
        control: {
            "viewmaproute #btnReturnRoute": {
                tap: 'btnReturnRoute'
            }

        }
    },
    init: function () {
        ctrlMapRoute = this;
    },
    btnReturnRoute: function () {
        ctrlMapRoute.getViewLogin().pop(1);
    }
});