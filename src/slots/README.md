# SlotFills

Slotfills can be defined as components that have been exposed to allow developers to inject items into some predefined places in the Gutenberg admin experience.

In order to use them, we must leverage the [@wordpress/plugins](https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-plugins/) api to register a plugin that will inject our items.

## Usage overview

In order to access the slotFills, we need to do three things:

1. Import the `registerPlugin` method form the plugin API
2. Define a method to render our changes. Our changes/additions will be wrapped in the slotFill component.
3. Register the plugin.



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
