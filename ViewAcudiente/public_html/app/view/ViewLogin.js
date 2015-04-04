Ext.define('schoolBus.view.ViewLogin', {
    extend: 'Ext.navigation.View',
    alias: 'widget.viewlogin',
    config: {
        cls: 'background-login',
        items: [
            {
                xtype: 'panel',
                items: [
                    {
                        xtype: 'container',
                        itemId: 'imgLogin',
                        cls: 'icon-login'
                    },
                    {
                        xtype: 'container',
                        itemId: 'imgLogin',
                        cls: 'invited-login'
                    },
                    {
                        xtype: 'panel',
                        cls: 'font-invited',
                        html: '<div class="font-name-invited">Angelica Parra</div><div>te ha invitado a unirte a un grupo</div>'

                    },
                    {
                        xtype: 'button',
                        cls: 'button-login',
                        itemId: 'btnLoginButton',
                        text: 'Aceptar'
                    }
                ]
            }
        ]
    }

});
