import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../../../redux/store'
import {useEffect, useState} from 'react'
import {fetchData} from '../../../redux/thunks/fetchData'
import {ImageData} from '../../../types/typs'

const Slider = () => {
  const dispatch = useDispatch<AppDispatch>()
  const imgData = useSelector((state: RootState) => state.items.data)
  const [images, setImages] = useState<ImageData[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [itemDetails, setItemDetails] = useState(false)
  

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (imgData.length > 0) {
      const getImages = () =>
        imgData.map(({author, itemId, url}) => ({
          author,
          itemId,
          url: url.replace('/200', '/1500/1000'),
        }))

      setImages(getImages())
    }
  }, [imgData])

  useEffect(() => {
    if (!isPlaying || images.length === 0) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [images, isPlaying])

  useEffect(() => {
    if (activeIndex === images.length) {
      setTimeout(() => setActiveIndex(0), 100)
    }
  }, [activeIndex, images])

  const handleNext = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => prev + 1) 
  }

  const handlePrev = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  return (
    <div className='slider-container'>
      <div className='slider'>
        <div
          className='slider__track'
          style={{
            transform: `translateX(-${(activeIndex % images.length) * 100}%)`,
            transition: activeIndex === images.length ? 'none' : 'transform 2s ease-in-out',
          }}>
          {images.length > 0 &&
            [...images, images[0]].map((img, idx) => (
              <div key={idx} className='slider__image'>
                <img src={img.url} alt={`Slide ${idx}`} />
              </div>
            ))}
        </div>
        <button className='slider__prev' onClick={handlePrev} disabled={activeIndex === 0}>
          <div className='slider__prev-icon'></div>
        </button>
        <button className='slider__play-pause' onClick={() => setIsPlaying(!isPlaying)}>
          <div className={isPlaying ? 'slider__pause-icon' : 'slider__play-icon'}></div>
        </button>
        <button
          className='slider__next'
          onClick={handleNext}
          disabled={activeIndex === images.length - 1}>
          <div className='slider__next-icon'></div>
        </button>
        <div className='slider__item-details' onClick={() => setItemDetails(!itemDetails)}>Item details</div>
        {itemDetails && (<div className='slider__item-details-container'>
          <div>Autor: {images[activeIndex]?.author} </div>
          <div>Price: {images[activeIndex]?.itemId}$ </div>
          <button className='slider__item-button'>Add to card</button>
        </div>)}
      </div>
    </div>
  )
}

export default Slider
