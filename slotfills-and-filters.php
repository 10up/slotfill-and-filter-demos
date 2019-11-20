<?php
/**
 * Plugin Name: Gutenberg SlotFill and Filter Demos.
 * Description: This plugin can be used as a reference. Each SlotFill or filter is explained with examples. This is meant to be a working document and will change as Gutenberg does.
 * Version: 1.0.0
 * Author: 10up, Ryan Welcher
 * Author URI: https://www.10up.com
*/

namespace Tenup\SlotFillAndFilterDemos;


/**
 * Enqueue the JS for our demos
 */
function enqueue_ad_block_editor_assets() {
	if ( \file_exists( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' ) ) {
		$assets = require_once plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
		wp_enqueue_script(
			'gb-slots-and-filters', // Handle.
			plugin_dir_url( __FILE__ ) . "/build/index.js",
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_ad_block_editor_assets' );


/**
 * Require any PHP demos we need
 */
require_once plugin_dir_path(__FILE__ ) . '/src/faq/q1/q1-solution.php';
