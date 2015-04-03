Ext.define('schoolBus.controller.CtrlGroup', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin',
            viewGroup: 'viewgroup'
        },
        control: {
            "viewgroup #btnMenu": {
                tap: 'btnMenu'
            },
            "viewgroup #btnNewGroup": {
                tap: 'btnNewGroup'
            },
            "viewgroup #btnInbox": {
                tap: 'btnInbox'
            }
        }
    },
    init: function () {
        ctrlGroup = this;
    },
    btnInbox : function() {
        viewLogin = ctrlGroup.getViewLogin();
        viewMessage = Ext.create('schoolBus.view.ViewMessage');
        viewLogin.add(viewMessage);
    },
    btnNewGroup: function () {
        viewLogin = ctrlGroup.getViewLogin();
        viewNewGroup = Ext.create('schoolBus.view.ViewNewGroup');
        viewLogin.add(viewNewGroup);
    },
    btnMenu: function () {
        Ext.Viewport.toggleMenu('left');
        document.getElementById("btnOutMenu").onclick = function () {
            Ext.Viewport.toggleMenu('left');
            ctrlGroup.getViewLogin().reset();
        };
        document.getElementById("btnUpdateProfile").onclick = function () {
            Ext.Viewport.toggleMenu('left');
            viewLogin = ctrlGroup.getViewLogin();
            viewProfileUpdate = Ext.create('schoolBus.view.ViewProfileUpdate');
            viewLogin.add(viewProfileUpdate);
        };
    },
    btnSendMessage: function(idGroup){
        viewLogin = ctrlGroup.getViewLogin();
        viewSendMessage = Ext.create('schoolBus.view.ViewSendMessage');
        viewLogin.add(viewSendMessage);
    },
    btnEditGroup: function(idGroup) {
        viewLogin = ctrlGroup.getViewLogin();
        viewEditGroup = Ext.create('schoolBus.view.ViewEditGroup');
        viewLogin.add(viewEditGroup);
    },
    btnStudentGroup: function(idGroup) {
        viewLogin = ctrlGroup.getViewLogin();
        viewStudent = Ext.create('schoolBus.view.ViewStudent');
        viewLogin.add(viewStudent);
    }
});