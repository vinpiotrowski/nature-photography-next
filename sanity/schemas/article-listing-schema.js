import { FaRegRectangleList } from 'react-icons/fa6'

const articleListing = {
  name: 'articleListing',
  title: 'Article Listing Page',
  icon: FaRegRectangleList,
  type: 'document',
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Article Listing Page',
      }
    }
  },
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Include leading slash eg. /about',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'pageHeading'
    },
  ],
}

export default articleListing