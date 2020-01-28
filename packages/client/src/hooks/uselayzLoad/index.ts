import { DependencyList, RefObject, useEffect, useState } from 'react'

type CallbackFn = (entry: IntersectionObserverEntry) => void

interface UseLazyLoadOptions {
  ref: RefObject<HTMLElement>
  callback: CallbackFn
  deps: DependencyList
  threshold?: number
  rootMargin?: string
  debug?: boolean
  shouldObserve?: boolean
}

const useLazyLoad = ({
  ref,
  callback,
  deps,
  threshold = 0.01,
  rootMargin = '75%',
  debug = false,
  shouldObserve = true,
}: UseLazyLoadOptions) => {
  const [didCancel, setDidCancel] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const log = (...args: any) => {
    if (debug) {
      console.log(...args)
    }
  }

  useEffect(() => {
    let observer: IntersectionObserver

    if (ref?.current && shouldObserve) {
      log('Adding intersection observer for', ref.current)
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (ref?.current && !didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              log('Running callback for', entry)
              callback(entry)
              observer.unobserve(ref.current)
            }
          })
        },
        {
          threshold,
          rootMargin,
        },
      )
      observer.observe(ref.current)
    }
    return () => {
      log('Removing intersection observer')
      setDidCancel(true)
      // on component cleanup, we remove the listener
      if (observer && observer.unobserve) {
        ref.current && observer.unobserve(ref.current)
      }
    }
  }, deps)
}

export default useLazyLoad
