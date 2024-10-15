import {useAppStore} from "@/AppState";
import {useMapEvents} from "react-leaflet";
import {MarkerDataType} from "@/types/marker";
import {MapMarker} from "./MapMarker";

export default function MapMarkers() {
	const appState = useAppStore();

	const map = useMapEvents({
		/**
		 * Add a new marker when user clicks on the map
		 * @param e
		 * @returns
		 */
		click(e) {
			if (appState.mapState !== "add_marker") {
				return;
			}
			// Add new marker
			const newMarker = {
				id: appState.markers.length,
				lat: e.latlng.lat,
				lng: e.latlng.lng,
			};
			appState.setMarkers([...appState.markers, newMarker]);
			appState.setCurrentMarker(newMarker);
			appState.setMapState("idle");
		},
	});

	/**
	 * Update the marker when user drags it to a new location
	 * @param newMarker - updated marker object
	 */
	const updateMarker = (newMarker: MarkerDataType) => {
		// get the index of the marker
		// update the marker
		// update the state
		const markerIndex = appState.markers.findIndex((marker) => marker.id === newMarker.id);
		appState.markers[markerIndex] = newMarker;
		appState.setMarkers([...appState.markers]);
		// check if the current marker is the one being updated
		if (appState.currentMarker?.id === newMarker.id) {
			appState.setCurrentMarker(newMarker);
		}
	};

	return (
		<>
			{appState.markers.map((marker) => (
				<MapMarker
					key={marker.id}
					marker={marker}
					selected={appState.currentMarker?.id === marker.id}
					setSelected={() => appState.setCurrentMarker(marker)}
					updateMarker={updateMarker}
				/>
			))}
		</>
	);
}
