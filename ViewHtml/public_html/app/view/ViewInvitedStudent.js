Ext.define('schoolBus.view.ViewInvitedStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewinvitedstudent',
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
                        itemId: 'btnReturnInvitedStudent',
                        cls: 'btn-return'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnMessageInvited',
                        cls: 'btn-message-enable'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnGroupInvited',
                        cls: 'btn-group-enable'
                    }
                ]
            },
            {
                xtype: 'panel',
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
                                cls: 'title-invited-student',
                                html: 'Pendiente por activación'
                            },
                            {
                                xtype: 'button',
                                itemId: 'btnInvitedStudent',
                                cls: 'button-login',
                                text: 'Reenviar Invitación'
                            }

                        ]
                    }
                ]
            }
        ]
    }
});
