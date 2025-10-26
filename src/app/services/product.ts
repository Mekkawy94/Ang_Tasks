import { Injectable, signal } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsData: Product[] = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      description: "Classic fit denim jacket with distressed details and button closure.",
      price: 85,
      discountPercentage: 12,
      rating: 4.6,
      stock: 40,
      brand: "RetroWear",
      category: "fashion",
      thumbnail: "https://picsum.photos/id/10/300/200",
      images: ["https://picsum.photos/id/10/300/200"]
    },
    {
      id: 2,
      title: "Ceramic Coffee Mug Set",
      description: "Set of 4 handcrafted ceramic mugs with matte finish and ergonomic handle.",
      price: 32,
      discountPercentage: 8,
      rating: 4.7,
      stock: 60,
      brand: "HomeCraft",
      category: "home",
      thumbnail: "https://picsum.photos/id/20/300/200",
      images: ["https://picsum.photos/id/20/300/200"]
    },
    {
      id: 3,
      title: "Noise-Cancelling Earbuds",
      description: "True wireless earbuds with active noise cancellation and 24h battery.",
      price: 110,
      discountPercentage: 15,
      rating: 4.8,
      stock: 95,
      brand: "AudioZen",
      category: "electronics",
      thumbnail: "https://picsum.photos/id/30/300/200",
      images: ["https://picsum.photos/id/30/300/200"]
    },
    {
      id: 4,
      title: "Yoga Mat Premium",
      description: "Eco-friendly, non-slip yoga mat with alignment lines and carrying strap.",
      price: 42,
      discountPercentage: 10,
      rating: 4.5,
      stock: 70,
      brand: "ZenFlex",
      category: "fitness",
      thumbnail: "https://picsum.photos/id/40/300/200",
      images: ["https://picsum.photos/id/40/300/200"]
    },
    {
      id: 5,
      title: "Leather Crossbody Bag",
      description: "Compact crossbody bag with adjustable strap and RFID-blocking pockets.",
      price: 68,
      discountPercentage: 9,
      rating: 4.4,
      stock: 50,
      brand: "UrbanCraft",
      category: "accessories",
      thumbnail: "https://picsum.photos/id/50/300/200",
      images: ["https://picsum.photos/id/50/300/200"]
    },
    {
      id: 6,
      title: "Vitamin C Serum",
      description: "Brightening facial serum with hyaluronic acid and vitamin C for glowing skin.",
      price: 36,
      discountPercentage: 7,
      rating: 4.6,
      stock: 85,
      brand: "DermaGlow",
      category: "skincare",
      thumbnail: "https://picsum.photos/id/60/300/200",
      images: ["https://picsum.photos/id/60/300/200"]
    },
    {
      id: 7,
      title: "Smart LED Desk Lamp",
      description: "Adjustable brightness and color temperature with USB charging port.",
      price: 45,
      discountPercentage: 11,
      rating: 4.7,
      stock: 65,
      brand: "LumaTech",
      category: "electronics",
      thumbnail: "https://picsum.photos/id/70/300/200",
      images: ["https://picsum.photos/id/70/300/200"]
    },
    {
      id: 8,
      title: "Organic Cotton Bed Sheets",
      description: "100% organic cotton, breathable and hypoallergenic, queen size.",
      price: 78,
      discountPercentage: 13,
      rating: 4.8,
      stock: 45,
      brand: "PureSleep",
      category: "home",
      thumbnail: "https://picsum.photos/id/80/300/200",
      images: ["https://picsum.photos/id/80/300/200"]
    },
    {
      id: 9,
      title: "Stainless Steel Watch",
      description: "Minimalist analog watch with Japanese movement and water resistance.",
      price: 95,
      discountPercentage: 14,
      rating: 4.5,
      stock: 35,
      brand: "Timeless",
      category: "accessories",
      thumbnail: "https://picsum.photos/id/90/300/200",
      images: ["https://picsum.photos/id/90/300/200"]
    },
    {
      id: 10,
      title: "Protein Powder (Vanilla)",
      description: "Whey protein isolate with 25g protein per serving, no artificial sweeteners.",
      price: 40,
      discountPercentage: 6,
      rating: 4.3,
      stock: 120,
      brand: "NutriFuel",
      category: "fitness",
      thumbnail: "https://picsum.photos/id/100/300/200",
      images: ["https://picsum.photos/id/100/300/200"]
    },
    {
      id: 11,
      title: "Wireless Charging Pad",
      description: "Fast 15W Qi wireless charger compatible with all modern smartphones.",
      price: 28,
      discountPercentage: 10,
      rating: 4.4,
      stock: 110,
      brand: "PowerUp",
      category: "electronics",
      thumbnail: "https://picsum.photos/id/110/300/200",
      images: ["https://picsum.photos/id/110/300/200"]
    },
    {
      id: 12,
      title: "Aloe Vera Gel",
      description: "99% pure aloe vera for soothing sunburns, cuts, and dry skin.",
      price: 12,
      discountPercentage: 5,
      rating: 4.2,
      stock: 200,
      brand: "NatureCare",
      category: "skincare",
      thumbnail: "https://picsum.photos/id/120/300/200",
      images: ["https://picsum.photos/id/120/300/200"]
    },
    {
      id: 13,
      title: "Canvas Tote Bag",
      description: "Durable, eco-friendly tote with reinforced handles and interior pocket.",
      price: 22,
      discountPercentage: 8,
      rating: 4.3,
      stock: 90,
      brand: "GreenCarry",
      category: "fashion",
      thumbnail: "https://picsum.photos/id/130/300/200",
      images: ["https://picsum.photos/id/130/300/200"]
    },
    {
      id: 14,
      title: "Digital Kitchen Scale",
      description: "Precise scale with tare function and stainless steel platform.",
      price: 19,
      discountPercentage: 7,
      rating: 4.5,
      stock: 130,
      brand: "ChefPro",
      category: "home",
      thumbnail: "https://picsum.photos/id/140/300/200",
      images: ["https://picsum.photos/id/140/300/200"]
    },
  ];

  products = signal<Product[]>(this.productsData);

  getCategories(): { id: string; name: string }[] {
    const unique = Array.from(new Set(this.productsData.map(p => p.category)));
    return [
      { id: 'all', name: 'All' },
      ...unique.map(cat => ({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1)
      }))
    ];
  }
}