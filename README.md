# Gutenberg Block with React in WordPress
Creating a custom Gutenberg block in WordPress using React involves several steps. Below is a step-by-step guide to help you create a simple custom block from scratch.

### **Step 1: Set Up the Block Plugin**
1. **Create a Plugin Folder**:
   - Navigate to the `wp-content/plugins` directory in your WordPress installation.
   - Create a new folder for your custom block plugin, e.g., `my-custom-block`.

2. **Create the Plugin File**:
   - Inside the `my-custom-block` folder, create a PHP file named `my-custom-block.php`.
   - Add the following code to register the plugin:

     ```php
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
     ```

---

### **Step 2: Set Up the React Environment**
1. **Initialize npm**:
   - Open a terminal and navigate to your plugin folder (`my-custom-block`).
   - Run the following command to initialize npm:

     ```bash
     npm init -y
     ```

2. **Install Required Dependencies**:
   - Install the necessary packages for building the block:

     ```bash
     npm install @wordpress/scripts @wordpress/blocks @wordpress/components @wordpress/element @wordpress/i18n --save-dev
     ```

3. **Configure the Build Script**:
   - Open the `package.json` file and replace the `scripts` section with:

     ```json
     "scripts": {
       "build": "wp-scripts build",
       "start": "wp-scripts start"
     }
     ```

---

### **Step 3: Create the Block JavaScript File**
1. **Create the Block Folder**:
   - Inside your plugin folder, create a new folder named `src`.

2. **Create the Block File**:
   - Inside the `src` folder, create a file named `index.js`.
   - Add the following code to define your custom block:

     ```javascript
     import { registerBlockType } from '@wordpress/blocks';
     import { useBlockProps } from '@wordpress/block-editor';
     import { __ } from '@wordpress/i18n';

     registerBlockType('my-custom-block/my-block', {
         title: __('My Custom Block', 'my-custom-block'),
         icon: 'smiley',
         category: 'widgets',

         edit: () => {
             const blockProps = useBlockProps();

             return (
                 <div {...blockProps}>
                     <p>{__('Hello from the editor!', 'my-custom-block')}</p>
                 </div>
             );
         },

         save: () => {
             const blockProps = useBlockProps.save();

             return (
                 <div {...blockProps}>
                     <p>{__('Hello from the frontend!', 'my-custom-block')}</p>
                 </div>
             );
         },
     });
     ```

---

### **Step 4: Build the Block**
1. **Run the Build Command**:
   - In the terminal, run the following command to build the block:

     ```bash
     npm run build
     ```

   - This will generate a `build` folder containing the compiled JavaScript files.

---

### **Step 5: Enable the Block in WordPress**
1. **Activate the Plugin**:
   - Go to the WordPress admin dashboard.
   - Navigate to **Plugins > Installed Plugins**.
   - Find **My Custom Block** and click **Activate**.

2. **Add the Block to a Post**:
   - Create or edit a post.
   - Search for your block (e.g., "My Custom Block") in the block inserter and add it to the post.

---

### **Step 6: Customize the Block (Optional)**
1. **Add Attributes**:
   - You can add attributes to make the block dynamic. For example:

     ```javascript
     attributes: {
         content: {
             type: 'string',
             source: 'html',
             selector: 'p',
         },
     },
     ```

2. **Add Controls**:
   - Use components like `TextControl` or `RichText` from `@wordpress/components` to add editable fields.

3. **Style the Block**:
   - Add CSS styles in the `edit` and `save` functions or create a separate stylesheet.

---

### **Step 7: Test and Debug**
1. **Test the Block**:
   - Ensure the block works as expected in both the editor and the frontend.
2. **Debug**:
   - Use browser developer tools to debug any issues.

---

### **Step 8: Extend and Improve**
- Add more features, such as:
  - Custom controls.
  - Server-side rendering.
  - Internationalization support.

---

That's it! You've created a custom Gutenberg block using React in WordPress.
