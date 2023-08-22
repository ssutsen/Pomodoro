type TodoItemProps = {
    id: string
    title: string
    done: Boolean
    }

export function TodoItem({ id, title, done }: TodoItemProps) {
    return (
    <li className="flex gap-1 items-center">
        <input type="checkbox" className="cursor-pointer peer"/>
        <label 
           htmlFor={id} 
           className="peer-checked:line-through
           peer-checked:text-slate-500">{title}</label>
    </li>
    )
}