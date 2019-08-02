const { PluginPrePublishPanel }= wp.editPost;

const PluginPrePublishPanelDemo = () => {
	return (
		<PluginPrePublishPanel
			title="The first"
		>
			<p> Pre Publish Panel </p>
		</PluginPrePublishPanel>
	)
}
export default PluginPrePublishPanelDemo;
