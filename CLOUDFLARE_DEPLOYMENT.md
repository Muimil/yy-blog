# Cloudflare Pages 自动化部署指南

本项目已配置为自动部署到 Cloudflare Pages。以下是完整的设置步骤。

## 前置要求

- GitHub 账户（已有）
- Cloudflare 账户（已有）
- 项目已推送到 GitHub：https://github.com/Muimil/yy-blog

## 自动化部署设置步骤

### 第 1 步：获取 Cloudflare API 令牌

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 登录您的账户（Ddlmfbwhznofm@gmail.com）
3. 进入 **My Profile** → **API Tokens**
4. 点击 **Create Token**
5. 选择 **"Edit Cloudflare Workers"** 模板或创建自定义令牌
6. 确保令牌具有以下权限：
   - **Account** → **Cloudflare Pages** → **Edit**
   - **Account** → **Account Settings** → **Read**
7. 复制生成的令牌

### 第 2 步：获取 Cloudflare 账户 ID

您的账户 ID 是：`ec4dac00fad0cb5309cc4404df9f4897`

### 第 3 步：在 GitHub 中添加 Secrets

1. 访问 GitHub 仓库：https://github.com/Muimil/yy-blog
2. 进入 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 添加以下两个 Secrets：

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: 粘贴您从第 1 步复制的 API 令牌

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: `ec4dac00fad0cb5309cc4404df9f4897`

### 第 4 步：在 Cloudflare 中创建 Pages 项目

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权 GitHub 并选择 `Muimil/yy-blog` 仓库
6. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist/public`
7. 点击 **Save and Deploy**

### 第 5 步：启用自动部署（可选）

部署完成后，您可以：

1. 在 GitHub 中创建 `.github/workflows/deploy-to-cloudflare.yml` 文件（需要有 workflows 权限）
2. 或者在 Cloudflare Pages 中启用自动部署（推荐）

## 之后的工作流程

一旦设置完成，您只需要：

1. 在本地编辑代码
2. 提交并推送到 GitHub
3. Cloudflare Pages 会自动检测更改并部署

```bash
# 本地开发
pnpm dev

# 构建
pnpm build

# 提交更改
git add .
git commit -m "Update blog content"
git push origin main
```

## 部署状态查看

- **GitHub Actions**: https://github.com/Muimil/yy-blog/actions
- **Cloudflare Pages**: https://dash.cloudflare.com (Pages 部分)

## 常见问题

**Q: 如何更新博客内容？**
A: 编辑 `client/src/pages/Home.tsx` 中的 `blogPosts` 数组，然后推送到 GitHub。

**Q: 如何修改网站样式？**
A: 编辑 `client/src/index.css` 中的 CSS 变量和动画，然后推送到 GitHub。

**Q: 部署失败怎么办？**
A: 检查 GitHub Actions 日志（https://github.com/Muimil/yy-blog/actions）和 Cloudflare Pages 日志。

## 项目结构

```
yy_blog/
├── client/
│   ├── src/
│   │   ├── pages/Home.tsx       # 主页面和博客内容
│   │   ├── index.css            # 全局样式和动画
│   │   └── const.ts             # 常量配置
│   └── public/                  # 静态资源
├── wrangler.toml                # Cloudflare 配置
├── package.json
└── pnpm-lock.yaml
```

## 支持

如需帮助，请访问：
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Wrangler 文档](https://developers.cloudflare.com/workers/wrangler/)
