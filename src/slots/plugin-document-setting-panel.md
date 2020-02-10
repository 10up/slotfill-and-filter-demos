# PluginDocumentSettingPanel
Renders items below the Status & Availability panel in the Document Sidebar.


## Component Structure ##
```jsx
const PluginDocumentSettingFill = ( { isEnabled, opened, onToggle, className, title, icon, children } ) => {
	if ( ! isEnabled ) {
		return null;
	}
	return (
		<Fill>
			<PanelBody
				className={ className }
				title={ title }
				icon={ icon }
				opened={ opened }
				onToggle={ onToggle }
			>
				{ children }
			</PanelBody>
		</Fill>
	);
};
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/sidebar/plugin-document-setting-panel/index.js)

## Available Props
* __name__ `string`: A string identifying the panel.
* __className__ `string`: An optional class name added to the sidebar body.
* __title__ `string`: Title displayed at the top of the sidebar.
* __icon__ `(string|Element)`: The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.

 ## Inherits icon from registerPlugin()?
Yes.

## Example
```js
const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;

const PluginDocumentSettingPanelDemo = () => (
	<PluginDocumentSettingPanel
		name="custom-panel"
		title="Custom Panel"
		className="custom-panel"
	>
		Custom Panel Contents
	</PluginDocumentSettingPanel>
);
registerPlugin( 'plugin-document-setting-panel-demo', { render: PluginDocumentSettingPanelDemo, icon: 'palmtree' } );
```
[Back: PluginSidebarMoreMenuItem ](./plugin-sidebar-more-menu-item.md) | [Next: Combine Calls ](./combine-them.md)

