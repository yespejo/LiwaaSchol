Ext.define('schoolBus.view.ViewDetailStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewdetailstudent',
    loadUbication: function () {
        viewDetailStudent = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var nowLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                new google.maps.Marker({
                    icon: 'resources/images/map_mark_orange.png',
                    map: viewDetailStudent.getComponent('idMap').getMap(),
                    draggable: false,
                    position: nowLocation
                });
                viewDetailStudent.getComponent('idMap').getMap().setCenter(nowLocation);
            }, function () {
                handleNoGeolocation(true);
            });
        } else {
            handleNoGeolocation(false);
        }
    },
    config: {
        cls: 'background-detail',
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarProfile',
                docked: 'top',
                cls: 'tool-bar-profile',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnReturnDetailStudent',
                        cls: 'btn-return'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnMessageDetail',
                        cls: 'btn-message-enable'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnGroupDetail',
                        cls: 'btn-group-enable'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '60%',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'top-detail-student',
                        items: [
                            {
                                xtype: 'panel',
                                layout: {
                                    type: 'hbox',
                                    align: 'left'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: 'round-detail-student',
                                        itemId: 'btnImageStudent',
                                        html: '<img class="image-detail-student" src="resources/images/image.png"></img>'
                                    },
                                    {
                                        xtype: 'panel',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                cls: 'first-name-detail',
                                                html: 'Miguel Andres'
                                            },
                                            {
                                                xtype: 'panel',
                                                cls: 'last-name-detail',
                                                html: 'Cañas Perez'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                cls: 'txtDetailStudent',
                                html: 'Tel: 320339072 | RH: B+ | EPS: Compensar'
                            },
                            {
                                xtype: 'panel',
                                cls: 'txtDetailStudent',
                                html: 'Edad: 9 años | ID: 65777363'
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'title-detail-student',
                                html: 'Datos del Acudiente'
                            },
                            {
                                xtype: 'panel',
                                cls: 'container-detail-student',
                                items: [
                                    {
                                        xtype: 'panel',
                                        cls: 'interval-detail-student',
                                        html: 'Nombre: Miguel Cañas Agudelo'
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'interval-detail-student',
                                        html: 'Teféfono: 3203390071 | Móvil: 3203367753'
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'interval-detail-student',
                                        html: 'Dirección: Carrera 57 # 116 b 37'
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'interval-detail-student',
                                        html: 'E-mail: yespejob@gmail.com'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'toll-bottom-student',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'toll-point',
                            },
                            {
                                xtype: 'panel',
                                cls: 'toll-point',
                            },
                            {
                                xtype: 'panel',
                                cls: 'toll-point',
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'map',
                itemId: 'idMap',
                useCurrentLocation: true,
                id: 'mapStudent',
                height: '40%'
            }
        ]
    }
});
