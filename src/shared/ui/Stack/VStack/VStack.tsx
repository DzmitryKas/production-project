import { Flex, type IFlexProps } from '../Flex/Flex'

type IVStackProps = Omit<IFlexProps, 'direction'>

const VStack = (props: IVStackProps) => {
    const { align = 'start' } = props
    return (
        <Flex direction={'column'} {...props} align={align} />
    )
}

export { VStack }
