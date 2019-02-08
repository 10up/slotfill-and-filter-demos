<?php
namespace Welcher\SlotFillAndFilterDemos;

/**
 * Register meta box(es).
 */
function register_meta_boxes() {
	add_meta_box(
		'meta-box-id',
		'Custom Meta Box',
		__NAMESPACE__ . '\render_meta_box',
		'post',
		'side' // this is important
	);
}
add_action( 'add_meta_boxes', __NAMESPACE__ . '\register_meta_boxes' );

/**
 * Meta box display callback.
 *
 * @param \WP_Post $post Current post object.
 */
function render_meta_box( $post ) {
	?>
	<p>Added to the Document Sidebar</p>
	<?php
}
