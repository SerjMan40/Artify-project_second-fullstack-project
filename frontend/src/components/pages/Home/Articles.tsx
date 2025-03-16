import {useRandomAvtoSlider} from '../../hooks/useRandomAvtoSlider'

const Articles = () => {
  const { images: imagesSection1, activeIndex: activeIndexSection1 } = useRandomAvtoSlider({
    timeIntervalSet: 5000,
    size: 1000
  });
  const { images: imagesSection2, activeIndex: activeIndexSection2 } = useRandomAvtoSlider({
    timeIntervalSet: 8000,
    size: 1000,
    numImages: 25,
  });
  const { images: imagesSection3, activeIndex: activeIndexSection3 } = useRandomAvtoSlider({
    timeIntervalSet: 4000,
    size: 1000,
    numImages: 10,
  });
  
  return (
    <article className='article'>
      <section className='section'>
        <div className='section__disscription'>
          <h2 className='section__title'>Section 1</h2>
          <p className='section__content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem necessitatibus
            sapiente pariatur ab rem dicta perferendis, fuga saepe? Eum neque expedita sit
            exercitationem molestias itaque facilis sunt quibusdam corporis aliquam laudantium nemo
            nulla, tenetur reprehenderit corrupti sapiente? Culpa harum ipsam unde omnis esse id
            voluptas optio, voluptate ea aspernatur. nulla, tenetur reprehenderit corrupti sapiente?
            Culpa harum ipsam unde omnis esse id voluptas optio, voluptate ea aspernatur.
          </p>
        </div>
        <div className='section__image-container section__image--first'>
          {imagesSection1.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Background ${idx}`}
              className={`section__image ${idx === activeIndexSection1 ? 'section__image--active' : ''}`}
            />
          ))}
        </div>
      </section>

      <section className='section'>
        <div className='section__disscription section__disscription--second'>
          <h2 className='section__title'>Section 2</h2>
          <p className='section__content'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, libero obcaecati?
            Doloribus optio dolorum obcaecati et veniam nisi magni alias libero! Minima dignissimos
            sunt soluta officiis, beatae fugit voluptate qui repellendus velit voluptas? Sit dicta
            eaque labore, eveniet placeat, qui enim quisquam consequatur praesentium, alias
            blanditiis nobis harum! Id amet nihil minus quam voluptatem similique!
          </p>
        </div>
        <div className='section__image-container '>
          {imagesSection2.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Background ${idx}`}
              className={`section__image ${idx === activeIndexSection2 ? 'section__image--active' : ''}`}
            />
          ))}
        </div>
      </section>

      <section className='section'>
        <div className='section__disscription section__disscription--third'>
          <h2 className='section__title'>Section 3</h2>
          <p className='section__content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde nobis natus cum
            velit autem reiciendis doloribus illo atque voluptatem sint facere quae vero quod
            mollitia, laboriosam magni laudantium vel. Dolore vel vero culpa in minima sit dolorum
            laudantium nisi animi ad ab sint, molestiae reiciendis quasi voluptatem natus ullam
            numquam dicta incidunt labore. Nemo autem provident dolorum molestiae exercitationem
            totam ipsum quaerat dicta quasi, quae accusantium.
          </p>
        </div>
        <div className='section__image-container section__image--third'>
          {imagesSection3.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Background ${idx}`}
              className={`section__image ${idx === activeIndexSection3 ? 'section__image--active' : ''}`}
            />
          ))}
        </div>
      </section>
    </article>
  )
}

export default Articles
