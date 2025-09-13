import { Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareMenu from "@/modules/links/components/share-menu";
import LinkForm from "@/modules/Links/components/LinkForm";
// import { profile } from "console";
const page = () => {
  return (
    <section className="flex flex-col  gap-3 py-4 px-6">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row justify-center items-center gap-3">
          <Button
            variant="outline"
            size="default"
            className="gap-2 bg-transparent"
          >
            <Brush size={16} />
            Design
          </Button>
          {/* <ShareMenu username={profile?.username!} /> */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-14">
        <div className="order-2 lg:order-1 border-r">
            {/* <LinkForm  username={profile?.username!} 
            bio={profile?.bio}
            /> */}
        </div>
      </div>
    </section>
  );
};

export default page;
