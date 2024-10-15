import {useAppStore} from "@/AppState";

export function Sidebar() {
	const appState = useAppStore();

	return (
		<div className="min-h-screen w-96">
			<h2>Current Marker</h2>
			{appState.currentMarker && (
				<div>
					<p>Latitude: {appState.currentMarker.lat}</p>
					<p>Longitude: {appState.currentMarker.lng}</p>
				</div>
			)}
			<button
				className="p-2 text-white bg-blue-500 rounded-md"
				onClick={() => appState.setMapState("add_marker")}
				aria-enabled={appState.mapState === "add_marker"}
			>
				{appState.mapState === "add_marker" ? "Stop" : "Add"} adding markers
			</button>

			{/* remove current selected marker */}
			<button
				className="p-2 text-white bg-red-500 rounded-md"
				onClick={() => {
					const newMarkers = appState.markers.filter(
						(marker) => marker.id !== appState.currentMarker?.id
					);
					appState.setMarkers(newMarkers);
					appState.setCurrentMarker(null);
				}}
			>
				Remove current marker
			</button>
		</div>
	);
}
