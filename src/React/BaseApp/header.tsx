import { Burger, createStyles, Header, Title, Text, Box } from "@mantine/core";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { AppTitleContext } from "../Context/context";

const useStyles = createStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
}));

const AppHeader = ({ navbarOpen, setNavbarOpen }: AppHeader) => {
  const [rtc, setRtc] = useState(dayjs().format("HH:mm:ss"));

  useEffect(() => {
    const timer = setInterval(() => setRtc(dayjs().format("HH:mm:ss")), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { classes } = useStyles();

  const { title } = useContext(AppTitleContext);

  return (
    <Header height={50} pl="xl" className={classes.header}>
      <Burger
        opened={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
        size="lg"
        transitionDuration={0}
      ></Burger>
      <Title order={2} align="center" tt="capitalize">
        {title}
      </Title>
      <Box mr="md">
        <Text size="lg" weight={700}>
          {rtc}
        </Text>
      </Box>
    </Header>
  );
};

export default AppHeader;
