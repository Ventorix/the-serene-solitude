import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../styles/breakpoints';

import Sidebar from './sidebar/Sidebar';
import Header from './Header';
import FullPageSpinner from './FullPageSpinner';

import { useSidebar } from '../context/SidebarContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useDarkMode } from '../context/DarkModeContext';
import { useSwipe } from '../hooks/useSwipe';

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: auto 1fr;
	height: 100dvh;

	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #e0e0e0;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 4rem 4.8rem 6.4rem;
	overflow: auto;

	${media.sm`
	padding: 1rem 2rem 1.4rem;
		`}

	${media.xs`
	padding: 1rem 0.5rem 1.4rem;
		`}
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	${media.sm`
	gap: 1.2rem;
		`}
`;

function AppLayout() {
	const { isDarkMode } = useDarkMode();
	const { isOpen, toggleSidebarCollapse } = useSidebar();
	const { onTouchStart, onTouchEnd } = useSwipe(
		{
			leftAction: toggleSidebarCollapse,
			rightAction: toggleSidebarCollapse,
		},
		{ leftCondition: isOpen, rightCondition: !isOpen },
	);

	return (
		<StyledAppLayout>
			<Header />
			<Sidebar />

			<Main onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
				<Container>
					<Suspense fallback={<FullPageSpinner />}>
						<SkeletonTheme
							baseColor={!isDarkMode ? '#efefef' : '#111827'}
							highlightColor={!isDarkMode ? '#f3f4f6' : '#1f2937'}>
							<Outlet />
						</SkeletonTheme>
					</Suspense>
				</Container>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
