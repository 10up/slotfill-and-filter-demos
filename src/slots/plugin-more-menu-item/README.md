# PluginMoreMenuItem

## Example

```js
const { registerPlugin } = wp.plugins;
const { PluginMoreMenuItem,} = wp.editPost;

const MyButtonMoreMenuItemTest = () => (
	<PluginMoreMenuItem
		icon="smiley"
		onClick={ () => { alert( 'Button Clicked' ) } }
	>
		My button title
	</PluginMoreMenuItem>
);

registerPlugin( 'more-menu-item-test', { render: MyButtonMoreMenuItemTest } );
```

## Location
[Back to SlotFills](../)
