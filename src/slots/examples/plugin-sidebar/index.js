const { registerPlugin } = wp.plugins;
const { PluginSidebar } = wp.editPost;

const PluginSidebarTest = () => {
	return(
		<PluginSidebar
			name='plugin-sidebar-test'
			title='My Plugin'
			icon="twitter"
		>
			<p>Plugin Sidebar</p>
		</PluginSidebar>
	)
};
registerPlugin( 'plugin-sidebar-test', { render: PluginSidebarTest, icon: 'twitter', priority: 1 } );
