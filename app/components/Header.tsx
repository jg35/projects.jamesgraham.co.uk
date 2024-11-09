"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getTitle(path: string) {
  switch (path) {
    case "/":
      return "Projects";
    default:
      return path.slice(1).replaceAll("-", " ");
  }
}

function getMessage(path: string) {
  switch (path) {
    case "/":
      return {
        id: path,
        content: (
          <>
            Hey! {"I'm "}
            <Link
              href="http://linkedin.com/in/jamesgraham10"
              target="_blank"
              className="text-blue-500 underline"
            >
              James
            </Link>
            . This is a selection of projects I've worked on over the last few
            years. Click on one to learn more...
          </>
        ),
      };
    default:
      return {
        id: path,
        content: "hey!",
      };
  }
}

export default function Header() {
  const [showFace, setShowFace] = useState(false);
  const path = usePathname();
  const title = getTitle(path);

  const message = getMessage(path);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      const viewedMessages = JSON.parse(
        sessionStorage.getItem("viewedMessages") || "[]"
      );
      if (viewedMessages.includes(message.id)) return;
      setShowFace(true);
      viewedMessages.push(message.id);
      sessionStorage.setItem("viewedMessages", JSON.stringify(viewedMessages));
    }, 1000);
    const hideTimeout = setTimeout(() => setShowFace(false), 6000);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [path, message.id]);

  return (
    <header className="relative flex justify-between items-center mb-12">
      <div>
        {path !== "/" && (
          <Link
            href="/"
            className="uppercase font-bold text-sm flex items-center"
          >
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Home</span>
          </Link>
        )}
      </div>

      <h1 className="font-bold text-3xl uppercase">{title}</h1>

      <div
        className={`relative rounded-full border-4 border-white w-16 h-16 shadow transition-all group ${
          showFace
            ? "rotate-12 border-blue-500"
            : "hover:rotate-12 hover:border-blue-500"
        } `}
      >
        <Image src="/me.png" alt="James Graham" width={425} height={425} />
        <div
          className={`border absolute w-60 -rotate-12 bg-white touch-none opacity-0 rounded-lg transition-all top-8 -left-64 p-2 text-black text-xs speech-bubble ${
            showFace
              ? "touch-auto opacity-100 bg-gray-50 shadow"
              : "group-hover:touch-auto group-hover:opacity-100 group-hover:bg-gray-50 group-hover:shadow"
          }

          }`}
        >
          {message.content}
        </div>
      </div>
    </header>
  );
}
