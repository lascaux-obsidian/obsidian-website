import { React } from '../../deps.ts';

// console.clear();

const slides = [
  {
    title: 'Alonso',
    subtitle: 'Garza',
    image: '/static/alonso.jpg',
  },
  {
    title: 'Travis',
    subtitle: 'Frank',
    image: '/static/travis.png',
  },
];

function useTilt(active = true) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className='slide'
      data-active={active}
      // style={{
      //   '--offset': offset,
      //   '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,

      // }}
    >
      <div
        className='slideBackground'
        // style={{
        //   backgroundImage: `url('${slide.image}')`,
        // }}
      />
      <div
        className='slideContent'
        // style={{
        //   backgroundImage: `url('${slide.image}')`,
        // }}
      >
        <div className='slideContentInner'>
          <h2 className='slideTitle'>{slide.title}</h2>
          <h3 className='slideSubtitle'>{slide.subtitle}</h3>
          <p className='slideDescription'>{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Carousel({ user, index, changeUser }) {
  return (
    <div className='slides'>
      <button onClick={() => changeUser(index, -1)}>‹</button>
      <div ref={useTilt()} className='slide' data-active={true}>
        <div
          className='slideContent'
          style={{
            backgroundImage: `url('${user.image}')`,
          }}
        >
          <div className='slideContentInner'>
            <h2 className='slideTitle'>{user.firstName}</h2>
            <h3 className='slideSubtitle'>{user.lastName}</h3>
          </div>
        </div>
      </div>
      <button onClick={() => changeUser(index, 1)}>›</button>
    </div>
  );
}

export default Carousel;
