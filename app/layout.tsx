import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"VoiceMirror | A multilingual voice journal",description:"Turn daily voice notes into natural phrasing and focused language practice."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
