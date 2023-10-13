import { createContext, useContext } from 'react';

import styled from 'styled-components';
import { media } from '../styles/breakpoints';
import Skeleton from 'react-loading-skeleton';

const StyledTable = styled.div`
	border: 1px solid var(--color-grey-200);

	font-size: 1.4rem;
	background-color: var(--color-grey-0);
	border-radius: 7px;
	overflow: hidden;

	${media.md`
	font-size: 0.9rem;
	`}

	${media.sm`
		font-size: 0.8rem;
	`}

	${media.xs`
		font-size: 0.6rem;
	`}
`;

const CommonRow = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	column-gap: 2.4rem;
	align-items: center;
	transition: none;

	${media.md`
	column-gap: 0.2rem;
	`}
`;

const StyledHeader = styled(CommonRow)`
	padding: 1.6rem 2.4rem;

	background-color: var(--color-grey-50);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-600);

	${media.tb`
	padding: 0.4rem 0.4rem;
	`}

	${media.xs`
		font-size: 0.6rem;
	`}
`;

const StyledRow = styled(CommonRow)`
	padding: 1.2rem 2.4rem;

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}

	${media.tb`
	padding: 1.2rem 0.2rem;
	`}
`;

const StyledBody = styled.section`
	margin: 0.4rem 0;
`;

const Footer = styled.footer`
	background-color: var(--color-grey-50);
	display: flex;
	justify-content: center;
	padding: 1.2rem;

	/* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
	&:not(:has(*)) {
		display: none;
	}

	${media.sm`
	padding: 0.2rem;
		`}
`;

const Empty = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	text-align: center;
	margin: 2.4rem;
`;

const LoaderBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const TableLoader = () => {
	return (
		<LoaderBox>
			<Skeleton count={10} height='4rem' width='100%' borderRadius={'6px'} />
		</LoaderBox>
	);
};

const TableContext = createContext();
function Table({ columns, children }) {
	return (
		<TableContext.Provider value={{ columns }}>
			<StyledTable role='table'>{children}</StyledTable>
		</TableContext.Provider>
	);
}

function Header({ children }) {
	const { columns } = useContext(TableContext);

	return (
		<StyledHeader as={'header'} role='row' columns={columns}>
			{children}
		</StyledHeader>
	);
}
function Row({ children }) {
	const { columns } = useContext(TableContext);

	return (
		<StyledRow role='row' columns={columns}>
			{children}
		</StyledRow>
	);
}

function Body({ data, render, isLoading }) {
	return (
		<StyledBody>
			{isLoading && <TableLoader />}
			{data.map(render)}
			{!isLoading && data?.length === 0 && <Empty>No data to display at this time</Empty>}
		</StyledBody>
	);
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
