# PluginPostPublishPanel
Adds a custom Panel to the post-publish panel.


## Component Structure ##
```jsx
const PluginPostPublishPanel = ( { children, className, title, initialOpen = false } ) => (
	<Fill>
		<PanelBody
			className={ className }
			initialOpen={ initialOpen || ! title }
			title={ title }
		>
			{ children }
		</PanelBody>
	</Fill>
);
```
[View source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/components/sidebar/plugin-post-publish-panel/index.js)

## Available Props
* __className__ `string`: An optional class name added to the row.
* __title__ `string`: Title displayed at the top of the Panel. If omitted, the Panel header is not displayed
* __initialOpen__ `boolean`: Whether to have the panel initially opened. When no title is provided it is always opened.

 ## Inherits icon from registerPlugin()?
Yes, as of version 6.5 of the Gutenberg plugin.

## Example
```jsx
const { registerPlugin } = wp.plugins;
const { PluginPostPublishPanel } = wp.editPost;

const PluginPostPublishPanelDemo = () => (
	<PluginPostPublishPanel
		className='custom-panel-class'
		title='My Custom Panel'
		initialOpen={ true }
	>
		<p>Post Publish Panel</p>
	</PluginPostPublishPanel>
);

registerPlugin( 'plugin-post-publish-panel-demo', { render: PluginPostPublishPanelDemo } );
```
[Back: PluginPrePublishPanel](./plugin-pre-publish-panel.md) | [Next: PluginMoreMenuItem ](./plugin-more-menu-item.md)
