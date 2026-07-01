import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { dotRef, ringRef } = useCursor()

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
