import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroBanner />
      <div className="h-[100px]"></div>
    </div>
  )
}
