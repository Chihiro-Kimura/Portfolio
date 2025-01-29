interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
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
  name: string;
  href: string;
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  contact: Contact;
  socialLinks: SocialLinks;
  projects: Project[];
  about: About;
  navItems: NavItem[];
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
      title: 'ECサイト',
      description:
        'Next.js、Supabase、Stripeを統合したフルスタックECサイト。商品管理、カート機能、決済システムを実装し、モダンなショッピング体験を提供します。',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'React', 'Supabase', 'Stripe', 'TailwindCSS'],
      github: 'https://github.com/yourusername/ec-site',
      demo: 'https://your-ec-site.vercel.app',
    },
    {
      title: 'タスク管理アプリ',
      description: 'React と TypeScript で開発したタスク管理アプリケーション',
      image:
        'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Firebase'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://your-task-manager.vercel.app',
    },
    {
      title: 'SNSアプリ',
      description: 'Node.js と MongoDB を使用したSNSプラットフォーム',
      image:
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/sns-app',
      demo: 'https://your-sns-app.vercel.app',
    },
    {
      title: 'Post Writer',
      description:
        'Next.js App RouterとContentlayerを活用したブログプラットフォーム。マークダウン投稿、OAuth認証、Stripe決済など、モダンなブログ機能を実装しています。',
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Supabase',
        'Stripe',
        'NextAuth.js',
        'TailwindCSS',
      ],
      github: 'https://github.com/yourusername/blog-app',
      demo: 'https://post-writer-webapp-ten.vercel.app/',
    },
  ],

  // 自己紹介
  about: {
    name: '木村智紘',
    startDate: '2024年12月',
    introduction: [
      '以前はコンビニエンスストアのマネージャーや金型製造業での経験があり、技術への興味からエンジニアへの転身を決意しました。',
      'フロントエンド開発を中心に、最新技術を活用したユーザーフレンドリーなアプリケーション開発に情熱を注いでいます。',
      '現在は個人プロジェクトを通じて実践的なスキルを磨いています。',
    ],
  },

  // ナビゲーションリンク
  navItems: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Core Values', href: '#core-values' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ],
} as const;
