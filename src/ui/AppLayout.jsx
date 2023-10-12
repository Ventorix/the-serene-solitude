import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Sidebar from './sidebar/Sidebar';
import Header from './Header';
import FullPageSpinner from './FullPageSpinner';
import { useSidebar } from '../context/SidebarContext';
import { media } from '../styles/breakpoints';

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;

	${(props) =>
		props.sidebar ? 'grid-template-columns: 24rem 1fr;' : 'grid-template-columns: 12rem 1fr;'};
	height: 100dvh;

	${media.sm`
	grid-template-columns: 7rem 1fr;
	`}

	${media.xs`
	grid-template-columns: 5rem 1fr;
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
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
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
