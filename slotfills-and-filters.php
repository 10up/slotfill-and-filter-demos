<?php
/**
Plugin Name: Gutenberg SlotFill and Filter demos
*/

namespace Tenup\SlotFillAndFilterDemos;


/**
 * Enqueue the JS for our demos
 */
function enqueue_ad_block_editor_assets() {
	wp_enqueue_script(
		'gb-slots-and-filters', // Handle.
		plugin_dir_url( __FILE__ ) . "/dist/bundle.js", // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-edit-post' ) // Dependencies, defined above.
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_ad_block_editor_assets' );


/**
 * Require any PHP demos we need
 */
require_once plugin_dir_path(__FILE__ ) . '/src/faq/q1/q1-solution.php';
