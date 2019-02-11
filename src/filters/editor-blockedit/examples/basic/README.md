# editor.BlockEdit - Basic Example

In this example, we are adding new `<InspectorControls>` in the Block settings sidebar for every block.

The `<BlockEdit>` component represents the exiting controls for the block. It should be noted, that it is possible to move `<BlockEdit>` below the `<InspectorControls>`.

```js
const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

/**
 * Filter the InspectorControls for all blocks
 */
const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title='editor.BlockEdit'>
						<p>Custom Items</p>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'my-plugin/with-inspector-controls', withInspectorControls );
```
