import MainHeader from "@/components/MainHeader";
import HomeBanner from "@/components/HomeBanner";
import HomeMarquee from "@/components/HomeMarquee";

export default function Home() {
  return (
    <main className="homepage">
      <MainHeader />
      <HomeBanner />
      <HomeMarquee />
    </main>
  );
}
