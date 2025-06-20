import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import CompanionCard from "./CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import CompanionList from "./CompanionList";
import CTA from "./CTA";

const Home = async () => {
    const companions = await getAllCompanions({ limit: 3});
    const recentSessionCompanions = await getRecentSessions(10);
    
  return (
   <>
      <h1 className='text-3xl font-bold mt-7'>Popular Companions</h1>
        
        <section className="home-section">
          {companions.map((companion) => (
            <CompanionCard 
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))}
          
        </section>

        <section className='home-section'>
          <CompanionList 
            title="Recently completed sessions"
            companions={recentSessionCompanions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </>
  )
}

export default Home
