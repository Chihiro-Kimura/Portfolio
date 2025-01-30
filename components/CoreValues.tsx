'use client';

import { motion } from 'framer-motion';
import { Code2, Workflow, Lightbulb, RefreshCw } from 'lucide-react';

const values = [
  {
    icon: <Code2 className="w-12 h-12 mb-4 text-primary" />,
    title: 'モダン技術との融合',
    description:
      'WordPressをヘッドレスCMSとして活用し、Next.jsやReactでモダンなフロントエンド開発を実現。従来のCMSの利点を活かしながら、新しい技術でユーザー体験を向上させることができます。',
  },
  {
    icon: <Workflow className="w-12 h-12 mb-4 text-primary" />,
    title: '効率的な開発フロー',
    description:
      'コンテンツ管理はWordPressの使いやすい管理画面で行いながら、フロントエンドは最新のJavaScript技術を活用。両者のメリットを最大限に引き出す開発アプローチを目指します。',
  },
  {
    icon: <Lightbulb className="w-12 h-12 mb-4 text-primary" />,
    title: '革新的な解決策',
    description:
      '既存のシステムを活かしつつ、新しい技術を段階的に導入することで、リスクを抑えながらシステムの進化を実現。ビジネスニーズと技術的な可能性の両立を図ります。',
  },
  {
    icon: <RefreshCw className="w-12 h-12 mb-4 text-primary" />,
    title: '継続的な改善',
    description:
      'フロントエンドの技術トレンドをキャッチアップしながら、既存システムの安定性も維持。持続可能な開発サイクルを確立し、段階的な改善を進めていきます。',
  },
];

export default function CoreValues() {
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
          <h2 className="text-3xl font-bold mb-4">Core Values</h2>
          <p className="text-muted-foreground mb-6">
            既存技術と最新技術の調和を目指すアプローチ
          </p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
