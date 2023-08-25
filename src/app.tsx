import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import React from "react";
import { createRoot } from "react-dom/client";
import BaseApp from "./React/BaseApp/base-app";

const App = () => {
  const [theme, setTheme] = useToggle<ColorScheme>(["light", "dark"]);

  return (
    <React.StrictMode>
      <ColorSchemeProvider colorScheme={theme} toggleColorScheme={setTheme}>
        <MantineProvider
          theme={{ colorScheme: theme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <Notifications></Notifications>
            <BaseApp></BaseApp>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);
