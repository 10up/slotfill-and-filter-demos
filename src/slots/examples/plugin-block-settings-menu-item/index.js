const { PluginBlockSettingsMenuItem } = wp.editPost;
import { TenUp } from '../../../svg/icons';
const PluginBlockSettingsMenuGroupDemo = () => (
	<PluginBlockSettingsMenuItem
		icon={ TenUp }
		allowedBlockNames='core/paragraph'
		label='Menu item text'
		onClick={ () => { alert( 'clicked' ) } }
		/>
)
export default PluginBlockSettingsMenuGroupDemo;


