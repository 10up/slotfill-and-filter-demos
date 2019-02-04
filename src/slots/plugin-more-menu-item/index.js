const { registerPlugin } = wp.plugins;
const { PluginMoreMenuItem,} = wp.editPost;

const MyButtonMoreMenuItemTest = () => (
	<PluginMoreMenuItem
		icon="smiley"
		onClick={ () => { alert( 'Button Clicked' ) } }
	>
		More Menu Item
	</PluginMoreMenuItem>
);

registerPlugin( 'more-menu-item-test', { render: MyButtonMoreMenuItemTest } );
