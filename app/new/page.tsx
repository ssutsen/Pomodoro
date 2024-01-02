import Link from "next/link"
import { prisma } from "@/db"
import { redirect } from "next/navigation";


async function createTodo(data: FormData) {
    "use server";

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title")
    }

    await prisma.todo.create({
        data: {
            title: title,
            done: false
        }
    });

    redirect("/")

}

export default function Page() {
    return (
        <>
        <header className="flex justify-between items-center">
          <h1 className="text-2x1">New</h1>
        </header>
        <form action={createTodo} className="flex gap-2 flex-col">
            <input 
                type="text"
                name="title"
                className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            />
            <div className="flex gap-1 justify-end">
                <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">Cancel</Link>
                <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Save</button>
            </div>
        </form>
        </>
    )
}