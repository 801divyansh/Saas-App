import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string; // not used anymore
}

const subjectGradients: Record<string, string> = {
  science: "bg-gradient-to-br from-purple-400/30 to-purple-600/20 hover:shadow-[0_8px_24px_rgba(139,92,246,0.3)]",
  maths: "bg-gradient-to-br from-yellow-300/30 to-yellow-500/20 hover:shadow-[0_8px_24px_rgba(234,179,8,0.25)]",
  language: "bg-gradient-to-br from-sky-300/30 to-sky-500/20 hover:shadow-[0_8px_24px_rgba(56,189,248,0.25)]",
  coding: "bg-gradient-to-br from-pink-300/30 to-pink-500/20 hover:shadow-[0_8px_24px_rgba(244,114,182,0.35)]",
  history: "bg-gradient-to-br from-orange-300/30 to-orange-500/20 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)]",
  economics: "bg-gradient-to-br from-green-300/30 to-green-500/20 hover:shadow-[0_8px_24px_rgba(74,222,128,0.25)]",
};

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
}: CompanionCardProps) => {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-3xl backdrop-blur-md p-6 gap-5 w-full min-lg:max-w-[410px] border border-border transition-all duration-300 transform hover:scale-[1.02] text-card-foreground overflow-hidden",
        subjectGradients[subject.toLowerCase()] || "bg-gradient-to-br from-muted/30 to-muted/10"
      )}
    >
      {/* Optional glowing border */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/30 group-hover:shadow-xl pointer-events-none transition-all duration-300" />

      {/* Top row */}
      <div className="flex justify-between items-start relative z-10">
        <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white shadow-sm">
          {subject}
        </span>
        <Button className="rounded-full bg-black/20 px-3 bg-black/80 hover:bg-white dark:bg-black/20 dark:hover:bg-black/30">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </Button>
      </div>

      {/* Content */}
      <div className="z-10">
        <h2 className="text-2xl font-bold leading-snug">{name}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">{topic}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground z-10">
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={12.5} />
        <span>{duration} minutes</span>
      </div>

      {/* Button */}
      <Link href={`/companions/${id}`} className="w-full mt-4 relative z-10">
      <button
  className="w-full justify-center font-medium text-white py-2 px-4 rounded-xl
             bg-gradient-to-r from-[#6D6AFF] via-[#C66CFF] to-[#FC82FF]
             shadow-sm hover:shadow-md hover:scale-[1.02]
             transition-all duration-300 ease-in-out
             dark:from-[#5A57F1] dark:via-[#B056E3] dark:to-[#F06CD9]
             backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
>
  Launch Lesson
</button>



      </Link>
    </article>
  );
};

export default CompanionCard;
