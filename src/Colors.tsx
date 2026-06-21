function Color({ id, name }: { id: number, name: string }) {
    return <li>{name}</li>
}


export function Colors({ items }: { items: { id: number, name: string }[] }) {
    return (
        <ul>
            {items.map((item) => (
                <Color key={item.id} id={item.id} name={item.name} />
            ))}
        </ul>
    )
}

