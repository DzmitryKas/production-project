import { type TDropdownDirection } from '../../../types/ui'
import cls from './popup.module.scss'

export const mapDirectionClasses: Record<TDropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight
}
