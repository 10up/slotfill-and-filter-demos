## The Gutenberg SlotFill System  ##

* `SlotFillProvider` is rendered in the `Editor` component.
* Various Slots are exposed in the `Layout` component.
* Fills are registered using the `wp.plugins` API function `registerPlugin`
* Fills are rendered in hidden div by the `PluginArea` component

  
### Pseudo code of the Editor component render function ###
```jsx
<Editor>
    <SlotFillProvider>
            <Layout> 
                <PluginArea />
            </Layout>
    </SlotFillProvider>
</Editor>
```
[View actual source](https://github.com/WordPress/gutenberg/blob/master/packages/edit-post/src/editor.js)

## Accessing the System ##

#### registerPlugin ###
This function provides an entry point to the SlotFill system by accesssing an array that contains all of the plugins ( Fills ).

### PluginArea ##
This component accesses the array of registered plugins and renders them inside a hidden div. The `SlotFillProvider` then takes over and connects the Fills to their Slot.

[Prev: Basic SlotFill System](./README.md) | [Next: wp.plugins API](./wp-plugins-api.md)