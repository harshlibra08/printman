import { Badge, Navbar, Stack } from "@mantine/core";
import {
  IconHome,
  IconGraph,
  IconSettings,
  IconDatabase,
} from "@tabler/icons-react";
import NavLink from "./nav-link";
import ThemeToggle from "./theme-toggle";
import packageJson from "../../../package.json";

const AppNavbar = ({ open, onNav }: AppNavbar) => {
  // const [lock, setLock] = useState(true);

  // const [newValue, setNewValue] = useState(``);
  // const [newValueError, setNewValueError] = useState(false);
  // const keyboard = useRef(null);

  // const theme = useMantineTheme();
  // const dark = theme.colorScheme === "dark";

  // const layout: KeyboardLayoutObject = {
  // 	default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp}"],
  // };

  return (
    <Navbar
      withBorder={true}
      p="md"
      hidden={!open}
      width={{
        base: 300,
      }}
      hiddenBreakpoint="xl"
    >
      <Navbar.Section grow>
        <NavLink
          icon={<IconHome></IconHome>}
          color="blue"
          label="Main Screen"
          action="home"
          callback={onNav}
        ></NavLink>
        <NavLink
          icon={<IconGraph></IconGraph>}
          color="orange"
          label="Profile"
          action="profile"
          callback={onNav}
        ></NavLink>
        <NavLink
          icon={<IconSettings></IconSettings>}
          color="indigo"
          label="Settings"
          action="settings"
          callback={onNav}
        ></NavLink>
        <NavLink
          icon={<IconDatabase></IconDatabase>}
          color="teal"
          label="Batches"
          action="data"
          callback={onNav}
        ></NavLink>
      </Navbar.Section>
      <Navbar.Section>
        <Stack>
          <ThemeToggle></ThemeToggle>

          <Badge size="lg">{`v${packageJson.version}`}</Badge>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default AppNavbar;
