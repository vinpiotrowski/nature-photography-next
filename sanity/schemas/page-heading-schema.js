import { BsCardHeading } from 'react-icons/bs'

const pageHeading = {
    name: 'pageHeading',
    title: 'Page Heading',
    icon: BsCardHeading,
    preview: {
      select: {
        title: 'headline'
      },
      prepare(selection) {
        const {title} = selection
        return {
          title: title,
          subtitle: 'Page Heading',
        }
      }
    },
    type: 'object',
    fields: [
      {
        name: 'variant',
        title: 'Variant',
        type: 'string',
        options: {
          list: [
            {title: 'Regular', value: 'reg'},
            {title: 'Mega Chonk', value: 'mega'},
            {title: 'Pointy', value: 'pointy'},
          ], 
          layout: 'radio'
        }
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'string'  
      },
      {
        name: 'intro',
        title: 'Intro',
        type: 'text'  
      },  
    ]
}

export default pageHeading