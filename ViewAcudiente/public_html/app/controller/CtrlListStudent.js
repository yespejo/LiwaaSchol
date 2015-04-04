Ext.define('schoolBus.controller.CtrlListStudent', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewListStudent: 'viewliststudent'
        },
        control: {
            "viewliststudent #btnMenu": {
                tap: 'btnMenu'
            }
        }
    },
    init: function () {
        ctrlListStudent = this;
    },
    btnMenu: function () {
        Ext.Viewport.toggleMenu('left');
        document.getElementById("btnConfig").onclick = function () {
            Ext.Viewport.toggleMenu('left');
            viewLogin = ctrlListStudent.getViewLogin();
            viewConfig = Ext.create('schoolBus.view.ViewConfig');
            viewLogin.add(viewConfig);
        };
        document.getElementById("btnUpdateParent").onclick = function () {
            Ext.Viewport.toggleMenu('left');
            viewLogin = ctrlListStudent.getViewLogin();
            viewEditParent = Ext.create('schoolBus.view.ViewEditParent');
            viewLogin.add(viewEditParent);
        };
    },
    btnMessageStudent: function () {
        viewLogin = ctrlListStudent.getViewLogin();
        viewMessage = Ext.create('schoolBus.view.ViewMessage');
        viewLogin.add(viewMessage);
    }
});