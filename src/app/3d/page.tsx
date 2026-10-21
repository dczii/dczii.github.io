import Link from "next/link";

import { Scene1 } from "@z/components";

export default function ThreeDPage() {
  return (
    <>
      <header className='sticky top-0 z-30 border-b border-[#d6d6d6]/15 bg-[#07080d]/95'>
        <div className='mx-auto flex max-w-6xl items-center px-5 py-2'>
          <Link href='/' className='inline-flex min-h-11 items-center text-sm font-semibold'>
            Danilo Zabala II
          </Link>
        </div>
      </header>
      <main id='main' className='relative z-10 mx-auto min-h-screen max-w-6xl px-5 py-8'>
        <h1 className='text-3xl font-semibold tracking-tight'>3D</h1>
        <div className='mt-6'>
          <Scene1 />
        </div>
      </main>
    </>
  );
}
