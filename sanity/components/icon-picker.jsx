import {Autocomplete, Box, Card, Stack, Text} from '@sanity/ui'
import {useCallback, useMemo, useState} from 'react'
import {PatchEvent, set, unset} from 'sanity'
import {Icons} from './icon-list'



export const IconPicker = (props) => {
    const {onChange, value} = props
    const [currentIcon, setCurrentIcon] = useState(value || '')

    const iconOptions = useMemo(() => {
        return Icons.map((icon, index) => {
            return {
                key: icon.value,
                text: icon.value,
                value: icon.value,
                payload: {
                    icon: icon.path,
                }
            }
        })
    }, [Icons])


    const handleIconChange = useCallback(
        (selection) => {
            if (selection === '') {
                setCurrentIcon('')
                onChange(PatchEvent.from(unset()))
            } else {
                const selectionDetail = Icons.find((icon) => icon.value === selection)
                if(true) {
                    setCurrentIcon(selectionDetail?.value)
                    onChange(PatchEvent.from(set(selectionDetail?.value)))
                }
            }
        }, [currentIcon, onChange]
    )

    const currentIconObject = Icons.find((icon) => icon.value === currentIcon)

    return (
        <Box paddintTop={2}>
            <Stack space={[3, 3, 3, 3]}>
                <img 
                    src={currentIconObject?.path || '/static/icons/box.svg'}
                    style={{
                        height: '48px',
                        width: '48px',
                        verticalAlign: 'middle',
                        backgroundColor: 'white',
                        padding: '4px',
                        border: '1px solid #CED2D9'
                    }}
                />
                <Autocomplete
                    value={currentIconObject?.value}
                    fontSize={[2, 2, 2]}
                    filterOption={(query, option) =>
                        option?.text.toLowerCase().indexOf(query.toLowerCase()) > -1
                    }
                    id='icon-list'
                    options={iconOptions}
                    openButton
                    placeholder='Select an icon'
                    onSelect={handleIconChange}
                    onChange={handleIconChange}
                    radius={0}
                    renderOption={(option) => (
                        <Card as='button'>
                            <Box flex={1} padding={3}>
                                <Text size={[2, 2, 3]}>
                                    <img 
                                        src={option?.payload?.icon}
                                        style={{
                                            backgroundColor: 'white',
                                            height: '28px',
                                            width: '28px',
                                            verticalAlign: 'middle',
                                            padding: '2px',
                                            marginRight: '10px'
                                        }}
                                    />
                                    <span>{option?.text}</span>
                                </Text>
                            </Box>
                        </Card>
                    )}
                    renderValue={(value => value)}
                />
            </Stack>
        </Box>
    )
}
