# editor.BlockEdit - Adding to a specific block

In this example, we are adding a new section in the Block settings sidebar for only the paragraph block by looking into `props` for the `name`.

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
				{ ( props.name === 'core/paragraph' ) &&
					<InspectorControls>
						<PanelBody title='Per Block Example: editor.BlockEdit'>
							<p>Only Added to Paragraph Blocks</p>
						</PanelBody>
					</InspectorControls>
				}
			</Fragment>
		);
	};
}, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'my-plugin/with-inspector-controls', withInspectorControls );
```
