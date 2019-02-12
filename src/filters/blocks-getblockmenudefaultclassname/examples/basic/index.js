const { addFilter } = wp.hooks;

const filterMenuDefaultClassName = ( classname, blockName ) => {
	return classname + ' custom-class';
};

addFilter( 'blocks.getBlockMenuDefaultClassName', 'ryanwelcher/filters/getBlockMenuDefaultClassName/basic', filterMenuDefaultClassName );
