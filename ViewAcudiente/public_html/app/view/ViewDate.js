Ext.define('schoolBus.view.ViewDate', {
    extend: 'Ext.Panel',
    alias: 'widget.viewdate',
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
                html: 'Cuando no asistira *'
            },
            {
                xtype: 'datepickerfield',
                cls: 'text-school'
            },
            {
                xtype: 'container',
                cls: 'error-container',
                html: 'Por favor registre la fecha'
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
                        itemId: 'btnCancelDate',
                        cls: 'button-save-regroup',
                        text: 'Cancelar'

                    },
                    {
                        xtype: 'button',
                        itemId: 'btnSaveDate',
                        cls: 'button-cancel-regroup',
                        text: 'Aceptar'
                    }
                ]
            }

        ]
    }
});