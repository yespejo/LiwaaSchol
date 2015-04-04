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
        'CtrlParent',
        'CtrlStudent',
        'CtrlMapStudent',
        'CtrlListStudent',
        'CtrlEditParent',
        'CtrlConfig',
        'CtrlMessage',
        'CtrlDetailDriver',
        'CtrlMapRoute',
        'CtrlMapStudentEdit',
        'CtrlStudentEdit',
        'CtrlSendMessage',
        'CtrlDate'
    ],
    views: [
        'ViewLogin'
    ],
    launch: function() {
        app = this;
        Ext.create('schoolBus.view.ViewLogin', {fullscreen: true});
    }
});
