import {create} from "zustand";
import {devtools, persist} from "zustand/middleware"; // required for devtools typing
import {MarkerDataType} from "./types/marker";

type MapState = "idle" | "add_marker";

interface AppState {
	// current map state, i.e. the action user is performing on the map
	mapState: MapState;
	setMapState: (state: MapState) => void;
	// current marker selected by user
	currentMarker: MarkerDataType | null;
	setCurrentMarker: (marker: MarkerDataType | null) => void;
	// all markers
	markers: MarkerDataType[];
	setMarkers: (markers: MarkerDataType[]) => void;
}

export const useAppStore = create<AppState>()(
	devtools(
		persist(
			(set) => ({
				currentMarker: null,
				setCurrentMarker: (marker) => set({currentMarker: marker}),
				markers: [],
				setMarkers: (markers) => set({markers}),
				mapState: "idle",
				setMapState: (state) => set({mapState: state}),
			}),
			{
				name: "current-appstate-storage",
			}
		)
	)
);
