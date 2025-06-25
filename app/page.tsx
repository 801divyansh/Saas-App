export const dynamic = "force-dynamic";
import LandingPage from '@/components/LandingPage';

const Page = async () => {
  return (
    <div className="bg-transparent dark:bg-black/5 backdrop-blur-sm rounded-xl"
>
      <LandingPage />
    </div>
  )
}

export default Page