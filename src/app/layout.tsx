import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/themes";
import Box from "@mui/material/Box";
import TopBar from "@/ui/layout/TopBar";
import SideNav from "@/ui/layout/SideNav";
import { DRAWER_WIDTH } from "@/const/ui";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <SideNav />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                ml: `${DRAWER_WIDTH}px`,
              }}
            >
              <TopBar />
              <Box sx={{ p: 2, pt: 1 }}>{children}</Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
