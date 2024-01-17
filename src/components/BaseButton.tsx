import Button, { ButtonProps } from "@mui/material/Button";
import { SxProps } from "@mui/material";

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export default function BaseButton({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}
