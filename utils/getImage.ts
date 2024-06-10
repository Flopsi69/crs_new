const images = import.meta.glob('@/assets/images/**/*', {
  eager: true,
  import: 'default'
})

export default function (imageName: string) {
  try {
    let testik = images['/assets/images/' + imageName]
    return testik
  } catch (error) {
    console.error('Error loading image:', error)
    return ''
  }
}
