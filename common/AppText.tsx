import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  fontFamily,
  fontFamilyBold,
  fontFamilySemiBold,
} from '../theme/typography';
import {colors} from '../theme/colors';

export const THIRTEEN = 'THIRTEEN';
export const FIFTEEN = 'FIFTEEN';
export const SIXTEEN = 'SIXTEEN';
export const TWENTY = 'TWENTY';
export const FOURTEEN = 'FOURTEEN';
export const EIGHTEEN = 'EIGHTEEN';
export const NINETEEN = 'NINETEEN';
export const TWELVE = 'TWELVE';

export const SEMI_BOLD = 'semibold';
export const BOLD = 'BOLD';

export const WHITE = 'WHITE';


const AppText = ({type, weight, style, color, line, ...props}: any) => {
  const getTextStyle = (type, weight, color) => {
    var style = {
      fontFamily: fontFamily,
    };
    switch (type) {
      case FIFTEEN:
        style['fontSize'] = 15;
        break;
      case FOURTEEN:
        style['fontSize'] = 14;
        break;
      case TWELVE:
        style['fontSize'] = 12;
        break;

      case SIXTEEN:
        style['fontSize'] = 16;
        break;

      default:
        style['fontSize'] = 12;
    }

    switch (weight) {
      case SEMI_BOLD:
        style['fontFamily'] = fontFamilySemiBold;
        break;
      case BOLD:
        style['fontFamily'] = fontFamilyBold;
        break;
      default:
        style['fontFamily'] = fontFamily;
    }

    switch (color) {
      case WHITE:
        style['color'] = colors.white;
        break;
      default:
        style['color'] = colors.black;
    }

    return style;
  };
  const styles = {
    text: (type, weight, color, line) => ({
      ...getTextStyle(type, weight, color, line),
    }),
  };
  return (
    <Text
      allowFontScaling={false}
      style={StyleSheet.flatten([
        styles.text(type, weight, color, line),
        style,
      ])}
      {...props}
    />
  );
};

export {AppText};
