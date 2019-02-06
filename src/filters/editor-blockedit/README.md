# editor.BlockEdit

Used to modify the block’s edit component. It receives the original block `BlockEdit` component and returns a new wrapped component.

[Offical docs](https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#editor-blockedit)



## Example
In this example, we are adding a new section in the Block settings sidebar for every block.

This example utilizes `createHigherOrderComponent` to augment the existing `InspectorControls` with the new custom ones.

Please review the official docs for [@wordpress/compose](https://github.com/WordPress/gutenberg/tree/a6c36e53974ac8a9fdd6163e61b54064cfd8910f/packages/compose) 
for more information on the compose package and Higher Order Components.

```js
const { createHigherOrderComponent } = wp.compose;
const { addFilter} = wp.hooks;
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
