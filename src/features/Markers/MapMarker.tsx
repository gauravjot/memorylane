import {MarkerDataType} from "@/types/marker";
import {useMemo, useRef} from "react";
import {Marker} from "react-leaflet";

export interface IAppProps {
	// marker object
	marker: MarkerDataType;
	// if the marker is selected by user
	selected: boolean;
	// function to set the marker as selected
	setSelected: () => void;
	// function to update the marker
	updateMarker: (marker: MarkerDataType) => void;
}

export function MapMarker(props: IAppProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const markerRef = useRef<any>(null);
	const eventHandlers = useMemo(
		() => ({
			dragend() {
				const marker = markerRef.current;
				if (marker != null) {
					const coordinates = marker.getLatLng();
					props.updateMarker({
						...props.marker,
						lat: coordinates.lat,
						lng: coordinates.lng,
					});
				}
			},
			click() {
				props.setSelected();
			},
		}),
		[props]
	);

	return (
		<Marker
			ref={markerRef}
			position={[props.marker.lat, props.marker.lng]}
			draggable={true}
			eventHandlers={eventHandlers}
		></Marker>
	);
}
