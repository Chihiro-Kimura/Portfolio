'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    name: 'HTML5',
    description: 'モダンなマークアップ',
    level: 75,
    category: 'フロントエンド基礎',
  },
  {
    name: 'CSS3',
    description: 'レスポンシブデザイン',
    level: 75,
    category: 'フロントエンド基礎',
  },
  {
    name: 'JavaScript',
    description: 'ES6+, TypeScript',
    level: 70,
    category: 'プログラミング',
  },
  {
    name: 'Next.js',
    description: 'フルスタックフレームワーク',
    level: 65,
    category: 'フレームワーク',
  },
  {
    name: 'TailwindCSS',
    description: 'ユーティリティファースト',
    level: 70,
    category: 'フレームワーク',
  },
  {
    name: 'Prisma',
    description: '型安全なORM',
    level: 50,
    category: 'バックエンド',
  },
  {
    name: 'Supabase',
    description: 'BaaS プラットフォーム',
    level: 50,
    category: 'バックエンド',
  },
  {
    name: 'Stripe',
    description: '決済システム',
    level: 45,
    category: '外部サービス',
  },
  {
    name: 'NextAuth.js',
    description: '認証ソリューション',
    level: 45,
    category: '外部サービス',
  },
];

export default function Skills() {
  // スキルをカテゴリーでグループ化
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground mb-6">
            個人開発プロジェクトで実践的に活用している技術スタック
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], categoryIndex) => (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium">{skill.name}</span>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {skill.level >= 70
                          ? '実践的な開発経験あり'
                          : skill.level >= 50
                          ? '基本的な実装経験あり'
                          : '学習・実装中'}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
