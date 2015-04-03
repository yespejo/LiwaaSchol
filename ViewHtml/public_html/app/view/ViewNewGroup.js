Ext.define('schoolBus.view.ViewNewGroup', {
    extend: 'Ext.Panel',
    alias: 'widget.viewnewgroup',
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
                        itemId: 'btnReturnGroup',
                        cls: 'btn-return'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'title-container',
                html: 'Crear un Nuevo Grupo'
            },
            {
                xtype: 'panel',
                autoScroll: 'true',
                items: [
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Nombre del Grupo *'
                    },
                    {
                        xtype: 'textfield',
                        cls: 'text-school',
                        itemId: 'txtNameGroup'
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre el nombre'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Hora de ingreso *'
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'left'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'check-select'
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'input-select',
                                usePicker: true,
                                options: [
                                    {text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4', value: '4'}, {text: '5', value: '5'},
                                    {text: '6', value: '6'}, {text: '7', value: '7'}, {text: '8', value: '8'}, {text: '9', value: '9'}, {text: '10', value: '10'},
                                    {text: '11', value: '11'}, {text: '12', value: '12'}
                                ]
                            },
                            {
                                xtype: 'label',
                                html : ":",
                                cls: 'label-select',
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'input-select',
                                usePicker: true,
                                options: [
                                    {text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4', value: '4'}, {text: '5', value: '5'},
                                    {text: '6', value: '6'}, {text: '7', value: '7'}, {text: '8', value: '8'}, {text: '9', value: '9'}, {text: '10', value: '10'},
                                    {text: '11', value: '11'}, {text: '12', value: '12'}, {text: '13', value: '13'}, {text: '14', value: '14'}, {text: '15', value: '15'},
                                    {text: '16', value: '16'}, {text: '17', value: '17'}, {text: '18', value: '18'}, {text: '19', value: '19'}, {text: '20', value: '20'},
                                    {text: '21', value: '21'}, {text: '22', value: '22'}, {text: '23', value: '23'}, {text: '24', value: '24'}, {text: '25', value: '25'},
                                    {text: '26', value: '26'}, {text: '27', value: '27'}, {text: '28', value: '28'}, {text: '29', value: '29'}, {text: '30', value: '30'}
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'input-select',
                                usePicker: true,
                                options: [
                                    {text: 'am', value: 'am'}, {text: 'pm', value: 'pm'}
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'error-container',
                        html: 'Por favor registre la hora de ingreso'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-school',
                        html: 'Hora de Salida'
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'left'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'check-select'
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'input-select',
                                usePicker: true,
                                options: [
                                    {text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4', value: '4'}, {text: '5', value: '5'},
                                    {text: '6', value: '6'}, {text: '7', value: '7'}, {text: '8', value: '8'}, {text: '9', value: '9'}, {text: '10', value: '10'},
                                    {text: '11', value: '11'}, {text: '12', value: '12'}
                                ]
                            },
                            {
                                xtype: 'label',
                                html : ":",
                                cls: 'label-select',
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'input-select',
                                usePicker: true,
                                options: [
                                    {text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4', value: '4'}, {text: '5', value: '5'},
                                    {text: '6', value: '6'}, {text: '7', value: '7'}, {text: '8', value: '8'}, {text: '9', value: '9'}, {text: '10', value: '10'},
                                    {text: '11', value: '11'}, {text: '12', value: '12'}, {text: '13', value: '13'}, {text: '14', value: '14'}, {text: '15', value: '15'},
                                    {text: '16', value: '16'}, {text: '17', value: '17'}, {text: '18', value: '18'}, {text: '19', value: '19'}, {text: '20', value: '20'},
                                    {text: '21', value: '21'}, {text: '22', value: '22'}, {text: '23', value: '23'}, {text: '24', value: '24'}, {text: '25', value: '25'},
                                    {text: '26', value: '26'}, {text: '27', value: '27'}, {text: '28', value: '28'}, {text: '29', value: '29'}, {text: '30', value: '30'}
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                cls: 'input-select',
                                usePicker: true,
                                options: [
                                    {text: 'am', value: 'am'}, {text: 'pm', value: 'pm'}
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'left'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'check-location'
                            },
                            {
                                xtype: 'label',
                                html: 'Ubicacion de Recogida:',
                                cls: 'label-location'
                            },
                            {
                                xtype: 'button',
                                cls: 'image-location',
                                itemId: 'btnLocationGroup'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnNewGroup',
                        cls: 'button-login',
                        text: 'Crear'
                    }
                ]
            }
        ]
    }
});
