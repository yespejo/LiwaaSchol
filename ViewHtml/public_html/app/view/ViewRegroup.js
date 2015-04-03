Ext.define('schoolBus.view.ViewRegroup', {
    extend: 'Ext.Panel',
    alias: 'widget.viewregroup',
    config: {
        centered: true,
        height: 160,
        cls: 'background-regroup',
        itemId: 'modalPanel',
        width: 300,
        hideOnMaskTap: true,
        modal: true,
        scrollable: true,
        items: [
            {
                xtype: 'label',
                cls: 'label-school',
                html: 'Reasignar al grupo *'
            },
            {
                xtype: 'selectfield',
                cls: 'text-school',
                options: [
                    {text: 'Group one', value: '1'},
                    {text: 'Group two', value: '2'},
                    {text: 'Group three', value: '3'}
                ]
            },
            {
                xtype: 'container',
                cls: 'error-container',
                html: 'Por favor registre el grupo'
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    align: 'left'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnCancelRegroup',
                        cls: 'button-save-regroup',
                        text: 'Cancelar'
                        
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnSaveRegroup',
                        cls: 'button-cancel-regroup',
                        text: 'Aceptar'
                    }
                ]
            }

        ]
    }
});