const { PluginMoreMenuItem } = wp.editPost;

const PluginMoreMoreItemDemo = () => (
	<PluginMoreMenuItem
		onClick={ () => { alert( 'Button Clicked' ) } }
	>
		More Menu Item
	</PluginMoreMenuItem>
);
export default PluginMoreMoreItemDemo;

