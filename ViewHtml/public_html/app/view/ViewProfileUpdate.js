Ext.define('schoolBus.view.ViewProfileUpdate', {
    extend: 'Ext.Panel',
    alias: 'widget.viewprofileupdate',
    config: {
        cls: 'background-user',
        scrollable: 'vertical',
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
                html: 'Editar Perfil'
            },
            {
                xtype: 'container',
                autoScroll: 'true',
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
                        html: 'Colegio'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtScholl'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Telefono'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtPhone'
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
                        html: 'Por favor registre la direccion electronica'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Placa *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtplaque'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre la matricula del vehículo'
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'left'
                        },
                        items: [
                            {
                                xtype: 'label',
                                cls: 'label-school-hbox',
                                html: 'Foto:'
                            },
                            {
                                xtype: 'button',
                                cls: 'btn-photo'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'left'
                        },
                        items: [
                            {
                                xtype: 'label',
                                cls: 'label-school-hbox',
                                html: 'Redes:'
                            },
                            {
                                xtype: 'button',
                                cls: 'btn-face'
                            },
                            {
                                xtype: 'button',
                                cls: 'btn-twiter'
                            },
                            {
                                xtype: 'button',
                                cls: 'btn-in'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        cls: 'link-password',
                        itemId: 'btnPassword',
                        text: 'Cambiar clave'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnSave',
                        cls: 'button-login',
                        text: 'Guardar'
                    }
                ]
            },
            {
                xtype: 'button',
                docked: 'bottom',
                itemId: 'btnDelete',
                cls: 'btn-bottom-delete',
                text: 'Eliminar Cuenta'
            }
        ]
    }
});
