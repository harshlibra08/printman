import { AppShell, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { AppTitleContext, LockContext } from "../Context/context";
import DataHome from "../DataPage/data-home";
import Home from "../Home/home";
import ProfileHome from "../Profile Page/profile-home";
import SettingsHome from "../SettingsPage/settings-home";
import Header from "./header";
import AppNavbar from "./navbar";
import { modals } from "@mantine/modals";

const BaseApp = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [screenState, setScreenState] = useState<ScreenNav>("home");
  const [appTitle, setAppTitle] = useState("Main Screen");

  const [lock, setLock] = useState(true);

  const [allowClose, setAllowClose] = useState(false);

  useEffect(() => {
    if (allowClose) window.close();
  }, [allowClose]);

  window.onbeforeunload = (e) => {
    if (!allowClose) {
      e.returnValue = false;

      modals.openConfirmModal({
        title: "Please confirm your action",
        centered: true,
        children: <Text size="sm">Do you want to close the application?</Text>,
        labels: { confirm: "Yes", cancel: "Cancel" },
        confirmProps: { color: "red" },
        onCancel: () => console.log("Close Canceled"),
        onConfirm: () => {
          setAllowClose(true);
        },
      });
    }
  };

  return (
    <AppTitleContext.Provider
      value={{
        title: appTitle,
        updateTitle: (title) => setAppTitle(title),
        resetTitle: () => setAppTitle("Main Screen"),
      }}
    >
      <LockContext.Provider
        value={{
          lock: lock,
          setLock: setLock,
        }}
      >
        <AppShell
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[9]
                  : theme.colors.gray[0],
            },
          })}
          fixed
          navbarOffsetBreakpoint="xl"
          navbar={
            <AppNavbar
              open={navbarOpen}
              onNav={(value) => {
                setScreenState(value);
                setNavbarOpen(false);
              }}
            ></AppNavbar>
          }
          header={
            <Header
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}
            ></Header>
          }
        >
          {screenState === "home" ? <Home></Home> : null}
          {screenState === "profile" ? <ProfileHome></ProfileHome> : null}
          {screenState === "settings" ? <SettingsHome></SettingsHome> : null}
          {screenState === "data" ? <DataHome></DataHome> : null}
        </AppShell>
      </LockContext.Provider>
    </AppTitleContext.Provider>
  );
};

export default BaseApp;
