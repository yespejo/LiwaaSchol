Ext.define('schoolBus.view.ViewMessage', {
    extend: 'Ext.Panel',
    alias: 'widget.viewmessage',
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
                        itemId: 'btnReturnMessage',
                        cls: 'btn-return'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnDriver',
                        cls: 'btn-driver'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnInfor',
                        cls: 'btn-infor'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnRoute',
                        cls: 'btn-route-enable'
                    }
                ]
            },
            {
                xtype: 'list',
                itemId: 'listMessage',
                id: 'listMessage',
                autoLoad: true,
                height: '100%',
                cls : 'list-message',
                store: {
                    fields: ['nameStudent', 'groupStudent', 'dateNow', 'message'],
                    data: [
                        {
                            'dateNow': '16-12-2014 6:30 AM',
                            'message' : 'Retrasado 15 minutos por congestion vehicular'
                        },
                        {
                            'dateNow': '16-12-2014 6:30 AM',
                            'message' : 'Hoy hacemos una parada adicional'
                        }
                    ]
                },
                itemTpl: [
                    '<div class="container-message">' + 
                    '<div class="text-message">{dateNow}</div>' +
                    '<div class="message">{message}</div>' +
                    '</div>'
                ],
                onItemDisclosure: true
            },
            {
                xtype: 'button',
                docked: 'bottom',
                itemId: 'btnNewMessage',
                cls: 'btn-bottom-add',
                html: '<div class="text-button-left"><div class="add-button-message"></div><div>Enviar Mensaje</div><div>',
            }
        ]
    }
});
