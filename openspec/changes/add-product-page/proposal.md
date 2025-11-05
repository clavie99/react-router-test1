# Change: 添加产品展示页面

## Why
当前应用只有一个欢迎页面，缺少核心的产品展示功能。需要添加一个专门的产品页面来展示产品信息、特性和购买选项，为用户提供完整的产品浏览体验。

## What Changes
- 添加新的产品页面路由 `/products`
- 创建产品展示组件，包含产品信息、图片、价格和购买按钮
- 实现响应式设计，支持移动端和桌面端
- 添加产品数据模型和类型定义
- 集成 Tailwind CSS 样式系统

## Impact
- 受影响的规范: product-display (新增)
- 受影响的代码: 
  - `app/routes.ts` - 添加新路由
  - `app/routes/products.tsx` - 新产品页面组件
  - `app/types/product.ts` - 产品数据类型
  - `app/components/ProductCard.tsx` - 产品卡片组件
  - `app/data/products.ts` - 示例产品数据