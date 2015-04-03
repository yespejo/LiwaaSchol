Ext.define('schoolBus.view.ViewNewStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewnewstudent',
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
                        itemId: 'btnReturnStudent',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: '<div>Registrar Niño</div><div style="font-weight: 200 !important;" class="send-group-message">Ruta Agustiniano 01</div>'
            },
            {
                xtype: 'panel',
                autoScroll: 'true',
                items: [
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Nombres *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtNameStudent'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre los nombres'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Apellidos *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtLastNameStudent'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre los apellidos'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Telefono móvil *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtCellphone'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el numero de telefono'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnSaveStudent',
                        cls: 'button-login',
                        text: 'Registrar'
                    }
                ]
            }
        ]
    }
});
