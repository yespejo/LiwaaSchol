Ext.define('schoolBus.view.ViewMapGroupEdit', {
    extend: 'Ext.Map',
    alias: 'widget.viewmapgroupedit',
    loadUbication: function () {
        viewMapGroupEdit = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var nowLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                new google.maps.Marker({
                    icon: 'resources/images/map_mark_orange.png',
                    map: viewMapGroupEdit.getMap(),
                    draggable: true,
                    position: nowLocation
                });
                viewMapGroupEdit.getMap().setCenter(nowLocation);
            }, function () {
                handleNoGeolocation(true);
            });
        } else {
            handleNoGeolocation(false);
        }
    },
    config: {
        cls: 'back-map',
        mapOptions: {
            zoom: 14
        },
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarProfile',
                docked: 'top',
                cls: 'tool-bar-profile',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnReturnLocationGroup',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'back-container',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnNewLocationGroup',
                        cls: 'button-save-container',
                        text: 'Guardar'
                    }
                ]
            }
        ]
    }

});
