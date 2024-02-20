("use client");

import { MobileHeaderBar } from "~/components/MobileHeaderBar";
import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import HeroBanner from "~/components/HeroBanner";
import { Separator } from "@/components/ui/separator";
import ImageToggler from "~/components/ImageToggler";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<HeroBanner />
			<Separator className="mt-6" />
			<ImageToggler
				topText={"top"}
				img1={"https://placehold.co/600x400"}
				img2={"https://placehold.co/600x400"}
			/>
			<Separator className="mt-6" />
			<ImageToggler
				topText={"top"}
				img1={"https://placehold.co/600x400"}
				img2={"https://placehold.co/600x400"}
			/>
		</div>
	);
}
