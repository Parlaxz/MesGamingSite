import * as React from "react";
import { XIcon } from "lucide-react";
import logo from "~/assets/white_logo.png";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Twirl as Hamburger } from "hamburger-react";
import { Link, useLocation } from "@remix-run/react";

const pages = [
	{ name: "Home", href: "/" },
	{ name: "TEAM", href: "/team" },
	{ name: "MES CLUBS", href: "/clubs" },
	{ name: "MES TOURNAMENTS", href: "/tournaments" },
	{ name: "MES EVENTS", href: "/events" },
	{ name: "COMMERCIAL OFFERS", href: "/commercial-offers" },
	{ name: "ABOUT US", href: "/about-us" },
];

export function MobileHeaderBar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();
	console.log("location", location.pathname);
	return (
		<div className="flex justify-between items-center px-4 py-2">
			<Link to="/">
				<img className="w-16" src={logo}></img>
			</Link>
			<Drawer
				direction="right"
				open={isOpen}
				onOpenChange={(status) => {
					setIsOpen(status);
				}}
			>
				<DrawerTrigger>
					<Hamburger toggled={isOpen} />
				</DrawerTrigger>
				<DrawerContent>
					<div className="mx-auto w-full max-w-sm">
						<Button
							variant={"ghost"}
							onClick={() => {
								setIsOpen(false);
							}}
						>
							<XIcon size={24} />
						</Button>
						<div>
							{pages.map((page) => {
								return (
									<Link to={page.href}>
										<div
											className={`text-black ${
												location.pathname === page.href
													? "text-2xl font-bold"
													: "text-2xl"
											}`}
										>
											{location.pathname === page.href
												? "-"
												: ""}
											{page.name}
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
