function getStyle(prop: string) {
  const root = document.documentElement
  return getComputedStyle(root).getPropertyValue(prop).trim()
}
const useStyleTokens = () => {
  const blueColor = getStyle('--accent-blue')
  const purpleColor = getStyle('--accent-purple')
  const greenColor = getStyle('--accent-green')
  const amberColor = getStyle('--accent-amber')
  const redColor = getStyle('--accent-red')
  const cyanColor = getStyle('--accent-cyan')

  const radiusSM = getStyle('--radius-sm')

  const bgPrimary = getStyle('--bg-primary')
  const bgSecondary = getStyle('--bg-secondary')

  const textPrimary = getStyle('--text-primary')
  const textSecondary = getStyle('--text-secondary')

  const borderControl = getStyle('--border-control')

  const opacityColor = getStyle('--opacity-color')

  const hourSize = Number(getStyle('--hour-size').split('px')[0])
  const halfSize = Number(getStyle('--half-size').split('px')[0])

  return {
    blueColor,
    purpleColor,
    greenColor,
    amberColor,
    redColor,
    cyanColor,
    radiusSM,
    bgPrimary,
    bgSecondary,
    textPrimary,
    textSecondary,
    borderControl,
    opacityColor,
    hourSize,
    halfSize,
  }
}

export default useStyleTokens
