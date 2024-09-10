import { useCallback, useEffect } from 'react'
export default function CardMouseMoveScript() {
  const handleOnMouseMove = useCallback((e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement

    if (!target) return
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    target.style.setProperty('--mouse-x', `${x}px`)
    target.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  useEffect(() => {
    console.log('hello')
    for (const card of document.querySelectorAll('.card') as NodeListOf<HTMLDivElement>) {
      card.onmousemove = handleOnMouseMove
    }
  }, [handleOnMouseMove])

  return <></>
}
