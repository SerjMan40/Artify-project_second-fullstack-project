import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../../redux/store'
import {fetchData} from '../../redux/thunks/fetchData'
import {ImageCarouselHook} from '../../types/interfaces'

export const useImageCarousel = ({timeIntervalSet, size, numImages}: ImageCarouselHook) => {
  const dispatch = useDispatch<AppDispatch>()
  const imgData = useSelector((state: RootState) => state.items.data)
  const [images, setImages] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (imgData.length > 0) {
      const getRandomImages = () =>
        Array(numImages || imgData.length)
          .fill(null)
          .map(() =>
            imgData[Math.floor(Math.random() * imgData.length)].url.replace('/200', `/${size}`)
          )

      setImages(getRandomImages())
    }
  }, [imgData, numImages, timeIntervalSet, size])

  useEffect(() => {
    if (images.length < (numImages || imgData.length)) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (numImages || imgData.length))
    }, timeIntervalSet)

    return () => clearInterval(interval)
  }, [images, imgData, numImages, timeIntervalSet])

  return {images, activeIndex}
}
