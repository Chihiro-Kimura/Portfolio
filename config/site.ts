interface Project {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly tags: readonly string[];
  readonly github?: string;
  readonly demo?: string;
}

interface About {
  name: string;
  startDate: string;
  introduction: string[];
}

interface Contact {
  email: string;
  phone: string;
  location: string;
}

interface SocialLinks {
  github: string;
  twitter: string;
  linkedin: string;
}

interface NavItem {
  readonly name: string;
  readonly href: string;
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  contact: Contact;
  socialLinks: SocialLinks;
  projects: Project[];
  about: About;
  navItems: readonly NavItem[];
  introduction: readonly string[];
}

export const siteConfig: SiteConfig = {
  // サイト基本情報
  name: 'Portfolio',
  title: 'My Dev Journey',
  description:
    'フロントエンド開発を中心に、モダンな技術を活用したWeb開発に取り組んでいます。',

  // 連絡先情報
  contact: {
    email: 'contact@example.com',
    phone: '03-1234-5678',
    location: '東京都渋谷区',
  },

  // SNSリンク
  socialLinks: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
  },

  // プロジェクト情報
  projects: [
    {
      title: 'ECサイト (開発予定)',
      description:
        '※ このプロジェクトは現在企画段階です。\n' +
        'Next.js、Supabase、Stripeを活用したECサイトを開発予定です。',
      image:
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['企画中'] as string[],
      github: '#',
    },
    {
      title: 'タスク管理アプリ',
      description: `Next.jsとFirebaseを活用した多機能タスク管理アプリケーション。
        タスクの作成・編集・削除、優先度・期限設定、ステータス管理など基本機能に加え、
        Googleアカウント認証、タスク共有、リマインダー機能を実装。
        TypeScriptとTailwind CSS、shadcn/uiを用いたモダンなUI/UXを提供します。`,
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: [
        'Next.js',
        'TypeScript',
        'Firebase Authentication',
        'Firestore',
        'Tailwind CSS',
        'shadcn/ui',
      ] as string[],
      github: 'https://github.com/Chihiro-Kimura/tasky',
      demo: 'https://tasky-one-rho.vercel.app/',
    },
    {
      title: 'SNSアプリ (開発予定)',
      description:
        '※ このプロジェクトは現在企画段階です。\n' +
        'Node.jsとMongoDBを使用したSNSプラットフォームを開発予定です。',
      image:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['企画中'] as string[],
      github: '#',
    },
    {
      title: 'Post Writer',
      description:
        'Next.js App RouterとContentlayerを活用したブログプラットフォーム。マークダウン投稿、OAuth認証など、モダンなブログ機能を実装しています。',
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Supabase',
        'NextAuth.js',
        'TailwindCSS',
      ] as string[],
      github: 'https://github.com/Chihiro-Kimura/post-writer-webapp',
      demo: 'https://post-writer-webapp-ten.vercel.app/',
    },
  ] as Project[],

  // 自己紹介
  about: {
    name: '木村智紘',
    startDate: '2024年12月',
    introduction: [
      '以前はコンビニエンスストアのマネージャーや金型製造業での経験があり、技術への興味からエンジニアへの転身を決意しました。',
      'フロントエンド開発を中心に、最新技術を活用したユーザーフレンドリーなアプリケーション開発に情熱を注いでいます。',
      '現在は個人プロジェクトを通じて実践的なスキルを磨いています。',
    ] as string[],
  },

  // ナビゲーションリンク
  navItems: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Core Values', href: '#core-values' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ] as readonly NavItem[],

  introduction: [
    '以前はコンビニエンスストアのマネージャーや金型製造業での経験があり、技術への興味からエンジニアへの転身を決意しました。',
    'フロントエンド開発を中心に、最新技術を活用したユーザーフレンドリーなアプリケーション開発に情熱を注いでいます。',
    '現在は個人プロジェクトを通じて実践的なスキルを磨いています。',
  ] as readonly string[],
} as const;
