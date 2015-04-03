Ext.define('schoolBus.view.ViewStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewstudent',
    config: {
        cls: 'background-list',
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarGroup',
                docked: 'top',
                cls: 'tool-bar-profile',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnReturnStudent',
                        cls: 'btn-return'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-menu-student',
                        itemId: 'txtFindStudent',
                        placeHolder: 'Buscar Niño'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnCheck',
                        cls: 'btn-check-enable'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnMessage',
                        cls: 'btn-message'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnRoute',
                        cls: 'btn-route-enable'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: '<div class="text-num-route">Ruta Agustiniano 01</div><div class="icon-num-route" onclick="ctrlStudent.btnMessageStudent()"><div class="count-studen" style="font-weight: 100 !important;">0</div></div>'
            },
            {
                xtype: 'list',
                itemId: 'listStudent',
                id: 'listStudent',
                autoLoad: true,
                height: '100%',
                store: {
                    fields: ['studentId', 'imageStudent', 'nameStudent', 'phoneStudent', 'checkStudent', 'statusStudent','statusText'],
                    data: [
                        {
                            'studentId': 1,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'checkStudent': 'check',
                            'statusStudent': 'none',
                            'statusText': ''
                        },
                        {
                            'studentId': 2,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'checkStudent': 'check',
                            'statusStudent': 'none',
                            'statusText': ''
                        },
                        {
                            'studentId': 3,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'checkStudent': 'uncheck',
                            'statusStudent': 'none',
                            'statusText': ''
                        },
                        {
                            'studentId': 4,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'checkStudent': 'none',
                            'statusStudent': 'enable',
                            'statusText': 'Inhabilitado'
                        },
                        {
                            'studentId': 5,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'checkStudent': 'none',
                            'statusStudent': 'disable',
                            'statusText': 'No Asistirá'
                        }
                    ]
                },
                itemTpl: [
                    '<div class="container-student">' +
                    '<div>' + 
                    '<div class="check-student-{checkStudent}"></div>'+ 
                    '<div class="status-student-{statusStudent}">{statusText}</div>'+ 
                    '<div class="status-image-{statusStudent}"><div class="status-image-cont-{statusStudent}"></div>' + 
                    '<img class="image-student"  onclick="ctrlStudent.btnInvitedStudent({studentId})" src="resources/images/{imageStudent}"></img></div>'+ 
                    '<div class="text-student"  onclick="ctrlStudent.btnDetailStudent({studentId})">' + 
                    '<div class="name-student">{nameStudent}</div>'+ 
                    '<div class="phone-student">tel: {phoneStudent}</div>'+ 
                    '</div>' +
                    '</div>' +
                    '<div class="pencil-list" onclick="ctrlStudent.btnEditStudent({studentId})"></div>' +
                    '</div>'
                ],
                onItemDisclosure: true
            },
            {
                xtype: 'button',
                docked: 'bottom',
                itemId: 'btnNewStudent',
                cls: 'btn-bottom-add',
                html: '<div class="text-button-left"><div class="add-button-student"></div><div>Agregar Niño</div><div>',
            }
        ]
    }
});
