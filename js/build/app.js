define(["require", "exports", "libs/ClassA"], function (require, exports, ClassA_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Debugging in browser:
    Ext.Loader.setConfig({
        disableCaching: !true
    });
    ClassA_1.ClassA.Test();
    // Creating an application:
    Ext.application({
        extend: 'Ext.app.Application',
        name: 'App',
        appFolder: 'js/build',
        autoCreateViewport: true,
        requires: [
            'App.libs.AjaxHandlers'
        ],
        controllers: [
            'Main'
        ],
        launch: function () {
            //App.libs.AjaxHandlers.Init();
            return true;
        },
        onAppUpdate: function () {
            /*Ext.MessageBox.confirm(
                'Application Update', 'This application has an update, reload?',
                function (choice: string) {
                    if (choice === 'yes')
                        window.location.reload();
                },
                this
            );*/
        }
    });
});
//# sourceMappingURL=app.js.map