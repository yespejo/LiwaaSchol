Ext.define('schoolBus.view.ViewProfile', {
    extend: 'Ext.Panel',
    alias: 'widget.viewprofile',
    config: {
        cls: 'background-user',
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarProfile',
                docked: 'top',
                cls: 'tool-bar-profile',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnReturn',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: 'Crear Perfil'
            },
            {
                xtype: 'panel',
                autoScroll : 'true',
                items: [
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Nombre *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtFirstName'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el nombre'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Apellido *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtLastName'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el apellido'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Clave *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtPassword'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre la clave'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'E-mail *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre la dirección de correo'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnGroup',
                        cls: 'button-login',
                        text: 'Registarse'
                    }
                ]
            }
        ]
    }
});
