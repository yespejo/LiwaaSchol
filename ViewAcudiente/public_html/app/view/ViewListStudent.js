Ext.define('schoolBus.view.ViewListStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewliststudent',
    initialize: function () {
        viewListStudent = this;
        Ext.Viewport.setMenu(viewListStudent.createMenu(), {
            side: 'left',
            reveal: true
        });
    },
    createMenu: function () {
        return Ext.create('Ext.Menu', {
            width: 250,
            scrollable: 'vertical',
            cls: 'cont-title-menu-back',
            items: [
                {
                    xtype: 'container',
                    cls: 'cont-title-menu'
                },
                {
                    xtype: 'button',
                    id: 'btnUpdateParent',
                    html: '<div class="menu-profile"></div><div class="text-menu-left">Editar Acudiente<div>',
                    cls: 'cont-button-menu'
                },
                {
                    xtype: 'button',
                    id: 'btnConfig',
                    html: '<div class="menu-out"></div><div class="text-menu-left">Configuración</div>',
                    cls: 'cont-button-menu-sub'
                }
            ]
        });
    },
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
                        itemId: 'btnMenu',
                        cls: 'btn-menu'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'ctn-menu-student',
                        itemId: 'txtFindStudent',
                        placeHolder: 'Buscar Niño'
                    }
                ]
            },
            {
                xtype: 'list',
                itemId: 'listStudent',
                id: 'listStudent',
                autoLoad: true,
                height: '100%',
                cls: 'list-message',
                store: {
                    fields: ['studentId', 'imageStudent', 'nameStudent', 'phoneStudent', 'countMessage', 'iconMessage', 'type'],
                    data: [
                        {
                            'studentId': 1,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'countMessage': 0,
                            'iconMessage': 'black',
                            'type': 'student'
                        },
                        {
                            'studentId': 2,
                            'imageStudent': 'image.png',
                            'nameStudent': 'Miguel Andres Cañaz Perez',
                            'phoneStudent': '3202290071',
                            'countMessage': 3,
                            'iconMessage': 'red',
                            'type': 'student'
                        },
                        {
                            'studentId': 2,
                            'imageStudent': '',
                            'nameStudent': 'Paola Perez te ha invitado a unirte a un grupo',
                            'phoneStudent': '',
                            'countMessage': 0,
                            'iconMessage': 'invited',
                            'type': 'invited'
                        }
                    ]
                },
                itemTpl: [
                    '<div class="container-{type}">' +
                            '<div>' +
                            '<div class="image-{type}-parent"><img class="image-{type}"  onclick="ctrlStudent.btnInvitedStudent({studentId})" src="resources/images/{imageStudent}"></img></div>' +
                            '<div class="text-{type}" onclick="ctrlListStudent.btnMessageStudent({studentId})">' +
                            '<div class="name-{type}-parent">{nameStudent}</div>' +
                            '<div class="phone-{type}">tel: {phoneStudent}</div>' +
                            '<div class="btn-accep-{type}">Aceptar</div>' +
                            '<div class="btn-cancel-{type}">Rechazar</div>' +
                            '</div>' +
                            '</div>' +
                            '<div class="inbox-list-{iconMessage}">' +
                            '<div class="inbox-list-count-{iconMessage}">{countMessage}</div>' +
                            '</div>' +
                            '</div>'
                ],
                onItemDisclosure: true
            }
        ]
    }
});
