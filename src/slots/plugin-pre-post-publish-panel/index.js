const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel }= wp.editPost;

const PluginPrePublishPanelTest = () => {
	return (
		<PluginPrePublishPanel>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	)
}

registerPlugin( 'pre-publish-panel-test', { render: PluginPrePublishPanelTest } );
