import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const routes = {
    // GET
    searchByName: (name: string) =>
      "https://api.github.com/search/users?q=" + name,
  };

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-center font-bold text-xl">Search GitHub User</h1>
      <div className="flex w-96 items-center space-x-2">
        <Input type="email" placeholder="Search by username" />
        <Button type="submit">Search</Button>
      </div>

      <div>
        <p className="text-xs font-bold text-foreground/50">{`----------Sample Card Start----------`}</p>
        <div className="relative w-full h-60">
          <Image
            fill
            src="/sample-card.png"
            alt="sample-card"
            className="object-contain"
          ></Image>
        </div>
        <p className="text-xs font-bold text-foreground/50">{`----------Sample Card End----------`}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-xs font-bold text-foreground/50">Search results</p>
          {/* update pagination */}
          <p className="text-xs font-bold text-foreground/50">Showing - of -</p>
        </div>

        <Card>
          <CardContent>{/* Your card design code here */}</CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Home;
