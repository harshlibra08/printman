import { Group, ThemeIcon, UnstyledButton, Text } from "@mantine/core";

const NavLink = ({
  color,
  icon,
  label,
  action,
  disabled,
  callback,
}: NavLink) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        backgroundColor: disabled
          ? theme.colorScheme === "dark"
            ? theme.colors.gray[8]
            : theme.colors.gray[1]
          : undefined,
        "&:hover": {
          backgroundColor: !disabled
            ? theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
            : theme.colorScheme === "dark"
            ? theme.colors.gray[8]
            : theme.colors.gray[1],
        },
      })}
      onClick={() => callback(action)}
      disabled={disabled}
    >
      <Group>
        <ThemeIcon color={color} variant="light" size="lg">
          {icon}
        </ThemeIcon>

        <Text size="lg">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default NavLink;
