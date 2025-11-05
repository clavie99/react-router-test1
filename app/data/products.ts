import type { Product } from "../types/product";

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "无线蓝牙耳机",
    description: "高品质音效，降噪功能，续航24小时",
    price: 299,
    currency: "¥",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "电子产品",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2", 
    name: "智能手表",
    description: "健康监测，运动追踪，智能提醒",
    price: 1299,
    currency: "¥",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "电子产品",
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: "3",
    name: "便携充电宝",
    description: "20000mAh大容量，快充技术，轻薄设计",
    price: 149,
    currency: "¥",
    imageUrl: "https://images.unsplash.com/photo-1609592806285-d0a4e5c6b145?w=400&h=300&fit=crop",
    category: "电子产品",
    inStock: true,
    rating: 4.7,
    reviews: 256
  },
  {
    id: "4",
    name: "机械键盘",
    description: "青轴手感，RGB背光，游戏办公两用",
    price: 599,
    currency: "¥",
    imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    category: "电脑配件",
    inStock: false,
    rating: 4.6,
    reviews: 167
  },
  {
    id: "5",
    name: "无线鼠标",
    description: "人体工学设计，高精度传感器，静音按键",
    price: 199,
    currency: "¥",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "电脑配件",
    inStock: true,
    rating: 4.4,
    reviews: 93
  },
  {
    id: "6",
    name: "蓝牙音箱",
    description: "360度环绕音效，防水设计，户外便携",
    price: 399,
    currency: "¥",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    category: "音响设备",
    inStock: true,
    rating: 4.2,
    reviews: 74
  }
];

export const getProductsByCategory = (category?: string): Product[] => {
  if (!category) return sampleProducts;
  return sampleProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return sampleProducts.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(sampleProducts.map(product => product.category)));
};