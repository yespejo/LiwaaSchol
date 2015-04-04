Ext.define('schoolBus.view.ViewSendMessage', {
    extend: 'Ext.Panel',
    alias: 'widget.viewsendmessage',
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
                        itemId: 'btnReturnSendMessage',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: '<div>Enviar Mensaje a Ruta</div><div style="font-weight: 200 !important;" class="send-group-message">Cesar Alfonzo Sanchez Laverde</div>'
            },
            {
                xtype: 'list',
                itemId: 'listMessage',
                id: 'listMessage',
                autoLoad: true,
                height: '100%',
                cls: 'list-send-message',
                store: {
                    fields: ['sendMessage'],
                    data: [
                        {'sendMessage': 'Mensaje uno'},
                        {'sendMessage': 'Mensaje dos'},
                        {'sendMessage': 'Mensaje tres'},
                        {'sendMessage': 'Mensaje cuatro'},
                        {'sendMessage': 'Mensaje cinco'},
                        {'sendMessage': 'Mensaje ceis'},
                        {'sendMessage': 'Mensaje siete'},
                        {'sendMessage': 'Mensaje ocho'},
                        {'sendMessage': 'Mensaje nueve'},
                        {'sendMessage': 'Mensaje diez'},
                        {'sendMessage': 'Mensaje once'},
                        {'sendMessage': 'Mensaje doce'},
                        {'sendMessage': 'Mensaje trece'},
                        {'sendMessage': 'Mensaje catorce'},
                        {'sendMessage': 'Mensaje quince'},
                        {'sendMessage': 'Mensaje dieciseis'},
                        {'sendMessage': 'Mensaje diecisiete'},
                        {'sendMessage': 'Mensaje dieciocho'},
                        {'sendMessage': 'Mensaje diecinueve'}
                    ]
                },
                itemTpl: [
                    '<div class="text-message-send">{sendMessage}</div>'
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
                        itemId: 'btnSendMessage',
                        cls: 'button-login',
                        text: 'Enviar'
                    }
                ]
            }
        ]
    }
});
