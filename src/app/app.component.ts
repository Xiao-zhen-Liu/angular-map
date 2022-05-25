import { Component, EventEmitter, Output } from "@angular/core";
import * as turf from "@turf/turf";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  private sub = new Subscription();
  @Output() Update = new EventEmitter<any>();

  ngOnInit() {
    this.sub.add(
      this.Update.subscribe((res) => {
        this.points = res;
      })
    );
  }

  points: turf.FeatureCollection = { type: "FeatureCollection", features: [] };

  clicked(e) {
    if (e.lngLat) {
      const { lng, lat } = e.lngLat;
      let point = turf.point([lng, lat]);
      console.log(point);
      let fc: turf.FeatureCollection = {
        type: "FeatureCollection",
        features: [...this.points.features, point]
      };
      this.Update.emit(fc);
    }
  }
}
