Ext.define('schoolBus.view.ViewStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewstudent',
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
                html: 'Información Niño'
            },
            {
                xtype: 'panel',
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
                        html: 'RH *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el RH'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'EPS'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Fecha de nacimiento'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Identificacion *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtEmail'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el numero de identificación del niño'
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
                            },
                            {
                                xtype: 'button',
                                itemId: 'btnImage',
                                cls: 'btn-photo-image',
                                html:'<img src="resources/images/image.png" class="photo-image"></img>'
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
                                xtype: 'panel',
                                cls: 'check-location'
                            },
                            {
                                xtype: 'label',
                                html: 'Ubicacion de Recogida:',
                                cls: 'label-location'
                            },
                            {
                                xtype: 'button',
                                cls: 'image-location',
                                itemId: 'btnLocationGroup'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnSaveStudent',
                        cls: 'button-login',
                        text: 'Guardar'
                    }
                ]
            }
        ]
    }
});
