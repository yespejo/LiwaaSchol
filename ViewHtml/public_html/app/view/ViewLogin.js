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
                        cls: 'image-login'
                    },
                    {
                        xtype: 'fieldset',
                        cls: 'font-login',
                        title: 'E-mail',
                        items: [
                            {
                                xtype: 'emailfield',
                                cls: 'input-login',
                                name: 'userEmail',
                                itemId: 'txtUserEmail'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Password',
                        cls: 'font-login',
                        items: [
                            {
                                xtype: 'passwordfield',
                                cls: 'input-login',
                                name: 'userPassword',
                                itemId: 'txtUserPassword'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        cls: 'button-login',
                        itemId: 'btnLoginButton',
                        text: 'Login'
                    },
                    {
                        xtype: 'button',
                        cls: 'link-login',
                        itemId: 'btnNewUser',
                        text: 'Soy nuevo, deseo registrarme!'
                    }
                ]
            }
        ]
    }

});
