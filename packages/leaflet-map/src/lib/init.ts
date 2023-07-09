import L from "leaflet"
import { vectorBasemapLayer } from "esri-leaflet-vector"

export const init = (element: HTMLDivElement) => {
    const map = L.map(element, {
        minZoom: 2
      })
      map.setView([34.02, -118.805], 13);

      const apiKey = "AAPK4623534d398c44ac868dc977ca0460cdHwFguD2jZHfSRhYk_UyJ0GbqN91NWPMtcT1eY4gSY6XrXXNf-8voS4HRJChOje7L";

      const basemapEnum = "ArcGIS:Streets";

      const layer = vectorBasemapLayer(basemapEnum, {
        apiKey: apiKey
      })

      map.addLayer(layer)

      map.on("click", (e) => {
        console.log(e.latlng.lat)
        console.log(e.latlng.lng)
      })

      return map
}