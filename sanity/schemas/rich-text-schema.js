const richText = {
    name: 'richText',
    type: 'array',
    title: 'Rich Text',
    of: [
        {
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'Heading 1', value: 'h1'},
                {title: 'Heading 2', value: 'h2'},
                {title: 'Heading 3', value: 'h3'},
                {title: 'Heading 4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
            ],
            marks: {
                decorators: [
                    {title: 'Strong', value: 'strong'},
                    {title: 'Emphasis', value: 'em'}

                ],
            },
        },
        {
            type: 'image',
            options: {
                hostspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                }
            ]
        }
    ]
}

export default richText