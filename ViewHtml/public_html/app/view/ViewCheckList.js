Ext.define('schoolBus.view.ViewCheckList', {
    extend: 'Ext.Panel',
    alias: 'widget.viewchecklist',
    config: {
        cls: 'background-list',
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarProfile',
                docked: 'top',
                cls: 'tool-bar-profile',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnReturnCheckList',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: '<div>Checklist</div><div style="font-weight: 200 !important;" class="send-group-message">Ruta Agustiniano 01</div>'
            },
            {
                xtype: 'list',
                itemId: 'listMessage',
                id: 'listMessage',
                autoLoad: true,
                height: '100%',
                cls: 'list-check-message',
                store: {
                    fields: ['nameStudent', 'idStudent'],
                    data: [
                        {
                            'idStudent': 1,
                            'nameStudent': 'Miguel Andres Cañas Perez'
                        },
                        {
                            'idStudent': 2,
                            'nameStudent': 'Cesar Augusto Laverde Diaz'
                        },
                        {
                            'idStudent': 3,
                            'nameStudent': 'Cristian Julian Cañas Perez'
                        }
                    ]
                },
                itemTpl: [
                    '<div class="check-select"></div><div class="text-checklist">{nameStudent}</div>'
                ],
                onItemDisclosure: true
            },
            {
                xtype: 'container',
                docked: 'bottom',
                cls: 'container-send',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnSaveChecklist',
                        cls: 'button-login',
                        text: 'Guardar'
                    }
                ]
            }
        ]
    }
});
