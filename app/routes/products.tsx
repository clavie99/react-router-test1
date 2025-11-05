import type { Route } from "./+types/products";
import { ProductCard } from "../components/ProductCard";
import { sampleProducts, getCategories } from "../data/products";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "产品展示 - React Router App" },
    { name: "description", content: "浏览我们精选的产品系列，发现高品质的电子产品和配件" },
    { name: "keywords", content: "产品, 电子产品, 购物, 在线商城" }
  ];
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [notification, setNotification] = useState<string>("");
  
  const categories = ["全部", ...getCategories()];
  const filteredProducts = selectedCategory === "全部" 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  const handleAddToCart = (productId: string) => {
    const product = sampleProducts.find(p => p.id === productId);
    if (product) {
      setNotification(`${product.name} 已添加到购物车`);
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              产品展示
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              发现我们精心挑选的高品质产品，为您的生活带来便利与乐趣
            </p>
          </div>
        </div>
      </div>

      {/* 通知消息 */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fade-in">
          {notification}
        </div>
      )}

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 分类筛选 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">产品分类</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 产品统计 */}
        <div className="mb-6">
          <p className="text-gray-600">
            共找到 <span className="font-semibold">{filteredProducts.length}</span> 个产品
          </p>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* 空状态 */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              暂无产品
            </h3>
            <p className="text-gray-600">
              该分类下暂时没有产品，请尝试其他分类
            </p>
          </div>
        )}
      </div>

      {/* 页脚信息 */}
      <div className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>更多产品即将上线，敬请期待！</p>
          </div>
        </div>
      </div>
    </div>
  );
}