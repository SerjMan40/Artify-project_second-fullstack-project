const Slider = () => {
  return (
    <div className='slider-container'>
      <div className='slider'>
        <button className='slider__prev-control'>
          <div className='slider__prev-icon'></div>
        </button>
        <button className='slider__play-pause-control'>
          <div className='slider__play-icon'></div>
        </button>
        <button className='slider__next-control'>
          <div className='slider__next-icon'></div>
        </button>
      </div>
    </div>
  )
}
export default Slider
