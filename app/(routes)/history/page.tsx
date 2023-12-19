import Image from "next/image";

import { Button } from "@/components/ui/button";

const History = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-center font-bold text-xl">Your Search History</h1>

      <div>
        <p className="text-xs font-bold text-foreground/50">{`----------Sample Search Card Start----------`}</p>
        <div className="relative w-[600px] h-60">
          <Image
            fill
            src="/search-card.png"
            alt="sample-card"
            className="object-contain"
          ></Image>
        </div>
        <p className="text-xs font-bold text-foreground/50">{`----------Sample Search Card End----------`}</p>
      </div>

      <Button type="submit">Clear Search History</Button>
    </section>
  );
};

export default History;
