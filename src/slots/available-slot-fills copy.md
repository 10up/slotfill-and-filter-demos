## Available SlotFIlls ##
There are currently 8 SlotsFills exposed for use on the `wp.editPost` object.
* [PluginPostStatusInfo](./plugin-post-status-info.md)
* [PluginPrePublishPanel](./plugin-pre-publish-panel.md)
* [PluginPostPublishPanel](./plugin-post-publish-panel.md)
* [PluginMoreMenuItem](./plugin-more-menu-item.md)
* [PluginBlockSettingsMenuItem](./plugin-block-settings-menu-item.md)
* [PluginSidebar](./plugin-sidebar.md)
* [PluginSidebarMoreMenuItem](./plugin-sidebar-more-menu-item.md)
* [PluginDocumentSettingPanel - new!](./plugin-document-setting-panel.md)

### Internal SlotFills ##
There are internal and special SlotFills as well. These are either not exposed or, in the case of `InspectorControls`, have certain uses. They include:
* InspectorControls
* InspectorControlsAdvanced
* BlockFormatControls
* and others

### Structure ## 
The available SlotFills are not just simple <Slot> components. They are named components that usually contain other functionality and inner components that can take props and some will inherit the icon provided by `registerPlugin`. 

[Back: wp.plugins API](./wp-plugins-api.md) | [Next: PluginPostStatusInfo](./plugin-post-status-info.md)