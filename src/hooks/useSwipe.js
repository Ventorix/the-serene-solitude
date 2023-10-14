import { useRef } from 'react';

export function useSwipe(
	{ upAction, downAction, leftAction, rightAction },
	{ upCondition, downCondition, leftCondition, rightCondition },
	minSwipeDistance = 50,
	swipeMaxTimeMs = 1000,
) {
	const touchCoordsRef = useRef({ touchStart: { x: 0, y: 0, time: Date.now() } });

	const funcRef = useRef({ upAction, downAction, leftAction, rightAction });
	funcRef.current = {
		upAction,
		leftAction,
		downAction,
		rightAction,
	};

	// Get start touch coordinates
	const onTouchStart = (e) => {
		touchCoordsRef.current.touchStart.x = e.targetTouches[0].clientX;
		touchCoordsRef.current.touchStart.y = e.targetTouches[0].clientY;
		touchCoordsRef.current.touchStart.time = Date.now();
	};

	const onTouchEnd = (e) => {
		// Get end touch coordinates
		const touchEndX = e.changedTouches[0].clientX;
		const touchEndY = e.changedTouches[0].clientY;

		const touchStartX = touchCoordsRef.current.touchStart.x;
		const touchStartY = touchCoordsRef.current.touchStart.y;

		// Check if the swipe time has expired
		const elapsedTime = Date.now() - touchCoordsRef.current.touchStart.time;
		if (elapsedTime > swipeMaxTimeMs) return;

		const distanceX = touchStartX - touchEndX;
		const distanceY = touchStartY - touchEndY;

		// Calculate swipe direction
		const isLeftSwipe = distanceX > minSwipeDistance;
		const isRightSwipe = distanceX < -minSwipeDistance;
		const isUpSwipe = distanceY > minSwipeDistance;
		const isDownSwipe = distanceY < -minSwipeDistance;

		// Check if minSwipeDistance enough to be detected as a swipe
		if (Math.abs(distanceX) < minSwipeDistance && Math.abs(distanceY) < minSwipeDistance) return;

		if (Math.abs(distanceX) >= Math.abs(distanceY)) {
			// Horizontal actions
			if (leftCondition && isLeftSwipe) funcRef.current.leftAction?.();
			if (rightCondition && isRightSwipe) funcRef.current.rightAction?.();
		} else {
			// Vertical actions
			if (upCondition && isUpSwipe) funcRef.current.upAction?.();
			if (downCondition && isDownSwipe) funcRef.current.downAction?.();
		}
	};

	return { onTouchStart, onTouchEnd };
}
