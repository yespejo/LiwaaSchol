Ext.define('schoolBus.view.ViewPassword', {
    extend: 'Ext.Panel',
    alias: 'widget.viewpassword',
    config: {
        centered: true,
        height: 300,
        cls: 'background-password',
        itemId: 'modalPanel',
        width: 300,
        hideOnMaskTap: true,
        modal: true,
        scrollable: true,
        items: [
            {
                xtype: 'label',
                cls: 'label-school',
                html: 'Clave antigua *'
            },
            {
                xtype: 'textfield',
                cls: 'text-school',
                itemId: 'txtLastPassword'
            },
            {
                xtype: 'label',
                cls: 'label-school',
                html: 'Clave nueva *'
            },
            {
                xtype: 'textfield',
                cls: 'text-school',
                itemId: 'txtNewPassword'
            },
            {
                xtype: 'label',
                cls: 'label-school',
                html: 'Repetir clave *'
            },
            {
                xtype: 'textfield',
                cls: 'text-school',
                itemId: 'txtRepearPassword'
            },
            {
                xtype: 'container',
                cls: 'error-container',
                html: 'Las claves no coinciden'
            },
            {
                xtype: 'button',
                itemId: 'btnPassword',
                cls: 'button-login',
                text: 'Aceptar'
            }
        ]
    }
});