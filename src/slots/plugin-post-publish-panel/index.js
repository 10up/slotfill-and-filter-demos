const { registerPlugin } = wp.plugins;
const { PluginPostPublishPanel } = wp.editPost;

const PluginPostPublishPanelTest = () => {
	return (
		<PluginPostPublishPanel>
			<p>Post Publish Panel</p>
		</PluginPostPublishPanel>
	)
}

registerPlugin( 'post-publish-panel-test', { render: PluginPostPublishPanelTest } );
