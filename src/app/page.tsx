'use client'
import SearchSection from './SearchSection'
import { ThemeProvider } from "@mui/material";
import {theme} from "@/app/constant/theme";

export default function Home() {
  return (
      <ThemeProvider theme={theme}>
        <main style={{minHeight: 'calc(100vh - 128px)'}}>
            <SearchSection></SearchSection>
        </main>
      </ThemeProvider>
  )
}
