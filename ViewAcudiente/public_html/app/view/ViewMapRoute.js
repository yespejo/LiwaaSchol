Ext.define('schoolBus.view.ViewMapRoute', {
    extend: 'Ext.Map',
    alias: 'widget.viewmaproute',
    loadUbication: function () {
        viewMapGroup = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var nowLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                new google.maps.Marker({
                    icon: 'resources/images/map_mark_pink.png',
                    map: viewMapGroup.getMap(),
                    draggable: true,
                    position: nowLocation
                });
                viewMapGroup.getMap().setCenter(nowLocation);
            }, function () {
                handleNoGeolocation(true);
            });
        } else {
            handleNoGeolocation(false);
        }
    },
    config: {
        cls: 'back-map-driver',
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
                        itemId: 'btnReturnRoute',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container-map',
                html: 'Ruta Agustiniano 01'
            },

        ]
    }

});
