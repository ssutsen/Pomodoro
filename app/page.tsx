import { prisma } from "@/db"
import Link from "next/link"
import { TodoItem } from "../components/TodoItem"
import StartButton  from "../components/Startbutton"
import TimePick from "../components/TimePick"
import Image from "next/image";

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
  <header className="flex justify-between items-center pt-6">
    <h2 className="font-mono text-3xl pl-52">TO-DO</h2>
    <h2 className="font-mono text-3xl pl-8">Select tomato Time</h2>
    <h2 className="font-mono text-3xl pr-52">Rest Time</h2>
  </header>

  <div className="flex items-start">
  <ul className="pl-56 py-4">
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
    ))}
    <div className="mb-4 mt-4 ml-2">
      <Link href="/new">
      <Image
          src="/add.png"
          alt="Logo"
          width="30"
          height="30"
        />
      </Link> 
    </div>
  </ul>
  <div className=" pl-72 py-20">
    <TimePick />
  </div>
  <div className="pl-56 py-20">
    <TimePick />
  </div>
  </div>
  <div className="fixed bottom-0 right-0 p-10">
    <Link href="/start">
      <StartButton />
    </Link>
      
    </div>
  </>
  )
}