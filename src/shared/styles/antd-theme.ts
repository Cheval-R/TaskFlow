import getStyleTokens from '../libs/getStyleTokens.ts'
import type { ThemeConfig } from 'antd'

const {
  blueColor,
  radiusSM,
  bgPrimary,
  bgSecondary,
  textPrimary,
  textSecondary,
  borderControl,
  opacityColor,
} = getStyleTokens()

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: blueColor,
    colorText: textPrimary,
    colorBgContainer: bgPrimary,
    colorBorder: borderControl,
    controlOutline: opacityColor,
    colorPrimaryBorder: blueColor,
    colorTextPlaceholder: textSecondary,
    colorTextQuaternary: textPrimary,
    colorIcon: textPrimary,
    colorIconHover: textSecondary,
    colorErrorOutline: opacityColor,
    margin: 0,
  },
  components: {
    Button: {
      borderRadius: Number(
        String(radiusSM)
          .slice(0, radiusSM.length - 2)
          .trim(),
      ),
      padding: 10,
      controlHeightLG: 64,
      controlHeight: 38,
      controlHeightSM: 32,

      lineWidthFocus: 2,
      lineWidthBold: 0,

      defaultBgDisabled: bgPrimary,
      colorTextDisabled: textSecondary,
      colorBorderDisabled: borderControl,
    },
    DatePicker: {
      colorTextDisabled: textSecondary,
      colorText: textPrimary,
      lineWidthBold: 2,
      colorBgElevated: bgSecondary,
      boxShadowSecondary: '0 4px 12px rgba(0, 0, 0, 0.35)',
    },
    Form: {
      itemMarginBottom: 0,
    },
    Typography: {
      titleMarginBottom: 0,
    },
    Radio: {},
  },
}

export default antdTheme
