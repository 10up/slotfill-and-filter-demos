
const { PluginDocumentSettingPanel } = wp.editPost;

const PluginDocumentSettingPanelDemo = () => (
	<>
		<PluginDocumentSettingPanel
			name={'my-custom-panel'}
			title={"Custom Panel Title"}
			className={"my-awesome-class"}
		>
			My Document Setting Panel content
		</PluginDocumentSettingPanel>
	</>
);

export default PluginDocumentSettingPanelDemo;
