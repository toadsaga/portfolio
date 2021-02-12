import { useEffect } from 'react';
// import { useRef, useLayoutEffect } from 'react'

// const isBrowser = typeof window !== `undefined`

// function getScrollPosition({ element, useWindow }) {
//   if (!isBrowser) return { x: 0, y: 0 }

//   const target = element ? element.current : document.body
//   const position = target.getBoundingClientRect()

//   return useWindow
//     ? { x: window.scrollX, y: window.scrollY }
//     : { x: position.left, y: position.top }
// }

// const useScrollPosition = (effect, deps, element, useWindow, wait) => {
//   const position = useRef(getScrollPosition({ useWindow }))

//   let throttleTimeout = null

//   const callBack = () => {
//     const currPos = getScrollPosition({ element, useWindow })
//     effect({ prevPos: position.current, currPos })
//     position.current = currPos
//     throttleTimeout = null
//   }

//   useLayoutEffect(() => {
//     const handleScroll = () => {
//       if (wait) {
//         if (throttleTimeout === null) {
//           throttleTimeout = setTimeout(callBack, wait)
//         }
//       } else {
//         callBack()
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, deps)
// }

const useClickOutside = (ref, handler) => {
    useEffect(
        () => {
          const listener = event => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }
    
            handler(event);
          };
    
          document.addEventListener('mousedown', listener);
          document.addEventListener('touchstart', listener);
    
          return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
          };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
      );
};

export { 
  useClickOutside,
  // useScrollPosition
};