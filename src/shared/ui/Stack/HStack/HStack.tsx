import { Flex, type IFlexProps } from '../Flex/Flex'

type IHStackProps = Omit<IFlexProps, 'direction'>

const HStack = (props: IHStackProps) => {
    return (
        <Flex direction={'row'} {...props} />
    )
}

export { HStack }
