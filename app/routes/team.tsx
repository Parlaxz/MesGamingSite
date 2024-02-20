import placeHolderAvatar from "~/assets/placeholder_avatar.png";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
export default function Teams() {
	const moe = {
		avatarSrc: placeHolderAvatar,
		name: "Moe",
		role: "Chief Vision Officer",
		desc: "Hi, it's me Moe. I exist for my people; my end game business will be a start-up country in some deserted island.",
	};
	return (
		<>
			<div className="mb-6">
				<h1 className="text-4xl font-bold text-center mb-4">
					Meet the Team
				</h1>
				<div className="flex justify-center">
					<UserPopup member={moe} larger={true} />
				</div>
			</div>
			<div className="grid grid-flow-row grid-cols-3 items-start">
				{members.map((member, index) => {
					return (
						<div key={index} className="flex justify-center">
							<UserPopup member={member} />
						</div>
					);
				})}
			</div>
		</>
	);
}

const UserPopup = ({
	member,
	larger = false,
}: {
	member: {
		avatarSrc: string;
		name: string;
		role: string;
		desc: string;
	};
	larger?: boolean;
}) => {
	return (
		<>
			<Dialog>
				<DialogTrigger>
					<div className="flex flex-col items-center">
						<img
							src={member.avatarSrc}
							className={`${
								larger ? "w-28 h-28" : "w-24 h-24"
							} rounded-full`}
						/>
						<h3 className="text-lg font-semibold text-center">
							{member.name}
						</h3>
						<p className="text-sm text-gray-500 text-center">
							{member.role}
						</p>
					</div>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{member.name}</DialogTitle>
						<DialogDescription>
							<p className="text-sm text-gray-500 text-center">
								{member.role}
							</p>
							<div className="flex justify-center items-center w-full">
								<img
									src={member.avatarSrc}
									className="w-24 h-24 rounded-full "
								/>
							</div>
							{member.desc}
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</>
	);
};
const members = [
	{
		avatarSrc: placeHolderAvatar,
		name: "Mustafa",
		role: "Chief Operations Officer",
		desc: "ME Mustafa, one-man army, you're late, again!",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Saboo7a Rabee",
		role: "Chief Marketing Officer",
		desc: "ME Saboo7a, I'm a living proof that God is creative.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Noor Rabee",
		role: "IT Team Lead",
		desc: "This is Noor, I hate teamwork and people. I prefer to hibernate in my cave.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Mustafa Hashim",
		role: "Logistics Team Lead",
		desc: "This is Mustafa, Budget-Friendly Construction Company. Won't hesitate to put the hammer on your head.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Hasan Bozainy",
		role: "Finance Team Leader",
		desc: "This is Hasan. I receive acknowledgment from colleagues approximately once a month.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Mohamed Hussain",
		role: "Research Team Lead",
		desc: "Take an IQ test before contacting me.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Baraa Ryan",
		role: "PR Assistant",
		desc: "This is Baraa, wise to the point. When I was 10, my hair was fully gray.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Anas Al-Hussainy",
		role: "Community Specialist",
		desc: "This is Anas with an A in the middle. I pretend to love people, but they really do love me.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Yousif Khalid",
		role: "Community Specialist",
		desc: "A troublemaker and also the Commander of MES Riot.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Saad Salim",
		role: "Front Desk",
		desc: "Happy to help with a smile, always!",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Fayez",
		role: "Logistics Assistant",
		desc: "Man of the year. I exist for my family always.",
	},
	{
		avatarSrc: placeHolderAvatar,
		name: "Bashar Khabouri",
		role: "Logistics Assistant",
		desc: "Still the best domino player, even when I'm bad at math.",
	},
];
