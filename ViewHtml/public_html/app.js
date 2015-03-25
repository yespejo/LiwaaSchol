var addressServer = 'www.llevameapp.com/Ubication-war';
Ext.application({
    requires: [
        'Ext.MessageBox'
    ],
    name: 'schoolBus',
    store: [
    ],
    model: [
    ],
    controllers: [
    ],
    views: [
        'ViewLogin'
    ],
    launch: function() {
        app = this;
        Ext.create('schoolBus.view.ViewLogin', {fullscreen: true});
    }
});
