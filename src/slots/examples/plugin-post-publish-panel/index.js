
const { PluginPostPublishPanel } = wp.editPost;

const PluginPostPublishPanelDemo = () => {
	return (
		<PluginPostPublishPanel
			title="Test"
		>
			<p>Post Publish Panel</p>
		</PluginPostPublishPanel>
	)
}
export default PluginPostPublishPanelDemo;
