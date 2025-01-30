'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
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
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              width={800}
              height={600}
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">
                  {siteConfig.about.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  エンジニア転職開始時期: {siteConfig.about.startDate}
                </p>
                {siteConfig.about.introduction.map(
                  (text: string, index: number) => (
                    <p key={index} className="text-muted-foreground mb-6">
                      {text}
                    </p>
                  )
                )}
                <p className="text-muted-foreground">
                  新しい技術の習得に意欲的で、チームでの協働を大切にします。
                  エンジニアとしての第一歩を踏み出す機会を探しています。
                  ぜひお気軽にご連絡ください！
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
