# PluginMoreMenuItem
Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.


## Component Structure ##
```jsx
const PluginMoreMenuItem = ( { onClick = noop, ...props } ) => (
	<PluginsMoreMenuGroup>
		{ ( fillProps ) => (
			<MenuItem
				{ ...props }
				onClick={ compose( onClick, fillProps.onClose ) }
			/>
		) }
	</PluginsMoreMenuGroup>
);
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/header/plugin-more-menu-item/index.js)

## Available Props
* __href__ `string`: When `href` is provided then the menu item is represented as an anchor rather than button. It corresponds to the `href` attribute of the anchor.
* __icon__ `string`: The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
* __onClick__ `Function`: The callback function to be executed when the user clicks the menu item.
* __...props__ `...*`: Any additional props are passed through to the underlying `MenuItem` component.

 ## Inherits icon from registerPlugin()?
Yes.

## Example
```jsx
const { registerPlugin } = wp.plugins;
const { PluginMoreMenuItem } = wp.editPost;

const MyButtonMoreMenuItemDemo = () => (
	<PluginMoreMenuItem
		href="https://10up.com/careers"
		target="_blank"
		rel="noopener noreferrer"
	>
		10up is hiring!
	</PluginMoreMenuItem>
);

registerPlugin( 'plugin-more-menu-item-demo', { render: MyButtonMoreMenuItemDemo } );
```
[Back: PluginPrePublishPanel](./plugin-pre-publish-panel.md) | [Next: PluginBlockSettingsMenuItem ](./plugin-block-settings-menu-item.md)
