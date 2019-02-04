<?php
/**
Plugin Name: Gutenberg SlotFill and Filter demos
*/

namespace Welcher\SlotFillAndFilterDemos;

add_action( 'enqueue_block_editor_assets', 'enqueue_ad_block_editor_assets' );
function enqueue_ad_block_editor_assets() {
	wp_enqueue_script(
		'gb-slots-and-filters', // Handle.
		plugin_dir_url( __FILE__ ) . "/dist/bundle.js", // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-edit-post' ) // Dependencies, defined above.
	);
}

