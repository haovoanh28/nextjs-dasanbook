import {Stack, Box, Toolbar, Typography} from "@mui/material";
import Image from "next/image";

const PageHeader = () => {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      height={'90px'}
      sx={{
        flexGrow: 1,
        backgroundColor: '#ECEDF4'
      }}
    >
      <Toolbar>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={1}
          sx={{
            width: '100%',
            maxHeight: '70px'
          }}
        >
          <Image
            src="/assets/images/logo-placeholder-image.png"
            alt="logo"
            width={60}
            height={60}
          />
          <Typography
            sx={{
              lineHeight: '70px',
              fontSize: '37.5pt',
              fontWeight: 500,
              color: '#1B2E4B'
            }}
          >
            다산콘텐츠
          </Typography>
        </Box>
      </Toolbar>
    </Stack>
  );
}

export default PageHeader;