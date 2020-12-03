import { React } from '../../deps.ts';

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
