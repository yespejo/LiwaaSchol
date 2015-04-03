Ext.define('schoolBus.view.ViewImageStudent', {
    extend: 'Ext.Panel',
    alias: 'widget.viewimagestudent',
    config: {
        centered: true,
        height: 300,
        width: 300,
        cls: 'panel-image-student',
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'panel',
                html: '<img src="resources/images/image.png" class="image-student-popup"></img>'
            }
        ]
    }
});