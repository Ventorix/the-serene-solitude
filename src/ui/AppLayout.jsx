import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../styles/breakpoints';

import Sidebar from './sidebar/Sidebar';
import Header from './Header';
import FullPageSpinner from './FullPageSpinner';

import { useSidebar } from '../context/SidebarContext';

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: auto 1fr;
	height: 100dvh;

	${media.tb`
	`}

	${media.sm`
		`}

	${media.xs`
	`}
	
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
	const { isOpen } = useSidebar();

	return (
		<StyledAppLayout sidebar={isOpen ? 1 : 0}>
			<Header />
			<Sidebar />

			<Main>
				<Container>
					<Suspense fallback={<FullPageSpinner />}>
						<Outlet />
					</Suspense>
				</Container>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
