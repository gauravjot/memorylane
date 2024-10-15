import {Sidebar} from "@/features/Sidebar";
import WorldMap from "@/features/WorldMap";

export default function Home() {
	return (
		<>
			<div className="flex justify-center w-screen h-screen">
				<Sidebar />
				<WorldMap />
			</div>
		</>
	);
}
