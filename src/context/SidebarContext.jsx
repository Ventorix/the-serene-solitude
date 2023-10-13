import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

function SidebarProvider({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	function toggleSidebarCollapse() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<SidebarContext.Provider value={{ isOpen, toggleSidebarCollapse }}>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebar() {
	const context = useContext(SidebarContext);

	if (context === undefined) throw new Error('SidebarContext was used outside SidebarProvider');
	return context;
}

export default SidebarProvider;
