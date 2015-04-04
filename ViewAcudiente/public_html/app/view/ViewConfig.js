Ext.define('schoolBus.view.ViewConfig', {
    extend: 'Ext.Panel',
    alias: 'widget.viewconfig',
    config: {
        cls: 'background-user',
        items: [
            {
                xtype: 'toolbar',
                itemId: 'toolBarProfile',
                docked: 'top',
                cls: 'tool-bar-profile',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnReturnConfig',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: 'Configuración'
            },
            {
                xtype: 'panel',
                autoScroll: 'true',
                items: [
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Frecuencia alarma de cercania *'
                    },
                    {
                        xtype: 'selectfield',
                        cls: 'text-school',
                        options: [
                            {text: '1 Minutos', value: '1'},
                            {text: '2 Minutos', value: '2'},
                            {text: '3 Minutos', value: '3'},
                            {text: '5 Minutos', value: '5'},
                            {text: '10 Minutos', value: '10'},
                            {text: '15 Minutos', value: '15'},
                            {text: '20 Minutos', value: '20'},
                            {text: '30 Minutos', value: '30'}
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre la frecuencia'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnSaveConfig',
                        cls: 'button-login',
                        text: 'Guardar'
                    }
                ]
            }
        ]
    }
});
