"use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter, Zap, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: <Zap className="h-auto w-5" />,
    title: "フルスタック開発",
    description: "フロントエンドからバックエンドまで、幅広い技術スタックを活用",
  },
  {
    icon: <Users className="h-auto w-5" />,
    title: "チーム協働",
    description: "アジャイル開発とチームワークを重視した開発スタイル",
  },
  {
    icon: <Briefcase className="h-auto w-5" />,
    title: "実績多数",
    description: "大規模プロジェクトの開発経験と、多様な業界での実績",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto pt-20">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4">
              エンジニア採用をお考えの方へ
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            エンジニアのチームメンバーを
            <br />
            探していますか？
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          >
            フルスタック開発者として、最新技術を活用した
            <br />
            高品質なプロダクト開発に貢献します
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button size="lg" className="gap-2">
              <Briefcase className="w-4 h-4" />
              プロジェクトを見る
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Users className="w-4 h-4" />
              お問い合わせ
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-screen-lg mb-20"
        >
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Development Environment"
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto flex max-w-screen-lg flex-col md:flex-row"
        >
          {features.map((feature, index) => (
            <>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mt-12"
        >
          <Button variant="outline" size="icon">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Twitter className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}