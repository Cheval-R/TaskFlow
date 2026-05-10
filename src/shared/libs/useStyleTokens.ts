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

  const bgPrimary = getStyle('---bg-primary')

  const textPrimary = getStyle('--text-primary')

  return {
    blueColor,
    purpleColor,
    greenColor,
    amberColor,
    redColor,
    cyanColor,
    radiusSM,
    bgPrimary,
    textPrimary,
  }
}

export default useStyleTokens
