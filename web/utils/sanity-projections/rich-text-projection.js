import imageProjection from './image-projection'

const richTextProjection = `[]{
    _type,
    _type == 'block' => {
        _type,
        children,
        style,
        level
    },
    _type == 'image' => ${imageProjection}
}`

export default richTextProjection