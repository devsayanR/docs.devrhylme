import { Laptop2, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="h-16 border-t-2 border-zinc-800 flex flex-row items-center justify-between bg-inherit z-50 text-sm text-center mt-2">
      <div className="flex flex-row items-center justify-between w-[62%] max-[1250px]:w-[90%]  mx-auto">
        <div>
          Built by nisabmohd. Hosted on Vercel.The source code is available on
          GitHub.
        </div>
        <div>
          <Button size={"icon"} className="rounded-full" variant={"ghost"}>
            <Sun className="w-5 h-5" />
          </Button>
          <Button size={"icon"} className="rounded-full" variant={"ghost"}>
            <Moon className="w-5 h-5" />
          </Button>
          <Button size={"icon"} className="rounded-full" variant={"secondary"}>
            <Laptop2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}