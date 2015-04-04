Ext.define('schoolBus.view.ViewParent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewparent',
    config: {
        cls: 'background-user',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarProfile',
                docked: 'top',
                cls: 'tool-bar-profile'
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: 'Información Acudiente'
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
                        html: 'Telefono fijo'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtPassword'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Celular *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el numero de celular'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Dirección de trabajo'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
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
                        itemId: 'btnSaveParent',
                        cls: 'button-login',
                        text: 'Guardar'
                    }
                ]
            }
        ]
    }
});
