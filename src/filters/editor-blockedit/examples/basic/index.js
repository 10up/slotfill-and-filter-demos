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
					<PanelBody title='Basic Example: editor.BlockEdit'>
						<p>Every Block Gets This</p>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'ryanwelcher/filters/blockedit/basic', withInspectorControls );
