import CompanionList from "@/components/CompanionList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getUserCompanions, getUserSessions } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Profile = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);

  return (
    <main className="w-full max-w-6xl mx-auto mt-15 px-4 py-8 rounded-3xl shadow-2xl border border-border bg-card mb-25">
      {/* Profile Header */}
      <section className="flex flex-col sm:flex-row justify-between gap-8 items-center mb-12">
        <div className="flex items-center gap-6">
          <Image
            src={user.imageUrl}
            alt={user.firstName || "Profile"}
            width={100}
            height={100}
            className="rounded-full border-2 border-primary shadow-md"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-foreground">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-muted-foreground text-sm">{user.emailAddresses[0].emailAddress}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 flex-wrap">
          <div className="rounded-xl border border-border bg-muted/20 dark:bg-muted/10 p-4 shadow-sm hover:shadow-md transition-all w-48">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icons/check.svg" alt="Check" width={20} height={20} />
              <p className="text-xl font-bold">{sessionHistory.length}</p>
            </div>
            <p className="text-muted-foreground text-sm">Lessons Completed</p>
          </div>

          <div className="rounded-xl border border-border bg-muted/20 dark:bg-muted/10 p-4 shadow-sm hover:shadow-md transition-all w-48">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icons/cap.svg" alt="Cap" width={20} height={20} />
              <p className="text-xl font-bold">{companions.length}</p>
            </div>
            <p className="text-muted-foreground text-sm">Companions Created</p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <Accordion type="multiple" className="space-y-6">
        <AccordionItem value="recent">
          <AccordionTrigger className="text-xl sm:text-2xl font-semibold px-3 rounded-md bg-muted/20 dark:bg-muted/10 hover:bg-muted/30 dark:hover:bg-muted/20 transition">
            Recent Sessions
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            <CompanionList title="Recent Sessions" companions={sessionHistory} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="companions">
          <AccordionTrigger className="text-xl sm:text-2xl font-semibold px-3 rounded-md bg-muted/20 dark:bg-muted/10 hover:bg-muted/30 dark:hover:bg-muted/20 transition">
            My Companions ({companions.length})
          </AccordionTrigger>
          <AccordionContent className="mt-4">
            <CompanionList title="My Companions" companions={companions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Profile;
