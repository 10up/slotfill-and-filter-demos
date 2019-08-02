# PluginPostStatusInfo
Adds items into the Status and Availability panel of the Document Sidebar.


## Component Structure ##
```jsx
const PluginPostStatusInfo = ( { children, className } ) => (
	<Fill>
		<PanelRow className={ className }>
			{ children }
		</PanelRow>
	</Fill>
);
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/sidebar/plugin-post-status-info/index.js)

## Available Props
* __className__ `string`: An optional class name added to the row.

 ## Inherits icon from registerPlugin()?
No. Not needed.

## Example
```jsx
const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;

const PluginPostStatusInfoDemo = () => (
	<PluginPostStatusInfo className='my-custom-classname'>
		<p>Post Status Info SlotFill</p>
	</PluginPostStatusInfo>
);

registerPlugin( 'plugin-post-status-info-demo', { render: PluginPostStatusInfoDemo } );
```
[Back: Available SlotFills](./available-slot-fills.md) | [Next: PluginPrePublishPanel](./plugin-pre-publish-panel.md)
