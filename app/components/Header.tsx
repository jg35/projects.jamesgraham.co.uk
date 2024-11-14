"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "@/app/hooks/useScrollDirection";

export default function Header() {
  const [showFace, setShowFace] = useState(false);
  const direction = useScrollDirection();
  const path = usePathname();
  const title = getTitle(path);

  const message = getMessage();

  useEffect(() => {
    setShowFace(false);
  }, [path]);

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
    const hideTimeout = setTimeout(() => setShowFace(false), 8000);
    return () => {
      setShowFace(false);
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [path, message.id]);

  const showHeaderOnScrollUp = direction === "up";

  return (
    <header
      className={`transition-all duration-200 mb-1 w-full bg-gray-50 z-20 sticky top-0 ${
        showHeaderOnScrollUp ? "shadow border-none" : "-top-24"
      }`}
    >
      <div className="flex justify-between items-center  max-w-screen-2xl mx-auto w-full p-4">
        <div>
          {path !== "/" && (
            <Link
              href="/"
              className="uppercase font-bold text-sm flex items-center underline underline-offset-4 hover:no-underline"
            >
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Home</span>
            </Link>
          )}
        </div>

        <h1
          className={`font-bold uppercase ${
            showHeaderOnScrollUp ? "text-lg md:text-2xl" : "text-lg md:text-2xl"
          }`}
        >
          {title}
        </h1>

        <div
          className={`z-20 relative rounded-full border-4 border-neutral-100 shadow-md transition-all group ${
            showFace
              ? "rotate-12 border-blue-400"
              : "hover:rotate-12 hover:border-blue-400"
          } ${
            showHeaderOnScrollUp ? "size-8 sm:size-12 " : "size-12 sm:size-16 "
          }`}
        >
          <Image src="/me.png" alt="James Graham" width={425} height={425} />
          <div
            className={`border absolute w-60 -rotate-12 bg-white hidden opacity-0 rounded-lg transition-all -left-64 p-2 text-black text-xs speech-bubble ${
              showFace
                ? "block opacity-100 bg-gray-50 shadow"
                : "group-hover:block group-hover:opacity-100 group-hover:bg-gray-50 group-hover:shadow"
            }

          }`}
            style={{ top: "60%" }}
          >
            {message.content}
          </div>
        </div>
      </div>
    </header>
  );
}

function getTitle(path: string) {
  switch (path) {
    case "/":
      return "Projects";
    default:
      return path.slice(1).replaceAll("-", " ");
  }
}

function getMessage() {
  return {
    id: "HOME",
    content: (
      <>
        Hey! I&apos;m James. These are a selection of projects I&apos;ve built
        over the last few years. Click on one to learn more...
      </>
    ),
  };
}
