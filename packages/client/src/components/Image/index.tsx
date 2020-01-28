import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

interface SearchResultsProps {
  className?: string
  testId?: string
  src: string
  height: number
  width: number
  aspectRatio: number
  preSrc: string
}

const PLACEHOLDER =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

const Container = styled.figure<{ aspectRatio: number }>`
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: ${({ aspectRatio }) => aspectRatio}%;
  }
`

const StyledImage = styled.img<{ isImageLoaded: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  opacity: ${({ isImageLoaded }) => (isImageLoaded ? 1 : 0)};
`

const Image: FunctionComponent<SearchResultsProps> = ({ className, testId, src, aspectRatio, preSrc }) => {
  const containerRef = useRef<HTMLElement>(null)
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false)

  const [preUrl, setPreUrl] = useState<string>(PLACEHOLDER)
  const [imgUrl, setImgUrl] = useState<string>('')

  const onImgLoad = () => {
    setImageLoaded(true)
  }

  const onImgError = () => {
    setImgUrl(PLACEHOLDER)
  }
  const onPreError = () => {
    setPreUrl(PLACEHOLDER)
  }

  // lazy load images
  useEffect(() => {
    let observer: IntersectionObserver
    let didCancel = false

    if (containerRef?.current && imgUrl !== src && preSrc !== preUrl) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (containerRef?.current && !didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
              setPreUrl(preSrc)
              setImgUrl(src)
              observer.unobserve(containerRef.current)
            }
          })
        },
        {
          threshold: 0.01,
          rootMargin: '75%',
        },
      )
      observer.observe(containerRef.current)
    }
    return () => {
      didCancel = true
      // on component cleanup, we remove the listener
      if (observer && observer.unobserve) {
        containerRef.current && observer.unobserve(containerRef.current)
      }
    }
  }, [src, imgUrl, preSrc, preUrl, containerRef])

  return (
    <Container data-testid={testId} className={className} aspectRatio={aspectRatio} ref={containerRef}>
      {/*Original Image - will appear when loaded. initially has no src - it will be added on lazyload*/}
      {imgUrl && (
        <StyledImage
          src={imgUrl}
          onLoad={onImgLoad}
          onError={onImgError}
          isImageLoaded={isImageLoaded}
          style={{ zIndex: 0 }}
        />
      )}
      {/*Preview Image - will appear on lazyload and disappear when original image is loaded*/}
      <StyledImage src={preUrl} onError={onPreError} isImageLoaded={!isImageLoaded} style={{ zIndex: 100 }} />
    </Container>
  )
}

export default Image
