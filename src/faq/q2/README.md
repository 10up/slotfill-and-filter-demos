# How do I use a custom slotFill?

This came up for me recently and this was my solution.


# Full Solution
The solution here comes down to three parts:

### Defining the SlotFill and exporting it.

```js
/**
 * Creates a custom slot fill
 */
const { createSlotFill } = wp.components;
const { Fill, Slot } = createSlotFill( 'PluginMyCustomSlotFill' );

const PluginMyCustomSlotFill = ( { children, classname } ) => (
	<Fill>{ children }</Fill>
);

PluginMyCustomSlotFillSlot = Slot;

export default PluginMyCustomSlotFill;
```

### Exposing the new SlotFill in your code.

```js
import PluginMyCustomSlotFill from '../plugin-my-custom-slot-fill';

const SomeOtherComponent = () => {
    <Fragment>
        <PluginMyCustomSlotFill.Slot />
    </Fragment>
}
```
### registering a plugin to add an item to the new SlotFill.

```js
const { registerPlugin } = wp.plugins;
import PluginMyCustomSlotFill from '../plugin-my-custom-slot-fill';

const renderMyFill = () => (
    <PluginMyCustomSlotFill>
        // Your stuff in here.
    <PluginMyCustomSlotFill/>
   
)
registerPlugin(
	'my-namespace',
	{ render: renderMyFill }
```
