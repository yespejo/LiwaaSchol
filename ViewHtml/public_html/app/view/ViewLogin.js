Ext.define('schoolBus.view.ViewLogin', {
    extend: 'Ext.form.Panel',
    alias: 'widget.viewlogin',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button'
    ],
    config: {
        cls: 'background-login',
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
                        placeHolder: 'E-mail',
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
                        placeHolder: 'Password',
                        name: 'userPassword',
                        itemId: 'txtUserPassword'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'button-login',
                itemId: 'loginButton',
                text: 'Login'
            },
            {
                xtype: 'button',
                cls: 'link-login',
                itemId: 'linkButton',
                text: 'Soy nuevo, deseo registrarme!'
            }
        ]
    }

});
