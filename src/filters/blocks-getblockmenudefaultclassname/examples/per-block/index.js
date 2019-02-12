const { addFilter } = wp.hooks;

const filterMenuDefaultClassName = ( classname, blockName ) => {

	if ( 'core/paragraph' === blockName ) {
		return classname + ' paragraph-only';
	}
	return classname;
};

addFilter( 'blocks.getBlockMenuDefaultClassName', 'ryanwelcher/filters/getBlockMenuDefaultClassName/perblock', filterMenuDefaultClassName );
