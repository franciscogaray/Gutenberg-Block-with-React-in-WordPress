<?php
/*
Plugin Name: My Custom Block
Description: A custom Gutenberg block created with React.
Version: 1.0
Author: Your Name
*/

function my_custom_block_register_block() {
    wp_register_script(
        'my-custom-block-editor-script',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n')
    );

    register_block_type('my-custom-block/my-block', array(
        'editor_script' => 'my-custom-block-editor-script',
    ));
}
add_action('init', 'my_custom_block_register_block');
