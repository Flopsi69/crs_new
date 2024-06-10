export function useSmoothScroll() {
  const scrollToElement = (selector, position) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: position || 'start'
      })
    }
  }

  return scrollToElement
}
