# PluginSidebarMoreMenuItem
Renders a menu item in `Plugins` group in `More Menu` drop down and can be used to activate the corresponding `PluginSidebar` component.

## Component Structure ##
```jsx
const PluginSidebarMoreMenuItem = ( { children, icon, isSelected, onClick } ) => (
	<PluginMoreMenuItem
		icon={ isSelected ? 'yes' : icon }
		isSelected={ isSelected }
		role="menuitemcheckbox"
		onClick={ onClick }
	>
		{ children }
	</PluginMoreMenuItem>
);
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/header/plugin-sidebar-more-menu-item/index.js)

## Available Props
* __target__ `string`: A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
 * __icon__ `(string|Element)`: The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.

 ## Inherits icon from registerPlugin()?
Yes.

## Example
```js
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { PanelBody } = wp.components;

const PluginSidebarMoreMenuItemDemo = () => (
	<>
		<PluginSidebarMoreMenuItem
			target="sidebar-name"
			icon="smiley"
		>
			PluginSidebarMoreMenuItem - Menu Item
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sidebar-name"
			icon="smiley"
			title="PluginSidbarMoreMenuItem"
		>
			<PanelBody>
				PluginSidebarMoreMenuItem - Panel Content
			</PanelBody>
		</PluginSidebar>
	</>
);
registerPlugin( 'plugin-sidebar-plugin-sidebar-more-menu-item-demo', { render: PluginSidebarMoreMenuItemDem } );
```
[Back: PluginSidebar ](./plugin-sidebar.md) | [Next: PluginDocumentSettingPanel ](./plugin-document-setting-panel.md)

