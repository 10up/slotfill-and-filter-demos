const { registerPlugin } = wp.plugins;

const {
	PluginSidebar,
	PluginSidebarMoreMenuItem
} = wp.editPost;

const { Fragment } = wp.element;

const PluginSidebarMoreMenuItemTest = () => (
	<Fragment>
		<PluginSidebarMoreMenuItem
			target="sidebar-name"
			icon="smiley"
		>
			Expanded Sidebar - More item
		</PluginSidebarMoreMenuItem>
		<PluginSidebar
			name="sidebar-name"
			icon="smiley"
			title="My Sidebar" >
			Content of the sidebar
		</PluginSidebar>
	</Fragment>
)

registerPlugin( 'plugin-sidebar-expanded-test', { render: PluginSidebarMoreMenuItemTest } );
