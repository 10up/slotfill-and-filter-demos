## wp.plugins API ##

The `wp.plugins` API is used to manage adding and removing plugins that are used in the SlotFill system.

[View Source](https://github.com/WordPress/gutenberg/blob/master/packages/plugins/src/api/index.js)

### registerPlugin ##
`registerPlugin` is used to register a new plugin by adding it to the internal array used by the `wp.plugin` API.

#### Params ####
*  __name__ `string`: Must unique and include only lowercase alphanumeric characters or dashes, and start with a letter.
* __settings__ `Object`:
* __settings.render__ `Function`: Component containing the UI to be rendered
* __settings.icon__ `(string|WPElement|Function)`: An icon to be shown in the UI. It can be a slug of the Dashicon, or an element (or function returning an element) if you choose to render your own.

#### Icon Inheritance ###
Some SlotFills will inherit the icon passed to `registerPlugin`.


### Example ###
```jsx
const { registerPlugin } = wp.plugins;
const { PluginPostStatusInfo } = wp.editPost;

const MyFirstPlugin = () => (
    <PluginPostStatusInfo className='my-custom-classname'>
        <p>Fill Content</p>
    </PluginPostStatusInfo>
);
registerPlugin( 'example-plugin', { render: MyFirstPlugin, icon: 'smiley' } );
```

### unregisterPlugin ###
Unregisters a plugin by name
#### Params ####
*  __name__ `string`: The name of a registered plugin.

### Example ###
```jsx
const { unregisterPlugin } = wp.plugins;
unregisterPlugin( 'example-plugin' );
```

### getPlugin ###
Retrieves the settings object for a registered plugin by name.
#### Params ####
*  __name__ `string`: The name of a registered plugin.
### Returns ###
*  __name__ `Object`: Plugin settings.
### Example ###
```jsx
const { getPlugin } = wp.plugins;
getPlugin( 'example-plugin' );
```

### getPlugins ###
Retrieves the settings objects for all registered plugins.
#### Params ####
None
### Returns ###
*  __name__ `array`: Array of plugin settings objects.
### Example ###
```jsx
const { getPlugins } = wp.plugins;
getPlugins();
```

[Back: How Does Gutenberg Do It?](./how-does-gutenberg-do-it.md) | [Next: Available SlotFills](./available-slot-fills.md)