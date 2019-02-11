# editor.BlockEdit

Used to modify the block’s edit component. It receives the original block `BlockEdit` component and returns a new wrapped component.

[Offical docs](https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#editor-blockedit)


## Example
In this example, we are adding a new section in the Block settings sidebar for every block.

This example utilizes `createHigherOrderComponent`. Please review the official docs for [@wordpress/compose](https://github.com/WordPress/gutenberg/tree/a6c36e53974ac8a9fdd6163e61b54064cfd8910f/packages/compose) 
for more information on the compose package and Higher Order Components.

**Dev note Feb/06/2019:**
 `createHigherOrderComponent` is not strictly required to make this example work. It currently only makes the name passed in the second parameter appear in React Dev tools.
However, it is the recommended pattern and should be followed.

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
