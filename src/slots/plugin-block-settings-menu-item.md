# PluginBlockSettingsMenuItem
This SlotFill adds a new item in the block settings menu on any allowed block.


## Component Structure ##
```jsx
const PluginBlockSettingsMenuItem = ( { allowedBlocks, icon, label, onClick, small, role } ) => (
	<PluginBlockSettingsMenuGroup>
		{ ( { selectedBlocks, onClose } ) => {
			if ( ! shouldRenderItem( selectedBlocks, allowedBlocks ) ) {
				return null;
			}
			return ( <MenuItem
				className="editor-block-settings-menu__control block-editor-block-settings-menu__control"
				onClick={ compose( onClick, onClose ) }
				icon={ icon || 'admin-plugins' }
				label={ small ? label : undefined }
				role={ role }
			>
				{ ! small && label }
			</MenuItem> );
		} }
	</PluginBlockSettingsMenuGroup>
);
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/block-settings-menu/plugin-block-settings-menu-item.js)

## Available Props
 * __allowedBlocks__ `array`: An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the whitelist.
 * __icon__ `(string|Element)`: The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * __label__ `string`: The menu item text.
 * __onClick__ `Function`: Callback function to be executed when the user click the menu item.

 ## Inherits icon from registerPlugin()?
No. If no icon is passed, the `admin-plugins` Dashicon is used.

## Example
```jsx
const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupTest = () => (
	<PluginBlockSettingsMenuItem
		allowedBlocks={ ['core/paragraph'] }
		label='PluginBlockSettingsMenuItem Text'
		onClick={ () => { alert( 'clicked' )} } />
)

registerPlugin( 'block-settings-menu-group-test', { render: PluginBlockSettingsMenuGroupTest } );
```
[Back: PluginMoreMenuItem ](./plugin-more-menu-item.md) | [Next: PluginSidebar ](./plugin-sidebar.md)