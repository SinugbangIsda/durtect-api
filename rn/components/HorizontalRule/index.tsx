import { Styles } from '../../constants';
import { View } from 'react-native';
import { HorizontalRuleProps } from '../../interfaces/Interfaces';
import tw from '../../utils/tw';
import { useEffect } from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const HorizontalRule = ({ twStyles, noRender }: HorizontalRuleProps) => {
    return (
        <View style = {[ twStyles ?  tw `${twStyles}` : null, noRender ? null : Styles.lineStyle ]} />
    )
}

export default HorizontalRule;
