import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kimura Portfolio | フロントエンドエンジニア',
  description:
    'フロントエンド開発に情熱を注ぐエンジニア、木村のポートフォリオサイトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>{children}</body>
    </html>
  );
}
