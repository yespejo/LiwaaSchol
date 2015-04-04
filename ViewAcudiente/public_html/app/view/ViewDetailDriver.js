Ext.define('schoolBus.view.ViewDetailDriver', {
    extend: 'Ext.Panel',
    alias: 'widget.viewdetaildriver',
    loadUbication: function () {
        viewDetailDriver = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var nowLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                new google.maps.Marker({
                    icon: 'resources/images/map_mark_orange.png',
                    map: viewDetailDriver.getComponent('idMap').getMap(),
                    draggable: false,
                    position: nowLocation
                });
                viewDetailDriver.getComponent('idMap').getMap().setCenter(nowLocation);
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
                        itemId: 'btnReturnDetailDriver',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '60%',
                items: [
                    {
                        xtype: 'button',
                        cls: 'round-detail-driver',
                        itemId: 'btnImageStudent',
                        html: '<img class="image-detail-driver" src="resources/images/image_driver.png"></img>'
                    },
                    {
                        xtype: 'panel',
                        cls: 'first-name-detail',
                        html: 'Angelica Maria'
                    },
                    {
                        xtype: 'panel',
                        cls: 'last-name-detail',
                        html: 'Parra Carvajal'
                    },
                    {
                        xtype: 'panel',
                        cls: 'txt-detail-student-driver',
                        html: 'Tel: 3212234435'
                    },
                    {
                        xtype: 'panel',
                        cls: 'txt-detail-student-driver',
                        html: 'Email: angelicaparra@gmail.com'
                    },
                    {
                        xtype: 'panel',
                        cls: 'txt-detail-student-driver',
                        html: 'Placa: NCL259'
                    },
                    {
                        xtype: 'panel',
                        cls: 'title-detail-student-driver',
                        html: 'Colegio'
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
                height: '40%'
            }
        ]
    }
});
