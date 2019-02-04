const { createHigherOrderComponent, withState } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, BlockControls, AlignmentToolbar, Toolbar } = wp.editor;
const { PanelBody, TextControl, TextareaControl, ToggleControl, Button, ToolbarButton } = wp.components;
const { createElement } = window.wp.element;
const { registerFormatType, toggleFormat } = window.wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = window.wp.editor;
const { dispatch } = wp.data;
import classnames from 'classnames';


/**
 * Filter the InspectorControls for all blocks
 */
const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const toggleResolved = () => {
			const { attributes, setAttributes } = props;
			setAttributes({resolved: !attributes.resolved});
			dispatch( 'core/editor' ).editPost( { meta: { 'custom': 'edit' } } )
			dispatch( 'core/editor' ).updatePost( { meta: { 'custom': 'update' } } )
			dispatch( 'core/editor' ).savePost( { meta: { 'custom': 'save' } } )
		};

		const toggleApproved= () => {
			const { attributes, setAttributes } = props;
			setAttributes( { editsApproved: ! attributes.editsApproved } );
		}

		return (
			<Fragment>
			<InspectorControls>
			<PanelBody title='Editorial Comments'>
				<TextareaControl
					value={ props.attributes.comments || '' }
					onChange={ ( nextValue ) => {
					props.setAttributes( {
						comments: nextValue,
						hasComments: 'yes',
					} );
				} }
				/>
				<ToggleControl label="Comments Resolved" onChange={ toggleResolved  } checked={ props.attributes.resolved } />
				<ToggleControl label="Edits Approved" onChange={ toggleApproved } checked={ props.attributes.editsApproved } />
			</PanelBody>
			</InspectorControls>
			<BlockEdit { ...props } />
			</Fragment>
	);
	};
}, "withInspectorControl" );

wp.hooks.addFilter( 'editor.BlockEdit', 'my-plugin/with-inspector-controls', withInspectorControls );


/**
 * Filter the attributes for all blocks.
 *
 * Name can be used to limit the scope of this.
 *
 * @param settings
 * @param name
 * @returns {*}
 */
function addListBlockClassName( settings, name ) {
	if ( settings.attributes ) {
		settings.attributes.hasComments = {
			type: 'string',
			source: 'meta',
			meta: 'has-comments',
			default: 'no',
		}

		settings.attributes.comments = {
			type: 'string',
		}

		settings.attributes.editsApproved = {
			type : 'boolean'
		}
	}
	return settings;
}

wp.hooks.addFilter( 'blocks.registerBlockType', 'my-plugin/class-names/list-block', addListBlockClassName );


/**
 * Filter each of the block list items.
 *
 * In this example, we're adding classes based on block attributes.
 */
const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const newClasses = classnames({
			'has-comments': props.attributes.comments && !props.attributes.resolved,
			'comments-resolved': props.attributes.hasComments && props.attributes.resolved,
		});
		return  (
			<BlockListBlock { ...props } className={ newClasses } />
		);
	};
}, 'withClientIdClassName' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'my-plugin/with-client-id-class-name', withClientIdClassName );


function addSaveProps( props ) {
	return Object.assign( props, { style: { background: 'red' } } );
}
wp.hooks.addFilter( 'blocks.getSaveContent.extraProps', 'my-plugin/save-props', addSaveProps );


function filterPostTaxonmyType2( HierarchicalTermSelector ) {
	return (
		<HierarchicalTermSelector />
	)
}

const filterPostTaxonmyType =  createHigherOrderComponent( ( HierarchicalTermSelector ) => {
	return ( props ) => {
		switch( props.slug ) {
			case 'post_tag':
				return(
					<Fragment>
					Hi tags
						{props.OriginalComponent}
					</Fragment>
				)
			case 'category':
				return(
					<Fragment>
						Hi category
						{props.OriginalComponent}
					</Fragment>
				)
		}
	}
} )


wp.hooks.addFilter( 'editor.PostTaxonomyType', 'my-plugin/taxonomy', filterPostTaxonmyType );





