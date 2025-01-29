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
