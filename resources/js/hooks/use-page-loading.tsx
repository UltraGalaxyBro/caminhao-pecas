import { useState, useEffect } from 'react'
import { router } from '@inertiajs/react'

export function usePageLoading() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const removeStart  = router.on('start',  () => setLoading(true))
    const removeFinish = router.on('finish', () => setLoading(false))

    return () => {
      removeStart()
      removeFinish()
    }
  }, [])

  return loading
}
