const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { compose } = wp.compose;
const { withDispatch, withSelect} = wp.data;

const MyDocumentSettingTest = () => (
	<>
		<PluginDocumentSettingPanel
			name={'my-title'}
			title={"My Title"}
			className={"my-awesome-class"}
			icon={'smiley'}
		>
			My Document Setting Panel
		</PluginDocumentSettingPanel>
		<PluginDocumentSettingPanel
			name={'my-title-2'}
			title={"My Title 2"}
			className={"my-awesome-class"}
		>
			My Document Setting Panel 2
		</PluginDocumentSettingPanel>
		<PluginDocumentSettingPanel
			name={'my-title-3'}
			title={"My Title 3"}
			className={"my-awesome-class"}
		>
			My Document Setting Panel 3
		</PluginDocumentSettingPanel>
	</>
);
registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest, icon: 'twitter'  });
