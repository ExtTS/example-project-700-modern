Ext.define('App.controller.MainTab', {
    extend: 'Ext.app.ViewController',
    config: {
    // record z Main ctrl
    },
    changed: false,
    onLaunch: function () {
        //this.callParent(arguments);
    },
    setChanged: function (changed) {
        if (!this.changed && changed) {
            this.tabView.setTitle('*&nbsp;' + this.tabView.getTitle());
        }
        this.changed = changed || true;
    },
    getChanged: function () {
        return this.changed || false;
    },
    save: function () {
        throw "not implemented";
    }
});
//# sourceMappingURL=MainTab.js.map