const { registerPlugin } = wp.plugins;
const { PluginBlockSettingsMenuItem } = wp.editPost;

const PluginBlockSettingsMenuGroupTest = () => (
	<PluginBlockSettingsMenuItem
		allowedBlockNames='core/paragraph'
		icon='smiley'
		label='Menu item text'
		onClick={ () => { alert( 'clicked' )} } />
)

registerPlugin( 'block-settings-menu-group-test', { render: PluginBlockSettingsMenuGroupTest } );
