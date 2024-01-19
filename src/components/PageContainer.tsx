import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  pageTitle: string;
  pageIcon: SvgIconComponent;
  children: React.ReactNode;
}

/**
 * ! This component is DEPRECATED
 */
export default function PageContainer({}: Props) {
  return <div></div>;
}
