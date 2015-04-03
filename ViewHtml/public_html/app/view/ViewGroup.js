Ext.define('schoolBus.view.ViewGroup', {
    extend: 'Ext.Panel',
    alias: 'widget.viewgroup',
    initialize: function () {
        viewGroup = this;
        Ext.Viewport.setMenu(viewGroup.createMenu(), {
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
                    id: 'btnUpdateProfile',
                    html: '<div class="menu-profile"></div><div class="text-menu-left">Editar Perfil<div>',
                    cls: 'cont-button-menu'
                },
                {
                    xtype: 'button',
                    id: 'btnOutMenu',
                    html: '<div class="menu-out"></div><div class="text-menu-left">Salir</div>',
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
                        cls: 'text-menu',
                        itemId: 'txtFindGroup',
                        placeHolder: 'Buscar Grupo',
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnInbox',
                        html: '<div class="btn-inbox"><div class="count-studen" style="  font-weight: 100 !important;">0</div></div>'
                    }
                ]
            },
            {
                xtype: 'list',
                itemId: 'listRoute',
                id: 'listRoute',
                autoLoad: true,
                height: '100%',
                store: {
                    fields: ['routeId','nameRoute', 'hourIni', 'HourEnd', 'numberStudent'],
                    data: [
                        {
                            'routeId': 1,
                            'nameRoute': 'Ruta 001',
                            'hourIni': '08:00 AM',
                            'HourEnd': '03:30 PM',
                            'numberStudent': 10
                        },
                        {
                            'routeId': 2,
                            'nameRoute': 'Ruta 002',
                            'hourIni': '10:00 AM',
                            'HourEnd': '04:30 PM',
                            'numberStudent': 9
                        },
                        {
                            'routeId': 3,
                            'nameRoute': 'Ruta 003',
                            'hourIni': '09:00 AM',
                            'HourEnd': '05:30 PM',
                            'numberStudent': 20
                        }
                    ]
                },
                itemTpl: [
                    '<div class="container-route">' + 
                    '<div class="container-list" onclick="ctrlGroup.btnStudentGroup({routeId})">' + 
                    '<div class="image-route-list"></div>' +
                    '<div class="container-text-list">' + 
                    '<div class="name-route-list">{nameRoute}</div>' +
                    '<div>' +
                    '<div class="time-route-list">{hourIni} | {HourEnd}</div>' +
                    '<div>' +
                    '<div class="student-route-list"></div><div class="number-student-route-list">{numberStudent}</div>' + 
                    '</div>' +
                    '</div>' +
                    '</div>' + 
                    '</div>' +
                    '<div class="message-list" onclick="ctrlGroup.btnSendMessage({routeId})"></div>' + 
                    '<div class="pencil-list" onclick="ctrlGroup.btnEditGroup({routeId})"></div>' +
                    '</div>'
                ],
                onItemDisclosure: true
            },
            {
                xtype: 'button',
                docked: 'bottom',
                itemId: 'btnNewGroup',
                cls: 'btn-bottom-add',
                html: '<div class="text-button-left"><div class="add-button"></div><div>Agregar Grupo</div><div>',
            }
        ]
    }
});
