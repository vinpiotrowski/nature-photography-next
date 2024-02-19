export const deskStructure = (S, context) => {

  return S.list()
  .title('Nature-Photography.ca')
  .items([
    S.listItem()
    .title('Pages')
    .child(
      S.documentList().title('Pages').filter('_type == "homepage"')
    ), 
    S.divider(),
    S.listItem()
      .title('Photographs')
      .child(
        S.documentList().title('Photographs').filter('_type == "photograph"')
      ), 
    S.divider()
  ])

}