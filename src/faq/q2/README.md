# How do I use a custom slotFill?

The solution here comes down to three parts:

### Defining the SlotFill and exporting it.

In the example below, we are creating the new SlotFill in its own file and exporting it.
The name of the SlotFill is prefixed with `Plugin`. This is a convention that is not required but all core SlotFills are prefixed with it.
```js
/**
 * Creates a custom slot fill
 */
const { createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'PluginMyCustomSlotFill' );

const PluginMyCustomSlotFill = ( { children, classname } ) => (
	<Fill>{ children }</Fill>
);

PluginMyCustomSlotFill.Slot = Slot;

export default PluginMyCustomSlotFill;
```

### Exposing the new SlotFill in your code.

We import the custom SlotFill and expose the slot in another component.
If you need to pass props to your slot, we can do do by setting the `fillProps` property. This is optional.
```js
import PluginMyCustomSlotFill from '../plugin-my-custom-slot-fill';

const SomeOtherComponent = ( props ) => {
    <Fragment>
        <PluginMyCustomSlotFill.Slot fillProps={ { props } } />
    </Fragment>
}
```
### Register a plugin to add an item to the new SlotFill.

Using registerPlugin, we add items to our custom SlotFill just like any other one.

```js
const { registerPlugin } = wp.plugins;
import PluginMyCustomSlotFill from '../plugin-my-custom-slot-fill';

const renderMyFill = () => (
    <PluginMyCustomSlotFill>
        // Your stuff in here.
    </PluginMyCustomSlotFill>
   
)

const RenderMyFillWithProps = () = {
    return(
        <PluginMyCustomSlotFill>
        { ( { props } ) => {
            // Your stuff in here.
        } } 
        </PluginMyCustomSlotFill>
    )
}

registerPlugin( 'my-namespace', { render: renderMyFill } );
```
