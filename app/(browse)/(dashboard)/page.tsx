'use client'

import { MyRouter } from "@/router/Router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";


import { TbBrandFlutter, TbBrandReact, TbBrandFirebase, TbBrandNextjs } from "react-icons/tb";



export default function Home() {

  const router = useRouter();

  return (
    <>

      <Hero />
      <button type="button" onClick={() => router.push(`${MyRouter.blogPage}/deneme`)} className="bg-red-300 m-4 p-3">Blog Page</button>

      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="lg:col-span-3 border-2 items-center justify-center flex flex-col p-4">
            <TbBrandFlutter className="text-6xl" />
            <h2>Home 1</h2>
          </div>
          <div className="border-2 items-center justify-center flex flex-col p-4">
            <TbBrandNextjs className="text-6xl" />
            <h2>Home 2</h2>
          </div>
          <div className="border-2 items-center justify-center flex flex-col p-4">
            <TbBrandReact className="text-6xl" />
            <h2>Home 3</h2>
          </div>
          <div className="border-2 items-center justify-center flex flex-col p-4">
            <TbBrandFirebase className="text-6xl" />
            <h2>Home 4</h2>
          </div>

        </div>
      </div>

    </>
  );
}
