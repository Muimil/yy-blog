import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "YY 的第一篇博客",
    excerpt: "欢迎来到我的彩色世界！这是一个充满创意和灵感的地方。",
    date: "2024-11-20",
    category: "生活",
    color: "from-pink-400 to-purple-500",
  },
  {
    id: 2,
    title: "探索无限的可能性",
    excerpt: "在这个充满色彩的世界里，我们可以创造任何我们想象的东西。",
    date: "2024-11-19",
    category: "创意",
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    title: "动画的魔力",
    excerpt: "动画让网页变得生动有趣，为用户带来更好的体验。",
    date: "2024-11-18",
    category: "技术",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 4,
    title: "色彩的力量",
    excerpt: "色彩不仅仅是视觉上的享受，更是情感的传达。",
    date: "2024-11-17",
    category: "设计",
    color: "from-green-400 to-emerald-500",
  },
];

export default function Home() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* 导航栏 */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-white animate-pulse-glow" />
            <h1 className="text-2xl font-bold text-white">YY 博客</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              首页
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              文章
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              关于
            </Button>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="flex-1 container py-12">
        {/* 欢迎区域 */}
        <section className="mb-16 animate-slide-in">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-4 animate-float">
              欢迎来到 YY 的彩色世界
            </h2>
            <p className="text-xl text-white/90 mb-8">
              这是一个充满创意、灵感和色彩的地方。在这里，我分享我的想法、经历和对生活的感悟。
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-semibold"
              >
                开始阅读 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Heart className="mr-2 w-4 h-4" /> 关注我
              </Button>
            </div>
          </div>
        </section>

        {/* 博客文章列表 */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">最新文章</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                className={`group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-6 cursor-pointer transition-all duration-300 ${
                  hoveredPost === post.id
                    ? "scale-105 shadow-2xl bg-white/20"
                    : "hover:bg-white/15"
                } animate-slide-in`}
              >
                {/* 彩色背景渐变 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* 内容 */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white/70 bg-white/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-white/60">{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-white/80 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-white/70 group-hover:text-white transition-colors">
                    阅读更多 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 统计信息 */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "文章数", value: "24", icon: "📝" },
              { label: "阅读量", value: "5.2K", icon: "👀" },
              { label: "粉丝", value: "1.8K", icon: "💖" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 animate-slide-in"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 mt-auto">
        <div className="container py-8 text-center text-white/70">
          <p>© 2024 YY 博客. 用彩色和创意装点生活.</p>
        </div>
      </footer>
    </div>
  );
}
