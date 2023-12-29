import { useMediaQuery } from "@mui/material";

const useCustomMediaQuery = () => {
    const isMobile = useMediaQuery('(max-width:600px)'); // 0 - 599px
    const isMobileOrTablet = useMediaQuery('(max-width:960px)'); // 0 - 959px
    const isTablet = isMobileOrTablet && !isMobile;
    const isDesktop = !isMobileOrTablet;
    const isTabletOrDesktop = !isMobile;
  
    return {
      isMobile,
      isMobileOrTablet,
      isTablet,
      isTabletOrDesktop,
      isDesktop,
    };
}

export default useCustomMediaQuery;