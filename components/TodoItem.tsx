"use client"

type TodoItemProps = {
    id: string
    title: string
    done: Boolean
    toggleTodo: (id: string, done: boolean) => void
    }

export function TodoItem({ id, title, done, toggleTodo }: TodoItemProps) {
    return (
    <li className="flex gap-1 items-center">
        <input 
            type="checkbox" 
            className="cursor-pointer peer"
            defaultChecked={done}
            onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label 
           htmlFor={id} 
           className="peer-checked:line-through
           peer-checked:text-slate-500">{title}</label>
    </li>
    )
}