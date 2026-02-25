import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 더 스카우트 in 강원 | The Scout in Gangwon",
  description: "강원의 자연을 탐색하며 미션을 수행하는 도시형 미션 플레이(텍스트 중심 안내 페이지).",
  applicationName: "2026 더 스카우트 in 강원 | The Scout in Gangwon",
  openGraph: {
    title: "2026 더 스카우트 in 강원 | The Scout in Gangwon",
    description: "강원의 자연을 탐색하며 미션을 수행하는 도시형 미션 플레이(텍스트 중심 안내 페이지).",
    url: "https://gangwon.realworld.to",
    siteName: "2026 더 스카우트 in 강원 | The Scout in Gangwon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 더 스카우트 in 강원 | The Scout in Gangwon",
    description: "강원의 자연을 탐색하며 미션을 수행하는 도시형 미션 플레이(텍스트 중심 안내 페이지).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
