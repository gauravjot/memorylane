import data from "@/assets/worldmap_svg.json";

export default function WorldMap() {
	return (
		<div className="relative w-screen h-screen bg-zinc-300">
			<svg
				id="worldmap"
				preserveAspectRatio="xMidYMid meet"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1010 666"
				className="w-screen h-screen"
			>
				{data.map((d) => (
					<>
						<path
							onClick={() => {
								alert(d.title);
							}}
							d={d.d}
							id={d.id}
							className="transition-colors fill-zinc-500 hover:fill-zinc-400"
						>
							<title>{d.title}</title>
						</path>
					</>
				))}
			</svg>
			<div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50">
				<h1 className="text-2xl font-bold">World Map</h1>
				<p className="text-sm">Click on a country to see its name.</p>
				<p>Zoom controls</p>
				<button className="p-2 mx-2 border" onClick={() => {}}>
					+
				</button>
				<button onClick={() => {}}>-</button>
			</div>
		</div>
	);
}
