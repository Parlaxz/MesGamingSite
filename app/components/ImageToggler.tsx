import * as React from "react";

interface ImageTogglerProps {
	topText: string;
	img1: string;
	img2: string;
}

import { Switch } from "@/components/ui/switch";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
function ImageToggler({ topText, img1, img2 }: ImageTogglerProps) {
	const [isToggled, setIsToggled] = React.useState(false);
	const [api, setApi] = React.useState<CarouselApi>();
	React.useEffect(() => {
		if (api) api?.scrollTo(isToggled ? 1 : 0);
	}, [api, isToggled]);
	return (
		<div className="grid gap-2">
			<div className="text-3xl flex justify-center ">{topText}</div>
			<div className="flex items-center justify-center w-full relative">
				<div className="absolute left-0 right-0 bottom-0 top-0 z-[1]"></div>
				<Carousel setApi={setApi} className="w-full px-1 border-none ">
					<CarouselContent className="border-none">
						<CarouselItem>
							<Card>
								<CardContent className="flex items-center justify-center p-6 h-72 w-full">
									<img
										className="h-72 w-full object-cover"
										src={img1}
										alt="image"
									/>
								</CardContent>
							</Card>
						</CarouselItem>

						<CarouselItem>
							<Card>
								<CardContent className="flex items-center justify-center p-6 h-72 w-full">
									<img
										className="h-72 w-full object-cover"
										src={img2}
										alt="image"
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
			<div className="flex py-2 justify-center">
				<Switch
					id="airplane-mode"
					checked={isToggled}
					onCheckedChange={(toggled) => {
						setIsToggled(toggled);
					}}
				/>
			</div>
		</div>
	);
}

export default ImageToggler;
