import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = searchParams;
  const subject = filters.subject || '';
  const topic = filters.topic || '';

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main className="px-4 sm:px-8 lg:px-16 pb-28">
      {/* Top Section */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-10 mb-8">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Companion Library
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      {companions.length === 0 && (
        <p className="mt-20 text-center text-muted-foreground text-lg">
          No companions found for your filters.
        </p>
      )}
    </main>
  );
};

export default CompanionsLibrary;
