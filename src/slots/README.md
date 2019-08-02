## Basic SlotFill System  ##
There are three components that make up a basic SlotFill system.

### Slot ##
Wherever this component is rendered any Fills with the same name will have their content rendered here.

#### Props: ####
* {string}  __name__             The name of the Slot.
* {Object}  __fillProps__         Object that is passed to Fills.
* {Boolean} __bubblesVirtually__ Changes event bubbling behavior     
### Example ###
```jsx
const { Slot } = wp.components;
<Slot 
    name="my-slot-name" 
    fillProps={ { key: 'value' } } 
    bubblesVirtually
/>
```

### Fill ##
The contents of the Fill will be rendered in the Slot with the same name property. Regardless of where the Fill is rendered.
#### Props: ####
* {string} __name__ The name of the Slot that this Fill associated with.

### Example ###
```jsx
const { Fill } = wp.components;
<Fill name="my-slot-name">
    Fill Contents
</Fill>
```

### SlotFillProvider ##
This component is the glue that connects Fills with their associated Slot. Both the Slot and Fill components must be wrapped by this component.
#### Props: ####
None


### Basic Slot Fill System Example ###
* Root of the application renders a `SlotFillProvider`.
* A named Slot is rendered in the app.
* A Fill with the same name will occupy the Slot, even if rendered elsewhere.


```jsx
 const { Fill, Slot, SlotFillProvider } = wp.components;
<SlotFillProvider>
    <Slot 
        name="my-slot-name" 
        fillProps={ { key: 'value' } } 
        bubblesVirtually
    />
    <Fill name="my-slot-name">
        Fill Contents
    </Fill>
</SlotFillProvider>
```

[Next: How Does Gutenberg Do It?](./how-does-gutenberg-do-it.md)