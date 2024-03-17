import iconGroupProjection from './icon-group-projection'
import imageProjection from './image-projection'

const richTextProjection = `[]{
    _type,
    _type == 'block' => {
        _type,
        children,
        markDefs[] {
            _key,
            _type,
            href
        },
        style,
        level,

    },
    _type == 'image' => ${imageProjection},
    _type == 'icon' => ${iconGroupProjection},
}`

export default richTextProjection