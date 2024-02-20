import { MobileHeaderBar } from "~/components/MobileHeaderBar";
import HeroBanner from "~/components/HeroBanner";
import { Separator } from "@/components/ui/separator";

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<div className="block h-16 md:hidden">
				<MobileHeaderBar />
			</div>
			<HeroBanner />
			<Separator className="mt-6" />
			<ImageToggler />
		</div>
	);
}
