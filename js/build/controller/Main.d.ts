declare namespace App.controller {
    interface Main extends Ext.app.Controller.Def {
        myStaticMethod?(myParam?: number): boolean;
        treesWrappers: object[];
        mainTabs: object;
        getLeftAccPanel(): Ext.panel.Panel;
        getMainTabs(): Ext.tab.Panel;
        createSidePanelWrapper(treesServicesData: TreesServiceItem[], iLocal: number): App.view.layout.SideTreePanel;
        createSidePanelTree(serviceUrl: string): App.view.layout.SideTree;
        createTabCtrlAndviewIfNecessary(): void;
    }
    interface TreesServiceItem {
        serviceUrl: string;
        title: string;
    }
}
