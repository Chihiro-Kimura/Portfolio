"use client";

import { motion } from "framer-motion";
import { 
  CodeXml as Html5, 
  Rss as Css3, 
  Subscript as Javascript, 
  Repeat as React,
  LayoutTemplate as Tailwind,
  Database as Prisma,
  Server as Supabase,
  CreditCard as Stripe,
  Lock as Auth
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    icon: <Html5 className="w-12 h-12" />,
    name: "HTML5",
    description: "モダンなマークアップ",
  },
  {
    icon: <Css3 className="w-12 h-12" />,
    name: "CSS3",
    description: "レスポンシブデザイン",
  },
  {
    icon: <Javascript className="w-12 h-12" />,
    name: "JavaScript",
    description: "ES6+, TypeScript",
  },
  {
    icon: <React className="w-12 h-12" />,
    name: "Next.js",
    description: "フルスタックフレームワーク",
  },
  {
    icon: <Tailwind className="w-12 h-12" />,
    name: "TailwindCSS",
    description: "ユーティリティファースト",
  },
  {
    icon: <Prisma className="w-12 h-12" />,
    name: "Prisma",
    description: "型安全なORM",
  },
  {
    icon: <Supabase className="w-12 h-12" />,
    name: "Supabase",
    description: "BaaS プラットフォーム",
  },
  {
    icon: <Stripe className="w-12 h-12" />,
    name: "Stripe",
    description: "決済システム",
  },
  {
    icon: <Auth className="w-12 h-12" />,
    name: "NextAuth.js",
    description: "認証ソリューション",
  }
];

export default function TechStack() {
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
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center text-primary">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}