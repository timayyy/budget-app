import { Text } from "@chakra-ui/react";

type HeaderProps = {
  title?: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <Text as="h1" variant="heading-1">
      {title ?? "Budget"}
    </Text>
  );
}
