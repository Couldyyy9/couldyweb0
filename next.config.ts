import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 如果部署到 username.github.io/repo-name，取消下面这行注释并填上 repo 名称
  // basePath: "/repo-name",
  allowedDevOrigins: ["192.168.1.46", "127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
  },
  // 本机存在多个 lockfile 时 Next 会把 workspace root 推断到用户目录，这里固定为本项目目录
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
