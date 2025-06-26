import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { cn, getSubjectColor } from "@/lib/utils";
  import Link from "next/link";
  import Image from "next/image";
  
  interface CompanionListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
  }
  
  const CompanionList = ({ title, companions, classNames }: CompanionListProps) => {
    return (
      <article className={cn("companion-list dark:bg-card/50 hover:shadow-pink-300/30 backdrop-blur-md shadow-md space-y-6", classNames)}>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h2>
  
        <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-md shadow-md overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30 dark:bg-muted/20">
              <TableRow>
                <TableHead className="text-base font-semibold w-2/3">Lessons</TableHead>
                <TableHead className="text-base font-semibold">Subject</TableHead>
                <TableHead className="text-base font-semibold text-right">Duration</TableHead>
              </TableRow>
            </TableHeader>
  
            <TableBody>
              {companions?.map(({ id, subject, name, topic, duration }) => (
                <TableRow
                  key={id}
                  className="hover:bg-muted/20 transition-all border-b border-border"
                >
                  <TableCell>
                    <Link href={`/companions/${id}`}>
                      <div className="flex items-center gap-4">
                        {/* Icon bubble */}
                        <div
                          className="size-[64px] hidden md:flex items-center justify-center rounded-xl"
                          style={{ backgroundColor: getSubjectColor(subject) }}
                        >
                          <Image
                            src={`/icons/${subject}.svg`}
                            alt={subject}
                            width={32}
                            height={32}
                          />
                        </div>
  
                        {/* Lesson info */}
                        <div className="flex flex-col gap-1">
                          <p className="font-bold text-lg">{name}</p>
                          <p className="text-sm text-muted-foreground">{topic}</p>
                        </div>
                      </div>
                    </Link>
                  </TableCell>
  
                  <TableCell>
                    {/* Badge or Icon */}
                    <div className="hidden md:inline-block">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white">
                        {subject}
                      </span>
                    </div>
                    <div
                      className="md:hidden flex items-center justify-center w-fit p-2 rounded-md"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={18}
                        height={18}
                      />
                    </div>
                  </TableCell>
  
                  <TableCell>
                    <div className="flex items-center justify-end gap-2 text-muted-foreground">
                      <p className="text-base font-medium">
                        {duration} <span className="max-md:hidden">mins</span>
                      </p>
                      <Image
                        src="/icons/clock.svg"
                        alt="duration"
                        width={14}
                        height={14}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </article>
    );
  };
  
  export default CompanionList;
  