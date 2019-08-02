# PluginSidebar
Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.

## Component Structure ##
```jsx
function PluginSidebar( props ) {
	const {
		children,
		className,
		icon,
		isActive,
		isPinnable = true,
		isPinned,
		sidebarName,
		title,
		togglePin,
		toggleSidebar,
	} = props;

	return (
		<>
			{ isPinnable && (
				<PinnedPlugins>
					{ isPinned && <IconButton
						icon={ icon }
						label={ title }
						onClick={ toggleSidebar }
						isToggled={ isActive }
						aria-expanded={ isActive }
					/> }
				</PinnedPlugins>
			) }
			<Sidebar
				name={ sidebarName }
				label={ __( 'Editor plugins' ) }
			>
				<SidebarHeader
					closeLabel={ __( 'Close plugin' ) }
				>
					<strong>{ title }</strong>
					{ isPinnable && (
						<IconButton
							icon={ isPinned ? 'star-filled' : 'star-empty' }
							label={ isPinned ? __( 'Unpin from toolbar' ) : __( 'Pin to toolbar' ) }
							onClick={ togglePin }
							isToggled={ isPinned }
							aria-expanded={ isPinned }
						/>
					) }
				</SidebarHeader>
				<Panel className={ className }>
					{ children }
				</Panel>
			</Sidebar>
		</>
	);
}
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/sidebar/plugin-sidebar/index.js)

## Available Props
* __name__ `string`: A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin.
* __className__ `string`: An optional class name added to the sidebar body.
* __title__ `string`: Title displayed at the top of the sidebar.
* __isPinnable__ `boolean`: Whether to allow to pin sidebar to toolbar.
 * __icon__ `(string|Element)`: The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.

 ## Inherits icon from registerPlugin()?
Yes.

## Example
While this SlotFill can be used on it's own, it is meant to be used in conjunction with `PluginSidebarMoreMenuItem`. Without `PluginSidebarMoreMenuItem`, it is possible to unpin this Sidebar with no way to retrieve it.

[Back: PluginBlockSettingsMenuItem ](./plugin-block-settings-menu-item.md) | [Next: PluginSidebarMoreMenuItem ](./plugin-sidebar-more-menu-item.md)
