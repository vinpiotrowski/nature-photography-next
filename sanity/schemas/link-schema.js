const link = {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
      {
        name: 'variant',
        title: 'Variant',
        type: 'string',
        options: {
          list: [
            {title: 'Internal', value: 'internal'},
            {title: 'External', value: 'external'}
          ],
          layout: 'radio'

        }
      },
      {
        name: 'text',
        title: 'Text',
        type: 'string',
      },
      {
        name: 'internalRef',
        title: 'Internal Ref',
        type: 'reference',
        to: [
          {type:'contentBlockPage'},
          {type:'gallery'}
        ],
        hidden: ({parent}) => parent?.variant !== 'internal'
      },
      {
        name: 'externalRef',
        title: 'External Ref',
        type: 'url',
        hidden: ({parent}) => parent?.variant !== 'external'
      }
    ]
}

export default link