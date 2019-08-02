const { registerPlugin } = wp.plugins;

const {
	PluginSidebar,
	PluginSidebarMoreMenuItem
} = wp.editPost;

const { Fragment } = wp.element;

const PluginSidebarMoreMenuItemDemo = () => (
	<Fragment>
		<PluginSidebarMoreMenuItem
			target="sidebar-name"
		>
			Expanded Sidebar - More item
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sidebar-name"
			title="My Sidebar" >
			Content of the sidebar
		</PluginSidebar>
	</Fragment>
)

export default PluginSidebarMoreMenuItemDemo;

