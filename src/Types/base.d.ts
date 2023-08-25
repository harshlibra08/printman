type MantineColor = import("@mantine/core").MantineColor;

type ScreenNav = "home" | "profile" | "data" | "settings";

type OnNavFunction = (value: ScreenNav) => void;

type AppNavbar = {
	open: boolean;
	onNav: OnNavFunction;
};

type AppHeader = {
	navbarOpen: boolean;
	setNavbarOpen: (value: boolean) => void;
};

type NavLink = {
	icon: React.ReactNode;
	color: MantineColor;
	label: string;
	action: ScreenNav;
	disabled?: boolean;
	callback: OnNavFunction;
};
