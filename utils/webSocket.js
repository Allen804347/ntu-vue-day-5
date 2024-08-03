const data = [
  { id: 1, name: 'Bubble Tea', price: 4, description: 'A sweet and refreshing tea with tapioca pearls.' },
  { id: 2, name: 'Milkshake', price: 5, description: 'A creamy and delicious milkshake with various flavors.' },
  { id: 3, name: 'Smoothie', price: 6, description: 'A healthy and fruity smoothie with fresh ingredients.' }
]

// const data = [
//   { id: 1, name: 'Bubble Tea', price: 4, description: 'A sweet and refreshing tea with tapioca pearls.' },
//   { id: 2, name: 'Milkshake', price: 5, description: 'A creamy and delicious milkshake with various flavors.' },
//   { id: 3, name: 'Smoothie', price: 6, description: 'A healthy and fruity smoothie with fresh ingredients.' },
//   { id: 3, name: 'Smoothie', price: 2, description: 'A healthy and fruity smoothie with fresh ingredients.' },
//   { id: 2, name: 'Coffee', price: 7, description: 'Black Coffee with bold favor.' },
// ]

export default function(cb) {
  let interval = setInterval(() => {
    const _data = data.shift()
    cb(_data)
    if (data.length === 0) {
      clearInterval(interval)
      interval = null
    }
  }, 1000);
}