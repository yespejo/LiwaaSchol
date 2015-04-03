Ext.define('schoolBus.controller.CtrlLogin', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            viewLogin: 'viewlogin'
        },
        control: {
            "viewlogin #btnLoginButton": {
                tap: 'btnLoginButton'
            },
            "viewlogin #btnNewUser": {
                tap: 'btnNewUser'
            }
        }
    },
    init: function () {
        ctrlLogin = this;
    },
    btnNewUser: function() {
        viewLogin = ctrlLogin.getViewLogin();
        viewProfile = Ext.create('schoolBus.view.ViewProfile');
        viewLogin.add(viewProfile);
    },
    btnLoginButton: function () {
        Ext.Msg.alert('Confirmación','Usuario o clave incorrectos');
    }
});