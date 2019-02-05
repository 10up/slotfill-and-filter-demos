# Filters

Filters as a concept is not new to WordPress. It is a paradigm that allows code to interact or modify other code.
To leverage Filters in Gutenberg, we will need to use the [@wordpress/hooks](https://www.npmjs.com/package/@wordpress/hooks) api.

Please see the [offical docs](https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/) for more details.

## Usage Overview

In order to register a Filter, we will need to do four things:

1. Import the `addFilter` method from `wp.hooks`.
2. Define a callback function that will be called when the Filter is run
3. Register the filter with `addFilter`.

Here is an example using the `blocks.getSaveContent.extraProps` Filter.

```js
const { addFilter } = wp.hooks;

function addSaveProps( props ) {
	return Object.assign( props, { style: { background: 'red' } } );
}

addFilter( 'blocks.getSaveContent.extraProps', 'my-custom-namespace', addSaveProps );
```
## Currently available Filters and examples.

** Note that this is not an comprehensive list.

* [blocks.getSavedContent.extraProps](./blocks-getsavecontent-extraprops)
