const { addFilter } = wp.hooks;

function addSaveProps( props ) {
	return Object.assign( props, { style: { background: 'red' } } );
}

addFilter( 'blocks.getSaveContent.extraProps', 'my-custom-namespace', addSaveProps );
