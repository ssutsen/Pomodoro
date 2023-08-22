import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "../components/TodoItem"

export default async function Home(){
  const todos = await prisma.todo.findMany()
  //await prisma.todo.create({ data: {title: "test", done: false} })

  return (
  <>
  <header className="flex justify-between items-center">
    <h1 className="text-2x1">Todos</h1>
  </header>

  <ul className="pl-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo}/>
    ))}
  </ul>
  </>
  )
}