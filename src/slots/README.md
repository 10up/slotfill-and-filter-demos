# SlotFills

Slot and Fill are components that have been exposed to allow developers to inject items into some predefined places in the Gutenberg admin experience.
Please see the [official docs](https://wordpress.org/gutenberg/handbook/designers-developers/developers/components/slot-fill/) for more details.

In order to use them, we must leverage the [@wordpress/plugins](https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-plugins/) api to register a plugin that will inject our items.

## Usage overview

In order to access the slotFills, we need to do four things:

1. Import the `registerPlugin` method from `wp.plugins`.
2. Import the slotFill we want from `wp.editPost`.
3. Define a method to render our changes. Our changes/additions will be wrapped in the slotFill component we imported.
4. Register the plugin.



Here is an example using the `PluginSidebar` slotFill:
```js
const { registerPlugin } = wp.plugins;
const { PluginSidebar } = wp.editPost;

const myRenderMethod = () => {
	return(
		<PluginSidebar name='plugin-sidebar-test' title='My Plugin'>
			{ /*custom items/changes go here*/ }
		</PluginSidebar>
	)
}
registerPlugin( 'plugin-sidebar-test', { render: myRenderMethod} );
```

## Currently available slotFills and examples

There are currently seven available slotFills please refer to the individual items below for usage and example details:

* [PluginSidebar](plugin-sidebar)
* [PluginMoreMenuItem](plugin-more-menu-item)
* [PluginSidebarMoreMenu](plugin-sidebar-more-menu-item)
* [PluginPostStatusInfo](plugin-post-status-info)
* [PluginBlockSettingsMenuItem](plugin-block-settings-menu-item)
* [PluginPrePublishPanel](plugin-pre-post-publish-panel)
* [PluginPostPublishPanel](plugin-post-publish-panel)
