
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
export const dynamic = "force-dynamic";

const Home = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);

  return (
    <main className="px-6 md:px-10 lg:px-16 pb-32">
      <div className="text-center my-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Your Companions
        </h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-xl mx-auto">
          Explore top-rated AI companions built to support your goals.
        </p>
      </div>

      <section className="home-section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <div className="my-16 border-t border-border" />

      <section className='home-section'>
          <CompanionList 
            title="Recently completed sessions"
            companions={recentSessionCompanions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
    </main>
  );
};

export default Home;
