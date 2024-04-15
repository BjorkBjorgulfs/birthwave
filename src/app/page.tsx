import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-[600px] relative overflow-hidden">
        
      <Image src="/pregnantWoman.jpg" alt="Pregnant Woman" layout="fill" objectFit="cover" objectPosition="center 85%"/>
      </div>
      <div className="flex w-full h-[600px] justify-between px-8 py-8">
        <div className="w-[300px] h-[300px] bg-custom-pink rounded-full"></div>
        <div className="w-[700px] h-[560] bg-custom-pink rounded-xl p-7">
          <p >I'm Guðný Rós, birth and postnatal doula working in Iceland. I live in Reykjavík with my wife and two young children.
I am extremely passionate about helping parents have a positive and empowering experiences through birth. My strong belief is that every person giving birth has the right to make their own choices and be listened to, heard and held. The transition of bringing your baby into the world is such a significant and sacred one, and I will help you honor that, whether your birth is at home, in a birth center or in hospital.
As your doula, I am here to provide you with information, practical support during the birth and postpartum period, advocate for you if needed and, most importantly, provide calm, compassionate and consistent emotional support.</p>
          <Button color="dark" text="Read more" href="/about" type="button"/>
        </div>
      </div>
      <div className="w-full h-[600px]">
        <Button color="dark" text="Read more" href="/info" type="button"/>
      </div>

      
    </main>
  );
}
