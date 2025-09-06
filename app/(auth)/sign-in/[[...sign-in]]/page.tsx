import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black px-4">
      {/* Outer compressed container */}
      <div className="w-full max-w-sm sm:max-w-md p-6 bg-white/90 dark:bg-slate-800/80 
                      backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
        
        <div className="flex flex-col items-center mb-6">
          <Image src={'/logo.svg'} width={44} height={44} alt="Logo" className="rounded-full" />
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Welcome back
          </h1>
          <p className="text-sm text-center text-slate-500 dark:text-slate-400">
            Sign in to continue to <span className="font-medium">TreeBio</span>
          </p>
        </div>

        <div className="bg-transparent">
          <SignIn />
        </div>

        <p className="mt-4 text-xs text-center text-slate-400">
          By signing in you agree to our <span className="underline">Terms</span> 
          and <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  )
}
