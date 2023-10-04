import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCaupturing = true) {
	const ref = useRef();

	useEffect(
		function () {
			function handleClick(e) {
				if (ref.current && !ref.current.contains(e.target)) {
					handler();
				}
			}

			document.addEventListener('click', handleClick, listenCaupturing);

			return () => document.removeEventListener('click', handleClick, listenCaupturing);
		},
		[handler, listenCaupturing],
	);

	return { ref };
}
