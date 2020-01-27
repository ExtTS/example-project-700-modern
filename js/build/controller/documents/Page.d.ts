declare namespace App.controller.documents {
    interface Page extends App.controller.MainTab {
        model: any;
        form: Ext.form.BasicForm;
        init(cfg: object): void;
        save(): void;
        onLaunch(): void;
    }
}
