# PluginPostStatusInfo

This slot appears in the more menu of the block controls.

## Example

```js
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
```
## Location

![Alt text](../../../../master/assets/images/plugin-block-settings-menu-item-screenshot.png?raw=true "PluginBlockSettingsMenuItem Location")

[Back to SlotFills](../)
