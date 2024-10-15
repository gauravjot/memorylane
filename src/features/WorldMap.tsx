import {MapContainer, TileLayer} from "react-leaflet";
import MapMarkers from "./Markers/AllMapMarkers";

export default function WorldMap() {
	return (
		<div className="relative size-full">
			<MapContainer center={[0, 0]} zoom={2} minZoom={1.5} scrollWheelZoom={true} touchZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MapMarkers />
			</MapContainer>
		</div>
	);
}
