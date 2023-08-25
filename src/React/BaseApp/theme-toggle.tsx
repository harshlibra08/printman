import {
  useMantineColorScheme,
  Group,
  Text,
  UnstyledButton,
  ThemeIcon,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      onClick={() => toggleColorScheme()}
    >
      <Group>
        <ThemeIcon
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.blue[6],
          })}
        >
          {colorScheme === "dark" ? (
            <IconSun size={18} />
          ) : (
            <IconMoonStars size={18} />
          )}
        </ThemeIcon>

        <Text size="lg">{`${
          colorScheme === "dark" ? "Light" : "Dark"
        } Mode`}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default ThemeToggle;
