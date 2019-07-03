const { registerPlugin } = wp.plugins;
const { PluginPrePublishPanel }= wp.editPost;

const PluginPrePublishPanelTest2 = () => {
	return (
		<PluginPrePublishPanel
			title="The second"
		>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	)
}

registerPlugin( 'pre-publish-panel-test-two', { render: PluginPrePublishPanelTest2, icon: 'twitter' } );

const PluginPrePublishPanelTest = () => {
	return (
		<PluginPrePublishPanel
			title="The first"
		>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	)
}

registerPlugin( 'pre-publish-panel-test', { render: PluginPrePublishPanelTest, icon: 'twitter', priority: 9 } );
