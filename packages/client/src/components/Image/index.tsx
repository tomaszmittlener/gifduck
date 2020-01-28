import React, { FunctionComponent, useState, useRef } from 'react'
import styled from 'styled-components'
import useLazyLoad from 'hooks/uselayzLoad'

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

  const loadImage = () => {
    setPreUrl(preSrc)
    setImgUrl(src)
  }
  useLazyLoad({
    callback: loadImage,
    ref: containerRef,
    deps: [src, imgUrl, preSrc, preUrl, containerRef],
    shouldObserve: imgUrl !== src && preSrc !== preUrl,
  })

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
