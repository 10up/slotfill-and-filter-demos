## Combine Everything ##

All the examples have shown a single SlotFill being used with `registerPlugin`. But, they can be combined into a single one to allow using a single icon for all Fills. 

## Example from this plugin ##
```js
 * Get registerPlugin.
 */
const { registerPlugin } = wp.plugins;

/**
 * Import our components that contain the SlotFills
 */
import { TenUp } from '../../svg/icons';
import PluginBlockSettingsMenuGroupDemo from './plugin-block-settings-menu-item';
import MyDocumentSettingDemo from './plugin-document-setting-panel';
import MyButtonMoreMenuItemDemo from './plugin-more-menu-item';
import PluginPostPublishPanelDemo from './plugin-post-publish-panel';
import PluginPostStatusInfoDemo from './plugin-post-status-info';
import PluginPrePublishPanelDemo from './plugin-pre-publish-panel';
import PluginSidebarMoreMenuItemDemo from './plugin-sidebar-more-menu-item';

/**
 * One plugin to rule them all.
 */
const CombinedSlotFillsDemo = () => (
	<>
		<PluginBlockSettingsMenuGroupDemo />
		<MyDocumentSettingDemo />
		<MyButtonMoreMenuItemDemo />
		<PluginPrePublishPanelDemo />
		<PluginPostPublishPanelDemo />
		<PluginPostStatusInfoDemo />
		<PluginSidebarMoreMenuItemDemo />
	</>
);

/**
 * register the plugin.
 */
registerPlugin( 'extending-gutenberg', { render: CombinedSlotFillsDemo, icon: TenUp } );
```
[Back: PluginDocumentSettingPanel ](./plugin-document-setting-panel.md)