Ext.define('schoolBus.view.ViewMessageStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewmessagestudent',
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
                        itemId: 'btnReturnMessageStudent',
                        cls: 'btn-return'
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
                            'nameStudent': 'Cesat Alfonso Sanches Laverde',
                            'groupStudent': 'Agustiniano 01',
                            'dateNow': '16-12-2014 6:30 AM',
                            'message' : 'El/La niño/a no asistirá hoy al colegio'
                        }
                    ]
                },
                itemTpl: [
                    '<div class="container-message">' + 
                    '<div class="text-message">El acuediente de</div>' +
                    '<div class="name-message">{nameStudent}</div>' +
                    '<div class="text-message">Grupo: {groupStudent}</div>' +
                    '<div class="text-message">{dateNow}</div>' +
                    '<div class="message">{message}</div>' +
                    '</div>'
                ],
                onItemDisclosure: true
            }
        ]
    }
});
