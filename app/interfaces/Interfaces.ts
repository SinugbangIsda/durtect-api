import { RnColorScheme } from "twrnc"

export interface GlobalContextProps {
    data: any,
    action: string | null,
    error: string | null,
    dispatch: any,
    theme: RnColorScheme
}

export interface DataResultsProps {
    id: any,
    name: any,
    confidence: any,
    symptoms: any,
}

export interface JSXChildrenProps {
    children: JSX.Element | JSX.Element[]
}

export interface ButtonProps {
    twStyles?: any,
    onPress: () => void,
    children: JSX.Element | JSX.Element[],
    touchableOpacity?: boolean
}

export interface HeaderProps {
    left?: JSX.Element | JSX.Element[] | null,
    center?: JSX.Element | JSX.Element[],
    right?: JSX.Element | JSX.Element[],
}

export interface LayoutProps {
    children: JSX.Element | JSX.Element[],
    twStyles?: any,
    noSpacing?: boolean,
}

export interface CardProps {
    twStyles?: any,
    children?: JSX.Element | JSX.Element[],
    onPress?: () => void,
    blur?: boolean,
    pressable?: boolean,
    touchableOpacity?: boolean,
    activeOpacity?: number
}

export interface DiseaseScreenComponentProps {
    data: any,
    preview?: boolean
}

export interface PillProps {
    children: JSX.Element | JSX.Element[],
    twBackgroundColor: any,
    twDarkBackgroundColor?: any,
}

export interface TextProps {
    twStyles?: any,
    children: any,
    onPress?: () => void,
    key?: any
}

export interface BottomSheetProps {
    children: JSX.Element | JSX.Element[],
    ref: any
}

export interface HorizontalRuleProps {
    twStyles?: any,
    noRender?: boolean
}

export interface CachedResourcesProps {
    renderID: () => void,
    renderTheme: () => void
}

export interface ResultsComponentsProps {
    data: any,
    id?: any,
}

export interface HistoryComponentsProps {
    data: any,
    id?: any
}

export interface DiseaseComponentsProps {
    data: any
}

export interface WhatsNewComponentsProps {
    data?: any
}