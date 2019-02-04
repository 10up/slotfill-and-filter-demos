# PluginPostStatusInfo


## Example

```js
const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;


const PluginPostStatusInfoTest = () => {
	return(
		<PluginPostStatusInfo>
			<p>Post Status Info SlotFill</p>
		</PluginPostStatusInfo>
	)
}

registerPlugin( 'post-status-info-test', { render: PluginPostStatusInfoTest } );
```
## Location

![Alt text](../../../../master/assets/images/plugin-post-status-info-location.png?raw=true "PluginPostStatusInfo Location")

[Back to SlotFills](./src/slots)
