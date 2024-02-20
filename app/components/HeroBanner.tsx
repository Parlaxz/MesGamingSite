import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroBanner() {
	return (
		<div className="flex items-center justify-center w-full">
			<Carousel className="w-full px-1 border-none ">
				<CarouselContent className="border-none">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className=" border">
									<CardContent className="flex items-center justify-center p-6 h-72 w-full">
										<span className="text-4xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNext className="absolute right-0 " />
				<CarouselPrevious className="absolute left-0" />
			</Carousel>
		</div>
	);
}
