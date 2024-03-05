import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'

const richTextProjection = `[]{
    _type,
    _type == 'block' => {
        _type,
        children,
        style,
        level
    },
    _type == 'image' => ${imageProjection},
    _type == 'icon' => ${iconGroupProjection}

}`

export default richTextProjection