import { IoDocumentOutline, IoImageOutline, IoImagesOutline, IoNewspaperOutline } from 'react-icons/io5'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const deskStructure = (S, context) => {

  return S.list()
  .title('Nature-Photography.ca')
  .items([
    S.listItem()
    .title('Pages')
    .icon(IoDocumentOutline)
    .child(
      S.documentList().title('Pages').filter('_type == "page"')
    ),
    S.divider(),
    S.listItem()
    .title('Articles')
    .icon(IoNewspaperOutline)
    .child(
      S.documentList().title('Articles').filter('_type == "article"')
    ), 
    S.divider(),
    S.listItem()
    .title('Galleries')
    .icon(IoImagesOutline)
    .child(
      S.documentList().title('Galleries').filter('_type == "gallery"')
    ), 
    orderableDocumentListDeskItem({
      type: 'photograph', 
      title: 'Photographs',
      icon: IoImageOutline,
      S, context
    }),
    S.divider()
  ])

}