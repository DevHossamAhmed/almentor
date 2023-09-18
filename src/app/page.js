"use client"
import Banner from '@/components/Banner/page'
import Pikes from '../components/Picks/Piks';
import Categories from '@/components/categories/page';
import Instructo from '@/components/instructors/page';




import Image from 'next/image';


export default function Home() {
  return (
    
    <main className="relative">
      <Banner />
      <Pikes />
      <Categories />
      <Instructo />
    </main>

  );
}
