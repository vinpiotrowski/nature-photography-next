import {Icons} from './icon-list'

export function IconMediaPreview(iconName) {
    if (!iconName) {
        return null
    }
    const icon = Icons.find((icon) => icon.value === iconName)
    const iconPath = icon?.path || '/static/icons/box.svg'
    const containerStyles = {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
    const iconStyles = {
        width: '28px',
        height: '28px',
        padding: '0.1875rem',
        objectFit: 'contain'
    }

    return (
        <span style={containerStyles}>
            <img src={iconPath} alt='' style={iconStyles} />
        </span>
    )
}