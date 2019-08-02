/**
 * Get registerPlugin.
 */
const { registerPlugin } = wp.plugins;

/**
 * Import our components that contain the SlotFills
 */
import { TenUp } from '../../svg/icons';

import PluginBlockSettingsMenuGroupDemo from './plugin-block-settings-menu-item';
import PluginDocumentSettingPanelDemo from './plugin-document-setting-panel';
import PluginMoreMenuItemDemo from './plugin-more-menu-item';
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
		<PluginDocumentSettingPanelDemo />
		<PluginMoreMenuItemDemo />
		<PluginPostPublishPanelDemo />
		<PluginPostStatusInfoDemo />
		<PluginPrePublishPanelDemo />
		<PluginSidebarMoreMenuItemDemo />
	</>
);

/**
 * register the plugin.
 */
registerPlugin( 'slotfill-and-filter-demos', { render: CombinedSlotFillsDemo, icon: TenUp } );