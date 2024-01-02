import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "../components/TodoItem"

async function toggleTodo(id: string, done: boolean){
  "use server"

  await prisma.todo.update({
    where: { id },
    data: { done }
  })
}

export default async function Home(){
  const todos = await prisma.todo.findMany()
  //await prisma.todo.create({ data: {title: "test", done: false} })

  return (
  <>
  <header className="flex justify-between items-center">
    <h1 className="text-2x1">Todos</h1>
    <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
  </header>

  <ul className="pl-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
    ))}
  </ul>
  </>
  )
}