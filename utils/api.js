const data = [
  { id: 1, name: 'Bubble Tea', price: 4, description: 'A sweet and refreshing tea with tapioca pearls.' },
  { id: 2, name: 'Milkshake', price: 5, description: 'A creamy and delicious milkshake with various flavors.' },
  { id: 3, name: 'Smoothie', price: 6, description: 'A healthy and fruity smoothie with fresh ingredients.' }
]

export default function simulateHttpRequest(callback) {
  // 模擬的延遲時間（毫秒）
  const delay = 1000; // 1 秒

  // 使用 setTimeout 模擬延遲
  setTimeout(() => {
    // 回調函數並回傳數據
    callback(data);
  }, delay);
}
