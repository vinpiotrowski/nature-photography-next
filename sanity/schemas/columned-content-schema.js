import { BsColumns } from 'react-icons/bs'

const columnedContent = {
    name: 'columnedContent',
    title: 'Columned Content',
    type: 'document',
    icon: BsColumns,
    preview: {
        select: {
          title: 'entryTitle'
        },
        prepare(selection) {
          const {title} = selection
          return {
            title: title,
            subtitle: 'Columned Content',
          }
        }
    },
    fieldsets: [
        {
            name: 'columnOne',
            title: 'Column 01',
        },
        {
            name: 'columnTwo',
            title: 'Column 02',
            hidden: ({document}) => document?.variant?.includes('1')
        },
        {
            name: 'columnThree',
            title: 'Column 03',
            hidden: ({document}) => document?.variant?.includes('1') || document?.variant?.includes('2')
        },
        {
            name: 'columnFour',
            title: 'Column 04',
            hidden: ({document}) => !document?.variant?.includes('4')
        },
    ],
    fields: [
        {
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'For CMS use only',
            type: 'string'
        },
        {
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options: {
                list: [
                    {title: 'One', value: '1a'},
                    {title: 'Two', value: '2a'},
                    {title: 'Three', value: '3a'},
                    {title: 'Four', value: '4a'}
                ], 
                layout: 'radio'
            }
        },
        {
            name: 'columnOneHorizontalAlign',
            title: 'Column 01 Horizontal Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'},
                ], 
                layout: 'radio'
            },
            initialValue: 'left',
            fieldset: 'columnOne'
        },
        {
            name: 'columnOneVerticalAlign',
            title: 'Column 01 Vertical Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Top', value: 'top'},
                    {title: 'Middle', value: 'middle'},
                    {title: 'Bottom', value: 'bottom'},
                ], 
                layout: 'radio'
            },
            initialValue: 'top',
            fieldset: 'columnOne'
        },
        {
            name: 'columnOneBody',
            title: 'Column 01 Body',
            type: 'richText',
            fieldset: 'columnOne'
        },

        {
            name: 'columnTwoHorizontalAlign',
            title: 'Column 02 Horizontal Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'},
                ], 
                layout: 'radio'
            },
            initialValue: 'left',
            fieldset: 'columnTwo'
        },
        {
            name: 'columnTwoVerticalAlign',
            title: 'Column 02 Vertical Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Top', value: 'top'},
                    {title: 'Middle', value: 'middle'},
                    {title: 'Bottom', value: 'bottom'},
                ], 
                layout: 'radio'
            },
            initialValue: 'top',
            fieldset: 'columnTwo'
        },
        {
            name: 'columnTwoBody',
            title: 'Column 02 Body',
            type: 'richText',
            fieldset: 'columnTwo'
        },

        {
            name: 'columnThreeHorizontalAlign',
            title: 'Column 03 Horizontal Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'},
                ], 
                layout: 'radio'
            },
            initialValue: 'left',
            fieldset: 'columnThree'
        },
        {
            name: 'columnThreeVerticalAlign',
            title: 'Column 03 Vertical Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Top', value: 'top'},
                    {title: 'Middle', value: 'middle'},
                    {title: 'Bottom', value: 'bottom'},
                ], 
                layout: 'radio'
            },
            initialValue: 'top',
            fieldset: 'columnThree'
        },
        {
            name: 'columnThreeBody',
            title: 'Column 03 Body',
            type: 'richText',
            fieldset: 'columnThree'
        },

        {
            name: 'columnFourHorizontalAlign',
            title: 'Column 04 Horizontal Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Left', value: 'left'},
                    {title: 'Center', value: 'center'},
                    {title: 'Right', value: 'right'},
                ], 
                layout: 'radio'
            },
            initialValue: 'left',
            fieldset: 'columnFour'
        },
        {
            name: 'columnFourVerticalAlign',
            title: 'Column 04 Vertical Align',
            type: 'string',
            options: {
                list: [
                    {title: 'Top', value: 'top'},
                    {title: 'Middle', value: 'middle'},
                    {title: 'Bottom', value: 'bottom'},
                ], 
                layout: 'radio'
            },
            initialValue: 'top',
            fieldset: 'columnFour'
        },
        {
            name: 'columnFourBody',
            title: 'Column 04 Body',
            type: 'richText',
            fieldset: 'columnFour'
        }
    ]
}

export default columnedContent