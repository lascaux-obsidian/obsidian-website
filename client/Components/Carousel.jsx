import { React } from '../../deps.ts';

console.clear();

const slides = [
  {
    subtitle: 'Matt Meigs',

    image:
      'https://media-exp1.licdn.com/dms/image/C4D03AQEzJiV7ot59DQ/profile-displayphoto-shrink_800_800/0?e=1605744000&v=beta&t=8nUUPFtA-qbu8bmxXazE-ordLUNGdkXEn5QmOdp2_cc',
  },
  {
    subtitle: 'Alonso Garza',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E03AQEX3whvC_Q__Q/profile-displayphoto-shrink_400_400/0?e=1605744000&v=beta&t=wzAdeD6XV5O7vz23f3hdzoZ43lSlDO8uRIZ01RBn1CA',
  },
  {
    title: 'Mimisa Rocks',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Four',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Five',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
];

function useTilt(active) {
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

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
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
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className='slideContent'
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
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

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className='slides'>
      <button onClick={() => dispatch({ type: 'NEXT' })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: 'PREV' })}>›</button>
    </div>
  );
}

export default Carousel;
