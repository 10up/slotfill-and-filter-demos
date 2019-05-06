const { registerPlugin } = wp.plugins;
const { PluginDocumentSetting } = wp.editPost;

const MyDocumentSettingTest = () => (
	<PluginDocumentSetting className="my-document-setting-plugin">
		<p>My Document Setting Panel</p>
	</PluginDocumentSetting>
);

registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
