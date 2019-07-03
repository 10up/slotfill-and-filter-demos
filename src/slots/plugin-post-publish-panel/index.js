const { registerPlugin } = wp.plugins;
const { PluginPostPublishPanel } = wp.editPost;

const PluginPostPublishPanelTest = () => {
	return (
		<PluginPostPublishPanel
			title="Test"
		>
			<p>Post Publish Panel</p>
		</PluginPostPublishPanel>
	)
}

registerPlugin( 'post-publish-panel-test', { render: PluginPostPublishPanelTest, icon: 'twitter' } );
