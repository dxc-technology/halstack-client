import { Component, OnInit } from "@angular/core";
import { halNavigator } from "@diaas/api-sdk";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.scss"]
})
export class QuoteComponent implements OnInit {
  private prospectURL: string;
  private headers: any;
  public prospectResource: string;
  public addressResponse: string;

  constructor() {
    this.prospectURL =
      "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5c7747afd601800008eafc5d";
    this.headers = {
      "x-api-key": "bgFcRlFgYm2sqUHHqX8OpakeLdrRiGaP6jmluiqP",
      profileid: 12345,
      userName: "Agent@csc.com"
    };
  }

  ngOnInit(): void {
    const prospect = halNavigator({ url: this.prospectURL, headers: this.headers });
    const address = prospect
      .fetchLink("prospect:prospect-address-list")
      .fetchItemByNumber(1);

    prospect.getHALResource(prospectResource => {
      this.prospectResource = JSON.stringify(
        prospectResource.resourceRepresentation
      );
    });

    address.getHALResource(addressResponse => {
      this.addressResponse = JSON.stringify(
        addressResponse.resourceRepresentation
      );
    });
  }
}
