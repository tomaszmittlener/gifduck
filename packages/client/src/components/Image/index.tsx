import React, { FunctionComponent, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import useLazyLoad from 'hooks/useLazyLoad'

interface SearchResultsProps {
  className?: string
  testId?: string
  src: string
  height?: number
  width?: number
  placeholder?: ''
  aspectRatio: number
  preSrc: string
}

interface AspectRatioContainerProps {
  aspectRatio: number
}

interface ImageProps {
  isImageLoaded: boolean
}

const DEFAULT_PLACEHOLDER =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

const AspectRatioImageCSS = css<ImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isImageLoaded }) => (isImageLoaded ? 1 : 0)};
`

const AspectRatioContainer = styled.figure<AspectRatioContainerProps>`
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: ${({ aspectRatio }) => aspectRatio * 100}%;
  }
`

const StyledImage = styled.img<ImageProps>`
  ${AspectRatioImageCSS};
  z-index: ${({ theme }) => theme.layers.bottom};
`

const StyledPreviewImage = styled.img<ImageProps>`
  ${AspectRatioImageCSS};
  z-index: ${({ theme }) => theme.layers.middleBottom};
`

/**
 * Image Component
 * Original Image (src) - will appear when loaded. initially has no src (it will be added on lazyLoad)
 * Preview Image (preSrc) - initiates with placeholder - src will be added on lazy load and will disappear when Original image is loaded
 *
 * TODO:
 * - support other scenarios (handle width/height)
 * - figure out the way not to append an original image dynamically
 */
const Image: FunctionComponent<SearchResultsProps> = ({
  className,
  testId,
  src,
  aspectRatio,
  preSrc,
  placeholder = DEFAULT_PLACEHOLDER,
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false)

  const [preUrl, setPreUrl] = useState<string>(placeholder)
  const [imgUrl, setImgUrl] = useState<string>('')

  const handleOnImgLoad = () => {
    setImageLoaded(true)
  }

  const handleOnImgError = () => {
    setImgUrl(DEFAULT_PLACEHOLDER)
  }

  const handleOnPreError = () => {
    setPreUrl(DEFAULT_PLACEHOLDER)
  }

  const setImagesSrc = () => {
    setPreUrl(preSrc)
    setImgUrl(src)
  }

  useLazyLoad({
    callback: setImagesSrc,
    ref: containerRef,
    deps: [src, imgUrl, preSrc, preUrl, containerRef],
    shouldObserve: imgUrl !== src && preSrc !== preUrl,
  })

  return (
    <AspectRatioContainer data-testid={testId} className={className} aspectRatio={aspectRatio} ref={containerRef}>
      {!!imgUrl && (
        <StyledImage src={imgUrl} onLoad={handleOnImgLoad} onError={handleOnImgError} isImageLoaded={isImageLoaded} />
      )}
      <StyledPreviewImage src={preUrl} onError={handleOnPreError} isImageLoaded={!isImageLoaded} />
    </AspectRatioContainer>
  )
}

export default Image
