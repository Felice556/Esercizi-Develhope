export function TodoList() {
  const [items, setItems] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
    return (
      <div>
    <ul>
       {items.map((item) => (
    <li key={item}>
        {item}
        <button onClick={() => setItems(items.filter(i => i !== item))}>Remove</button>
    </li>
))}
    </ul>
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <button onClick={() => { setItems([...items, inputValue]) ; setInputValue('')}}>Add</button>
    <button onClick={() => setItems([])}>Reset</button>
    
</div>
    )
}