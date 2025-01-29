'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  はじめまして、山田太郎です
                </h3>
                <p className="text-muted-foreground mb-4">
                  私は5年以上のWeb開発経験を持つフルスタックエンジニアです。
                  最新のテクノロジーを活用して、ユーザーフレンドリーで高性能なアプリケーションの開発に情熱を注いでいます。
                </p>
                <p className="text-muted-foreground">
                  チームでの協働を重視し、常に新しい技術のキャッチアップを心がけています。
                  プロジェクトの成功のために、技術的な課題解決と効率的な開発プロセスの実現に取り組んでいます。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
