//var addressServer = 'www.llevameapp.com/Ubication-war';
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
        'CtrlLogin',
        'CtrlProfile',
        'CtrlGroup',
        'CtrlProfileUpdate',
        'CtrlPassword',
        'CtrlNewGroup',
        'CtrlMapGroup',
        'CtrlMessage',
        'CtrlSendMessage',
        'CtrlEditGroup',
        'CtrlMapGroupEdit',
        'CtrlStudent',
        'CtrlNewStudent',
        'CtrlEditStudent',
        'CtrlDetailStudent',
        'CtrlSendMessageStudent',
        'CtrlRegroup',
        'CtrlInvitedStudent',
        'CtrlMessageStudent',
        'CtrlMapRoute',
        'CtrlCheckList'
    ],
    views: [
        'ViewLogin'
    ],
    launch: function() {
        app = this;
        Ext.create('schoolBus.view.ViewLogin', {fullscreen: true});
    }
});
