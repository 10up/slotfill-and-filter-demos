# PluginSidebar


## Example

```js
const { registerPlugin } = wp.plugins;
const { PluginSidebar } = wp.editPost;

const PluginSidebarTest = () => {
	return(
		<PluginSidebar name='plugin-sidebar-test' title='My Plugin'>
			<p>Plugin Sidebar</p>
		</PluginSidebar>
	)
}
registerPlugin( 'plugin-sidebar-test', { render: PluginSidebarTest } );
```
## Location
