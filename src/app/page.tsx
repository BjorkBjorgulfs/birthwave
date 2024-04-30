// This is the main page component, it has one client component child, the Button component
// Later I would connect all the text boxes to the database and make the admin of the page able to change the text
import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image src="/pregnantWoman.jpg" alt="Pregnant Woman" layout="fill" objectFit="cover" objectPosition="center 85%"  sizes= 'width: "auto"'/>
      </div>
      <div className="flex w-full h-screen justify-center gap-24 py-8 items-center">
        <div className="relative h-3/4">
          <div className="w-[250px] h-[250px] bg-custom-pink rounded-full overflow-hidden"></div>
        </div>
        <div className="relative w-[700px] h-3/4 bg-custom-pink rounded-2xl p-12 overflow-auto items-center justify-center">
          <div className="relative h-[90%] w-[90%] overflow-auto">
            <p className="text-lg leading-8">I'm Guðný Rós, birth and postnatal doula working in Iceland. I live in Reykjavík with my wife and two young children.
              I am extremely passionate about helping parents have a positive and empowering experiences through birth. My strong belief is that every person giving birth has the right to make their own choices and be listened to, heard and held. The transition of bringing your baby into the world is such a significant and sacred one, and I will help you honor that, whether your birth is at home, in a birth center or in hospital.
              <br></br>As your doula, I am here to provide you with information, practical support during the birth and postpartum period, advocate for you if needed and, most importantly, provide calm, compassionate and consistent emotional support.</p>
          </div>
          <Button className="absolute bottom-8 right-12" color="light" text="Read more" href="/about" type="button"/>
        </div>
      </div>
      <div className="flex w-full h-screen justify-center gap-24 py-8 bg-custom-gray items-center">
        <div className="h-3/4 w-2/5 relative overflow-hidden rounded-2xl">
          <Image src="/bellyCandle.jpg" alt="Pregnant Belly" layout="fill" objectFit="cover" objectPosition="center" sizes= 'width: "auto"'/>
        </div>
        <div className="flex flex-col h-3/4 w-2/6 relative pb-16">
          <div className="flex flex-col h-auto relative overflow-hidden gap-5">
            <h2 className="text-2xl">What to expect when having a doula</h2>
            <p className="text-lg leading-8 overflow-ellipsis">Traditionally, women have long been birth companions for each other and provided invaluable support 
              during labor. Similarly, a doula is a person dedicated to helping parents-to-be through pregnancy and 
              labor. They will work with their clients to really get to know them and their 
              expectations prior to the birth and be there to provide a continuous, familiar presence during the birth itself. 
              Above all, they are there to listen, encourage and provide both practical and emotional care and compassion at 
              such an important time in your life.
            </p>
          </div>
          <Button className="absolute bottom-0 right-0" color="dark" text="Read more" href="/info" type="button"/>
        </div>
      </div>
    </main>
  );
}
