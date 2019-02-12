# blocks.getBlockMenuDefaultClassName - Basic Example

In this example, we are adding a new class to each button in the Add Block interface.

```js
const { addFilter } = wp.hooks;

const filterMenuDefaultClassName = ( classname, blockName ) => {
	return classname + ' custom-class';
};

addFilter( 'blocks.getBlockMenuDefaultClassName', 'ryanwelcher/filters/getBlockMenuDefaultClassName/basic', filterMenuDefaultClassName );
```
