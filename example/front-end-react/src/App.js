import React, { Component } from "react";
import { HalResource } from "@dxc-technology/halstack-client";

import "./App.css";

class App extends Component {
  state = { res: null };

  componentDidMount() {
    const res = HalResource({ body: resource });
    this.setState({ res });
  }
  render() {
    return <div className="App">{JSON.stringify(this.state.res, 4)}</div>;
  }
}

const resource = {
  _count: "500+",
  _links: {
    next: {
      href:
        "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers?_start=21&_num=20&_inquiry=cs_contract_proposition"
    },
    item: [
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id:
            "Association TNR-COLL-MVTF-CAS03-ORG-SOUSCR_630 - ORGN0000668 - 75003",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "TNR-COLL-MVTF-CAS03-ORG-SOUSCR_630",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id:
            "RCLP0000178, Insured Mr Juliette TNR-COLL-MVTF-CAS03-SALARIE-PREV_526 - from 01/12/2010 to 99/99/9999",
          contract$proposal_number: "RCLP0000178",
          contract$number: "RCLP0000178",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2010-12-01"
        },
        title:
          "RP_COLL/RCLP0000178 : Association TNR-COLL-MVTF-CAS03-ORG-SOUSCR_630 - Transferred - Effective on 01/12/2010",
        name:
          "RP_COLL/RCLP0000178 : Association TNR-COLL-MVTF-CAS03-ORG-SOUSCR_630 - Transferred - Effective on 01/12/2010",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb6AXoV"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: "Association COLL 1.1 - ORGN0000002 - 75006",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "COLL 1.1",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "RCLP0000001",
          contract$number: "RCLP0000001",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2010-04-13"
        },
        title:
          "RP_COLL/RCLP0000001 : Association COLL 1.1 - Transferred - Effective on 13/04/2010",
        name:
          "RP_COLL/RCLP0000001 : Association COLL 1.1 - Transferred - Effective on 13/04/2010",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67OxB"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000003",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-CAPITAL-INVAL-CAS02_158 - PRSN0000005 -  Born On 01/01/1945 - 92100",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-CAPITAL-INVAL-CAS02_158",
          membership$display_id:
            "RIDP0000001, Main Insured  Mrs Assuree TNR-CAPITAL-INVAL-CAS02_158 - from 15/02/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000001",
          contract$number: "RIDP0000001",
          contract$renewal_date: "2020-02-15",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-02-15"
        },
        title:
          "RP_IND/RIDP0000001 : Mr Souscripteur TNR-CAPITAL-INVAL-CAS02_158 - Transferred - Effective on 15/02/2000",
        name:
          "RP_IND/RIDP0000001 : Mr Souscripteur TNR-CAPITAL-INVAL-CAS02_158 - Transferred - Effective on 15/02/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67OQl"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000009",
          organization$display_id: "Ltd. TEST 178680 - ORGN0000304 - 75015",
          person$display_id: null,
          contract$proposition_status: "to_transfer",
          organization$legal_name: "TEST 178680",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "?",
          contract$number: "?",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-01-01"
        },
        title:
          "RP_COLL/? : Ltd. TEST 178680 - To Transfer - Effective on 01/01/2000",
        name:
          "RP_COLL/? : Ltd. TEST 178680 - To Transfer - Effective on 01/01/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb6AV6H"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id:
            "Association COLL TEST - ORGN0000648 - 75006",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "COLL TEST",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "RCLP0000166",
          contract$number: "RCLP0000166",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-01-01"
        },
        title:
          "RP_COLL/RCLP0000166 : Association COLL TEST - Transferred - Effective on 01/01/2000",
        name:
          "RP_COLL/RCLP0000166 : Association COLL TEST - Transferred - Effective on 01/01/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb6AQGH"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-L99-CAS05_121 - PRSN0000090 -  Born On 10/06/1935 - 94100",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-L99-CAS05_121",
          membership$display_id:
            "RIDP0000002, Main Insured  Mrs Assuree TNR-L99-CAS05_121 - from 20/03/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000002",
          contract$number: "RIDP0000002",
          contract$renewal_date: "2020-03-20",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-03-20"
        },
        title:
          "RP_IND/RIDP0000002 : Mr Souscripteur TNR-L99-CAS05_121 - Transferred - Effective on 20/03/2000",
        name:
          "RP_IND/RIDP0000002 : Mr Souscripteur TNR-L99-CAS05_121 - Transferred - Effective on 20/03/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67W8B"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000005",
          organization$display_id: null,
          person$display_id:
            "Mr Jean TNR-EMPRUNTEUR-CAS01_413 - PRSN0005009 -  Born On 18/04/1968 - 75011",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_MORTGAGE",
          person$last_name: "TNR-EMPRUNTEUR-CAS01_413",
          membership$display_id:
            "RMRP0000133, Main Insured  Mr Jean TNR-EMPRUNTEUR-CAS01_413 - from 15/10/2002 to 99/99/9999",
          contract$proposal_number: "RMRP0000133",
          contract$number: "RMRP0000133",
          contract$renewal_date: "2019-10-15",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Jean",
          contract$marketing_product_number: "RP_MORTGAGE",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2002-10-15"
        },
        title:
          "RP_MORTGAGE/RMRP0000133 : Mr Jean TNR-EMPRUNTEUR-CAS01_413 - Transferred - Effective on 15/10/2002",
        name:
          "RP_MORTGAGE/RMRP0000133 : Mr Jean TNR-EMPRUNTEUR-CAS01_413 - Transferred - Effective on 15/10/2002",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb6AQcr"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-L99-CAS05_122 - PRSN0000108 -  Born On 10/06/1935 - 94100",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-L99-CAS05_122",
          membership$display_id:
            "RIDP0000003, Main Insured  Mrs Assuree TNR-L99-CAS05_122 - from 20/03/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000003",
          contract$number: "RIDP0000003",
          contract$renewal_date: "2020-03-20",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-03-20"
        },
        title:
          "RP_IND/RIDP0000003 : Mr Souscripteur TNR-L99-CAS05_122 - Transferred - Effective on 20/03/2000",
        name:
          "RP_IND/RIDP0000003 : Mr Souscripteur TNR-L99-CAS05_122 - Transferred - Effective on 20/03/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67XDv"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-L99-CAS05_128 - PRSN0000143 -  Born On 10/06/1935 - 94100",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-L99-CAS05_128",
          membership$display_id:
            "RIDP0000004, Main Insured  Mrs Assuree TNR-L99-CAS05_128 - from 20/03/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000004",
          contract$number: "RIDP0000004",
          contract$renewal_date: "2020-03-20",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-03-20"
        },
        title:
          "RP_IND/RIDP0000004 : Mr Souscripteur TNR-L99-CAS05_128 - Transferred - Effective on 20/03/2000",
        name:
          "RP_IND/RIDP0000004 : Mr Souscripteur TNR-L99-CAS05_128 - Transferred - Effective on 20/03/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67bUR"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id:
            "Association TEST 179729 - ORGN0000005 - 75006",
          person$display_id: null,
          contract$proposition_status: "waiting_acceptance",
          organization$legal_name: "TEST 179729",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id:
            "RCLP0000002, Insured Mr Empl 1 EMPL 1 - from 01/01/2009 to 99/99/9999",
          contract$proposal_number: "RCLP0000002",
          contract$number: "RCLP0000002",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2009-01-01"
        },
        title:
          "RP_COLL/RCLP0000002 : Association TEST 179729 - Waiting Acceptance - Effective on 01/01/2009",
        name:
          "RP_COLL/RCLP0000002 : Association TEST 179729 - Waiting Acceptance - Effective on 01/01/2009",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67ZFj"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: "Association COLL NEW - ORGN0000008 - 75006",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "COLL NEW",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "RCLP0000004",
          contract$number: "RCLP0000004",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-01-01"
        },
        title:
          "RP_COLL/RCLP0000004 : Association COLL NEW - Transferred - Effective on 01/01/2000",
        name:
          "RP_COLL/RCLP0000004 : Association COLL NEW - Transferred - Effective on 01/01/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67hwR"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: null,
          person$display_id:
            "Mr 168347 RPIND3 - PRSN0000171 -  Born On 13/04/1968 - 75001",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "RPIND3",
          membership$display_id:
            "RIDP0000005, Main Insured  Mr 168347 RPIND3 - from 01/02/2005 to 99/99/9999",
          contract$proposal_number: "RIDP0000005",
          contract$number: "RIDP0000005",
          contract$renewal_date: "2020-02-01",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "168347",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2005-02-01"
        },
        title:
          "RP_IND/RIDP0000005 : Mr 168347 RPIND3 - Transferred - Effective on 01/02/2005",
        name:
          "RP_IND/RIDP0000005 : Mr 168347 RPIND3 - Transferred - Effective on 01/02/2005",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67es7"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id:
            "Association COLL TEST 7 - ORGN0000007 - 75004",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "COLL TEST 7",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "RCLP0000003",
          contract$number: "RCLP0000003",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-01-01"
        },
        title:
          "RP_COLL/RCLP0000003 : Association COLL TEST 7 - Transferred - Effective on 01/01/2000",
        name:
          "RP_COLL/RCLP0000003 : Association COLL TEST 7 - Transferred - Effective on 01/01/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67hpz"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000003",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-RENTE-DC-CAS03_117 - PRSN0000285 -  Born On 12/03/1965 - 69100",
          contract$proposition_status: "under_review",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-RENTE-DC-CAS03_117",
          membership$display_id:
            "RIDP0000008, Main Insured  Mrs Assuree TNR-RENTE-DC-CAS03_117 - from 04/03/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000008",
          contract$number: "RIDP0000008",
          contract$renewal_date: "2020-03-04",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-03-04"
        },
        title:
          "RP_IND/RIDP0000008 : Mr Souscripteur TNR-RENTE-DC-CAS03_117 - Under Review - Effective on 04/03/2000",
        name:
          "RP_IND/RIDP0000008 : Mr Souscripteur TNR-RENTE-DC-CAS03_117 - Under Review - Effective on 04/03/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67mpf"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000003",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-RENTE-DC-CAS03_118 - PRSN0000286 -  Born On 12/03/1965 - 69100",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-RENTE-DC-CAS03_118",
          membership$display_id:
            "RIDP0000009, Main Insured  Mrs Assuree TNR-RENTE-DC-CAS03_118 - from 04/03/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000009",
          contract$number: "RIDP0000009",
          contract$renewal_date: "2020-03-04",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-03-04"
        },
        title:
          "RP_IND/RIDP0000009 : Mr Souscripteur TNR-RENTE-DC-CAS03_118 - Transferred - Effective on 04/03/2000",
        name:
          "RP_IND/RIDP0000009 : Mr Souscripteur TNR-RENTE-DC-CAS03_118 - Transferred - Effective on 04/03/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67mst"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000005",
          organization$display_id: null,
          person$display_id:
            "Mr Jean TNR-EMPRUNTEUR-CAS01_412 - PRSN0005008 -  Born On 18/04/1968 - 75011",
          contract$proposition_status: "transferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_MORTGAGE",
          person$last_name: "TNR-EMPRUNTEUR-CAS01_412",
          membership$display_id:
            "RMRP0000132, Main Insured  Mr Jean TNR-EMPRUNTEUR-CAS01_412 - from 15/10/2002 to 99/99/9999",
          contract$proposal_number: "RMRP0000132",
          contract$number: "RMRP0000132",
          contract$renewal_date: "2019-10-15",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Jean",
          contract$marketing_product_number: "RP_MORTGAGE",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2002-10-15"
        },
        title:
          "RP_MORTGAGE/RMRP0000132 : Mr Jean TNR-EMPRUNTEUR-CAS01_412 - Transferred - Effective on 15/10/2002",
        name:
          "RP_MORTGAGE/RMRP0000132 : Mr Jean TNR-EMPRUNTEUR-CAS01_412 - Transferred - Effective on 15/10/2002",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb6AQZd"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id:
            "Association COLL 211429 - ORGN0000657 - 75006",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "COLL 211429",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "RCLP0000170",
          contract$number: "RCLP0000170",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-01-01"
        },
        title:
          "RP_COLL/RCLP0000170 : Association COLL 211429 - Transferred - Effective on 01/01/2000",
        name:
          "RP_COLL/RCLP0000170 : Association COLL 211429 - Transferred - Effective on 01/01/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb6AUTZ"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: null,
          person$display_id:
            "Mr Test1 RP_IND - PRSN0000325 -  Born On 29/03/1983 - 75001",
          contract$proposition_status: "deferred",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "RP_IND",
          membership$display_id:
            "RIDP0000011, Main Insured  Mr Test1 RP_IND - from 25/06/2010 to 99/99/9999",
          contract$proposal_number: "RIDP0000011",
          contract$number: "RIDP0000011",
          contract$renewal_date: "2020-06-25",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Test1",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2010-06-25"
        },
        title:
          "RP_IND/RIDP0000011 : Mr Test1 RP_IND - Deferred - Effective on 25/06/2010",
        name:
          "RP_IND/RIDP0000011 : Mr Test1 RP_IND - Deferred - Effective on 25/06/2010",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67ohn"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000003",
          organization$display_id: null,
          person$display_id:
            "Mr Souscripteur TNR-RENTE-DC-CAS03_116 - PRSN0000284 -  Born On 12/03/1965 - 69100",
          contract$proposition_status: "under_review",
          organization$legal_name: null,
          contract$product_identifier: "RP_IND",
          person$last_name: "TNR-RENTE-DC-CAS03_116",
          membership$display_id:
            "RIDP0000007, Main Insured  Mrs Assuree TNR-RENTE-DC-CAS03_116 - from 04/03/2000 to 99/99/9999",
          contract$proposal_number: "RIDP0000007",
          contract$number: "RIDP0000007",
          contract$renewal_date: "2020-03-04",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: "Souscripteur",
          contract$marketing_product_number: "RP_IND",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2000-03-04"
        },
        title:
          "RP_IND/RIDP0000007 : Mr Souscripteur TNR-RENTE-DC-CAS03_116 - Under Review - Effective on 04/03/2000",
        name:
          "RP_IND/RIDP0000007 : Mr Souscripteur TNR-RENTE-DC-CAS03_116 - Under Review - Effective on 04/03/2000",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67mmR"
      },
      {
        summary: {
          distributor_detail$identifier: "AP00000001",
          organization$display_id: "Association TESTEL - ORGN0000009 - 94000",
          person$display_id: null,
          contract$proposition_status: "transferred",
          organization$legal_name: "TESTEL",
          contract$product_identifier: "RP_COLL",
          person$last_name: null,
          membership$display_id: null,
          contract$membership_list: null,
          contract$proposal_number: "RCLP0000005",
          contract$number: "RCLP0000005",
          contract$renewal_date: "9999-99-99",
          contract$status: "proposition",
          distributor_detail$unique_identifier: null,
          person$first_name: null,
          contract$marketing_product_number: "RP_COLL",
          contract$product_type: "risk_protection",
          insured_risk$display_id: null,
          contract$start_date: "2009-01-01"
        },
        title:
          "RP_COLL/RCLP0000005 : Association TESTEL - Transferred - Effective on 01/01/2009",
        name:
          "RP_COLL/RCLP0000005 : Association TESTEL - Transferred - Effective on 01/01/2009",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers/ID-W4Fb67i6H"
      }
    ],
    self: {
      title: "Offer",
      name: "Offer",
      href: "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers"
    },
    type: [
      {
        href:
          "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/system/factory"
      },
      {
        href:
          "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerCollection"
      }
    ],
    first: {
      href:
        "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers?_num=20&_inquiry=cs_contract_proposition"
    },
    "cscrel:item-type": {
      href:
        "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerDocument"
    },
    up: {
      href:
        "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance"
    }
  },
  _options: {
    title: "Offer collection interactions",
    links: [
      {
        schema: {
          properties: {
            _sort: { items: { type: "string" }, type: "array" },
            contract$proposition_number: { maxLength: 30, type: "string" },
            _embed: { items: { type: "string" }, type: "array" },
            _count: { minimum: 500, type: "integer" },
            _num: { minimum: 20, type: "integer" },
            "contract:single_premium_request_list": {
              type: {
                oneOf: [
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerInitialPaymentCollection",
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerInitialPaymentDocument"
                ]
              }
            },
            _start: { minimum: 0, type: "integer" }
          }
        },
        title: "Search for a Offer with inquiry s_proposition",
        method: "GET",
        rel: "search-s-proposition",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers?_inquiry=s_proposition",
        mediaType: "application/vnd.hal+json"
      },
      {
        schema: {
          properties: {
            _sort: {
              items: {
                enum: [
                  "distributor_detail$unique_identifier",
                  "-distributor_detail$unique_identifier"
                ],
                type: "string"
              },
              type: "array"
            },
            distributor_detail$identifier: { maxLength: 10, type: "string" },
            contract$product_identifier: { maxLength: 11, type: "string" },
            person$last_name: { maxLength: 70, type: "string" },
            trailer$model: { maxLength: 30, type: "string" },
            motorcycle$registration_number: { maxLength: 12, type: "string" },
            person$client_number: { maxLength: 18, type: "string" },
            moped$model: { maxLength: 30, type: "string" },
            postal_address$postal_code: { maxLength: 10, type: "string" },
            trailer$make: { maxLength: 30, type: "string" },
            contract$proposition_number: { maxLength: 30, type: "string" },
            distributor_detail$unique_identifier: {
              maxLength: 10,
              type: "string"
            },
            van$model: { maxLength: 30, type: "string" },
            organization$client_number: { maxLength: 18, type: "string" },
            organization$postal_code: { maxLength: 10, type: "string" },
            moped$make: { maxLength: 30, type: "string" },
            postal_address$city_name: { maxLength: 70, type: "string" },
            postal_address$street_name: { maxLength: 160, type: "string" },
            van$registration_number: { maxLength: 12, type: "string" },
            _embed: { items: { type: "string" }, type: "array" },
            trailer$registration_number: { maxLength: 12, type: "string" },
            motorcycle$model: { maxLength: 30, type: "string" },
            organization$legal_name: { maxLength: 70, type: "string" },
            motorcycle$make: { maxLength: 30, type: "string" },
            "contract:single_premium_request_list": {
              type: {
                oneOf: [
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerInitialPaymentCollection",
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerInitialPaymentDocument"
                ]
              }
            },
            _start: { minimum: 0, type: "integer" },
            postal_address$box_number: { maxLength: 8, type: "string" },
            postal_address$street_number: { maxLength: 15, type: "string" },
            moped$registration_number: { maxLength: 12, type: "string" },
            person$birth_date: { format: "date", type: "string" },
            automobile$model: { maxLength: 30, type: "string" },
            automobile$make: { maxLength: 30, type: "string" },
            _count: { minimum: 500, type: "integer" },
            person$first_name: { maxLength: 40, type: "string" },
            _num: { minimum: 20, type: "integer" },
            van$make: { maxLength: 30, type: "string" },
            automobile$registration_number: { maxLength: 12, type: "string" },
            contract$marketing_product_number: {
              oneOf: [
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS1"] },
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS2"] },
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS3"] },
                { title: "CMU Complementary Scheme", enum: ["HE_CMUC"] },
                { title: "INDIVIDUAL HEALTH", enum: ["HE_IND"] },
                {
                  title: "Relay on Minimal Health Insurance",
                  enum: ["HE_SCMUC"]
                },
                { title: "Guaranteed rate", enum: ["INV_GR"] },
                { title: "Market Capitalization", enum: ["INV_MC"] },
                { title: "Madelin Tax retirement", enum: ["INV_MDLN"] },
                { title: "Unit-Linked Product", enum: ["INV_UL"] },
                { title: "Investment Top of the range", enum: ["INV_UP"] },
                { title: "RP Annuity", enum: ["RP_ANNTY"] },
                { title: "Accidental Death", enum: ["RP_FAM"] },
                { title: "Risk and Protection - Individual", enum: ["RP_IND"] },
                {
                  title: "Risk and Protection - Individual",
                  enum: ["RP_MORTGAGE"]
                },
                { title: "Funeral expenses", enum: ["TL_FUNEX"] },
                {
                  title: "Multi risk multi type risk for individuals",
                  enum: ["PC_MLTRSK"]
                },
                { title: "Pleasure boat", enum: ["PC_BOATING"] },
                { title: "SUPPLEMENTARY PENSION ART83", enum: ["INV_SRP_DLA"] },
                { title: "Traditional Life - Mixed Product", enum: ["TL_END"] },
                {
                  title: "Traditional Life-Tmp.Death or Dcrsng Cptl",
                  enum: ["TL_TP_DEATH"]
                },
                { title: "RP_NEXT1 Open Offer", enum: ["RP_NEXT1"] },
                { title: "RP_NEXT2 Guided Offer", enum: ["RP_NEXT2"] },
                {
                  title: "Craftsmen and tradesmen multiple risk",
                  enum: ["PC_CRFTTRD1"]
                },
                { title: "Notary Cilvil Liability", enum: ["PC_NOTARY"] },
                { title: "WL_NEXT2 Generic WL Offer", enum: ["WL_NEXT2"] },
                { title: "WL_NEXT1 Funeral Expenses", enum: ["WL_NEXT1"] },
                {
                  title: "INV_UP1 Self-select Investment Offer",
                  enum: ["INV_UP1"]
                },
                {
                  title: "INV_UP2 Mandate and Self-select Investment Offer",
                  enum: ["INV_UP2"]
                },
                { title: "WL_NEXT_CTNR long en", enum: ["WL_NEXTC_12"] },
                { title: "WL_NEXTlo_TNR", enum: ["WL_NEXT_37"] }
              ],
              maxLength: 11,
              type: "string"
            },
            contract$start_date: { format: "date", type: "string" },
            organization$trade_name: { maxLength: 70, type: "string" }
          }
        },
        title: "Search for a Offer with inquiry cs_contract_proposition",
        method: "GET",
        rel: "search-cs-contract-proposition",
        href:
          "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers?_inquiry=cs_contract_proposition",
        mediaType: "application/vnd.hal+json"
      },
      {
        schema: {
          properties: {
            _sort: { items: { type: "string" }, type: "array" },
            _embed: { items: { type: "string" }, type: "array" },
            _count: { minimum: 500, type: "integer" },
            contract$product_identifier: { maxLength: 11, type: "string" },
            "contract:membership_list": {
              type: {
                oneOf: [
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerRiskCollection",
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerRiskDocument"
                ]
              }
            },
            "contract:role_list": {
              type: {
                oneOf: [
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerPartyRoleCollection",
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerPartyRoleDocument"
                ]
              }
            },
            _num: { minimum: 20, type: "integer" },
            contract$proposal_number: { maxLength: 30, type: "string" },
            "contract:single_premium_request_list": {
              type: {
                oneOf: [
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerInitialPaymentCollection",
                  "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerInitialPaymentDocument"
                ]
              }
            },
            contract$marketing_product_number: {
              oneOf: [
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS1"] },
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS2"] },
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS3"] },
                { title: "CMU Complementary Scheme", enum: ["HE_CMUC"] },
                { title: "INDIVIDUAL HEALTH", enum: ["HE_IND"] },
                {
                  title: "Relay on Minimal Health Insurance",
                  enum: ["HE_SCMUC"]
                },
                { title: "Guaranteed rate", enum: ["INV_GR"] },
                { title: "Market Capitalization", enum: ["INV_MC"] },
                { title: "Madelin Tax retirement", enum: ["INV_MDLN"] },
                { title: "Unit-Linked Product", enum: ["INV_UL"] },
                { title: "Investment Top of the range", enum: ["INV_UP"] },
                { title: "RP Annuity", enum: ["RP_ANNTY"] },
                { title: "Accidental Death", enum: ["RP_FAM"] },
                { title: "Risk and Protection - Individual", enum: ["RP_IND"] },
                {
                  title: "Risk and Protection - Individual",
                  enum: ["RP_MORTGAGE"]
                },
                { title: "Funeral expenses", enum: ["TL_FUNEX"] },
                {
                  title: "Multi risk multi type risk for individuals",
                  enum: ["PC_MLTRSK"]
                },
                { title: "Pleasure boat", enum: ["PC_BOATING"] },
                { title: "SUPPLEMENTARY PENSION ART83", enum: ["INV_SRP_DLA"] },
                { title: "Traditional Life - Mixed Product", enum: ["TL_END"] },
                {
                  title: "Traditional Life-Tmp.Death or Dcrsng Cptl",
                  enum: ["TL_TP_DEATH"]
                },
                { title: "RP_NEXT1 Open Offer", enum: ["RP_NEXT1"] },
                { title: "RP_NEXT2 Guided Offer", enum: ["RP_NEXT2"] },
                {
                  title: "Craftsmen and tradesmen multiple risk",
                  enum: ["PC_CRFTTRD1"]
                },
                { title: "Notary Cilvil Liability", enum: ["PC_NOTARY"] },
                { title: "WL_NEXT2 Generic WL Offer", enum: ["WL_NEXT2"] },
                { title: "WL_NEXT1 Funeral Expenses", enum: ["WL_NEXT1"] },
                {
                  title: "INV_UP1 Self-select Investment Offer",
                  enum: ["INV_UP1"]
                },
                {
                  title: "INV_UP2 Mandate and Self-select Investment Offer",
                  enum: ["INV_UP2"]
                },
                { title: "WL_NEXT_CTNR long en", enum: ["WL_NEXTC_12"] },
                { title: "WL_NEXTlo_TNR", enum: ["WL_NEXT_37"] }
              ],
              maxLength: 11,
              type: "string"
            },
            contract$number: { maxLength: 30, type: "string" },
            _start: { minimum: 0, type: "integer" },
            contract$start_date: { format: "date", type: "string" }
          }
        },
        title: "Search for a Offer  by criteria",
        method: "GET",
        rel: "search",
        href: "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers",
        mediaType: "application/vnd.hal+json"
      },
      {
        schema: {
          properties: {
            contract$marketing_product_number: {
              oneOf: [
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS1"] },
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS2"] },
                { title: "Aide à la complémentaire santé", enum: ["HE_ACS3"] },
                { title: "CMU Complementary Scheme", enum: ["HE_CMUC"] },
                { title: "INDIVIDUAL HEALTH", enum: ["HE_IND"] },
                {
                  title: "Relay on Minimal Health Insurance",
                  enum: ["HE_SCMUC"]
                },
                { title: "Guaranteed rate", enum: ["INV_GR"] },
                { title: "Market Capitalization", enum: ["INV_MC"] },
                { title: "Madelin Tax retirement", enum: ["INV_MDLN"] },
                { title: "Unit-Linked Product", enum: ["INV_UL"] },
                { title: "Investment Top of the range", enum: ["INV_UP"] },
                { title: "RP Annuity", enum: ["RP_ANNTY"] },
                { title: "Accidental Death", enum: ["RP_FAM"] },
                { title: "Risk and Protection - Individual", enum: ["RP_IND"] },
                {
                  title: "Risk and Protection - Individual",
                  enum: ["RP_MORTGAGE"]
                },
                { title: "Funeral expenses", enum: ["TL_FUNEX"] },
                {
                  title: "Multi risk multi type risk for individuals",
                  enum: ["PC_MLTRSK"]
                },
                { title: "Pleasure boat", enum: ["PC_BOATING"] },
                { title: "SUPPLEMENTARY PENSION ART83", enum: ["INV_SRP_DLA"] },
                { title: "Traditional Life - Mixed Product", enum: ["TL_END"] },
                {
                  title: "Traditional Life-Tmp.Death or Dcrsng Cptl",
                  enum: ["TL_TP_DEATH"]
                },
                { title: "RP_NEXT1 Open Offer", enum: ["RP_NEXT1"] },
                { title: "RP_NEXT2 Guided Offer", enum: ["RP_NEXT2"] },
                {
                  title: "Craftsmen and tradesmen multiple risk",
                  enum: ["PC_CRFTTRD1"]
                },
                { title: "Notary Cilvil Liability", enum: ["PC_NOTARY"] },
                { title: "WL_NEXT2 Generic WL Offer", enum: ["WL_NEXT2"] },
                { title: "WL_NEXT1 Funeral Expenses", enum: ["WL_NEXT1"] },
                {
                  title: "INV_UP1 Self-select Investment Offer",
                  enum: ["INV_UP1"]
                },
                {
                  title: "INV_UP2 Mandate and Self-select Investment Offer",
                  enum: ["INV_UP2"]
                },
                { title: "WL_NEXT_CTNR long en", enum: ["WL_NEXTC_12"] },
                { title: "WL_NEXTlo_TNR", enum: ["WL_NEXT_37"] }
              ],
              maxLength: 11,
              type: "string"
            }
          },
          required: ["contract$marketing_product_number"],
          type: "object"
        },
        title: "Create a Offer",
        method: "POST",
        rel: "create",
        type:
          "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerCollection",
        "cscrel:item-type":
          "https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/insurance/schemas/offers/offerDocument",
        curies: [{ templated: "true", name: "cscrel", href: "/rel/{rel}" }],
        href: "https://api.dxc-dev-aia.hub-1.dev.us.insurance.dxc.com/offers",
        mediaType: "application/json"
      }
    ],
    properties: {
      oneOf: [
        { _count: { pattern: "^\\\\[0-9]+\\\\+$", type: "string" } },
        { _count: { type: "integer" } }
      ],
      _links: {
        properties: {
          item: {
            properties: {
              summary: {
                properties: {
                  distributor_detail$identifier: {
                    maxLength: 10,
                    type: "string"
                  },
                  organization$display_id: { maxLength: 75, type: "string" },
                  person$display_id: { maxLength: 75, type: "string" },
                  contract$proposition_status: {
                    oneOf: [
                      {
                        title: "Deferred",
                        description: "language:en-GB",
                        enum: ["deferred"]
                      },
                      {
                        title: "Not Taken Out",
                        description: "language:en-GB",
                        enum: ["not_taken_out"]
                      },
                      {
                        title: "Rejected",
                        description: "language:en-GB",
                        enum: ["rejected"]
                      },
                      {
                        title: "To Transfer",
                        description: "language:en-GB",
                        enum: ["to_transfer"]
                      },
                      {
                        title: "Transferred",
                        description: "language:en-GB",
                        enum: ["transferred"]
                      },
                      {
                        title: "Under Review",
                        description: "language:en-GB",
                        enum: ["under_review"]
                      },
                      {
                        title: "Waiting Acceptance",
                        description: "language:en-GB",
                        enum: ["waiting_acceptance"]
                      }
                    ],
                    type: "string"
                  },
                  organization$legal_name: { maxLength: 70, type: "string" },
                  contract$product_identifier: {
                    maxLength: 11,
                    type: "string"
                  },
                  person$last_name: { maxLength: 70, type: "string" },
                  membership$display_id: { maxLength: 75, type: "string" },
                  contract$proposal_number: { maxLength: 30, type: "string" },
                  contract$renewal_date: { format: "date", type: "string" },
                  contract$number: { maxLength: 30, type: "string" },
                  contract$status: {
                    oneOf: [
                      {
                        title: "Cancelled",
                        description: "language:en-GB",
                        enum: ["cancelled"]
                      },
                      {
                        title: "Formal Request",
                        description: "language:en-GB",
                        enum: ["formal_request"]
                      },
                      {
                        title: "In Force",
                        description: "language:en-GB",
                        enum: ["in_force"]
                      },
                      {
                        title: "Not issued",
                        description: "language:en-GB",
                        enum: ["not_issued"]
                      },
                      {
                        title: "Not Taken Out",
                        description: "language:en-GB",
                        enum: ["not_taken_out"]
                      },
                      {
                        title: "Not Taken Up",
                        description: "language:en-GB",
                        enum: ["not_taken_up"]
                      },
                      {
                        title: "On Expiry",
                        description: "language:en-GB",
                        enum: ["on_expiry"]
                      },
                      {
                        title: "Paid-up",
                        description: "language:en-GB",
                        enum: ["paid_up"]
                      },
                      {
                        title: "Proposition",
                        description: "language:en-GB",
                        enum: ["proposition"]
                      },
                      {
                        title: "Proposition Rejected",
                        description: "language:en-GB",
                        enum: ["proposition_rejected"]
                      },
                      {
                        title: "Expired",
                        description: "language:en-GB",
                        enum: ["regular_premium"]
                      },
                      {
                        title: "Replaced",
                        description: "language:en-GB",
                        enum: ["replaced"]
                      },
                      {
                        title: "Surrendered",
                        description: "language:en-GB",
                        enum: ["surrender"]
                      },
                      {
                        title: "Suspended",
                        description: "language:en-GB",
                        enum: ["suspended"]
                      },
                      {
                        title: "Transferred",
                        description: "language:en-GB",
                        enum: ["transferred"]
                      },
                      {
                        title: "Unsettled",
                        description: "language:en-GB",
                        enum: ["unsettled"]
                      },
                      {
                        title: "Waiting Certification",
                        description: "language:en-GB",
                        enum: ["waiting_certification"]
                      }
                    ],
                    type: "string"
                  },
                  distributor_detail$unique_identifier: {
                    maxLength: 10,
                    type: "string"
                  },
                  person$first_name: { maxLength: 40, type: "string" },
                  contract$marketing_product_number: {
                    oneOf: [
                      {
                        title: "Aide à la complémentaire santé",
                        enum: ["HE_ACS1"]
                      },
                      {
                        title: "Aide à la complémentaire santé",
                        enum: ["HE_ACS2"]
                      },
                      {
                        title: "Aide à la complémentaire santé",
                        enum: ["HE_ACS3"]
                      },
                      { title: "CMU Complementary Scheme", enum: ["HE_CMUC"] },
                      { title: "INDIVIDUAL HEALTH", enum: ["HE_IND"] },
                      {
                        title: "Relay on Minimal Health Insurance",
                        enum: ["HE_SCMUC"]
                      },
                      { title: "Guaranteed rate", enum: ["INV_GR"] },
                      { title: "Market Capitalization", enum: ["INV_MC"] },
                      { title: "Madelin Tax retirement", enum: ["INV_MDLN"] },
                      { title: "Unit-Linked Product", enum: ["INV_UL"] },
                      {
                        title: "Investment Top of the range",
                        enum: ["INV_UP"]
                      },
                      { title: "RP Annuity", enum: ["RP_ANNTY"] },
                      { title: "Accidental Death", enum: ["RP_FAM"] },
                      {
                        title: "Risk and Protection - Individual",
                        enum: ["RP_IND"]
                      },
                      {
                        title: "Risk and Protection - Individual",
                        enum: ["RP_MORTGAGE"]
                      },
                      { title: "Funeral expenses", enum: ["TL_FUNEX"] },
                      {
                        title: "Multi risk multi type risk for individuals",
                        enum: ["PC_MLTRSK"]
                      },
                      { title: "Pleasure boat", enum: ["PC_BOATING"] },
                      {
                        title: "SUPPLEMENTARY PENSION ART83",
                        enum: ["INV_SRP_DLA"]
                      },
                      {
                        title: "Traditional Life - Mixed Product",
                        enum: ["TL_END"]
                      },
                      {
                        title: "Traditional Life-Tmp.Death or Dcrsng Cptl",
                        enum: ["TL_TP_DEATH"]
                      },
                      { title: "RP_NEXT1 Open Offer", enum: ["RP_NEXT1"] },
                      { title: "RP_NEXT2 Guided Offer", enum: ["RP_NEXT2"] },
                      {
                        title: "Craftsmen and tradesmen multiple risk",
                        enum: ["PC_CRFTTRD1"]
                      },
                      { title: "Notary Cilvil Liability", enum: ["PC_NOTARY"] },
                      {
                        title: "WL_NEXT2 Generic WL Offer",
                        enum: ["WL_NEXT2"]
                      },
                      {
                        title: "WL_NEXT1 Funeral Expenses",
                        enum: ["WL_NEXT1"]
                      },
                      {
                        title: "INV_UP1 Self-select Investment Offer",
                        enum: ["INV_UP1"]
                      },
                      {
                        title:
                          "INV_UP2 Mandate and Self-select Investment Offer",
                        enum: ["INV_UP2"]
                      },
                      { title: "WL_NEXT_CTNR long en", enum: ["WL_NEXTC_12"] },
                      { title: "WL_NEXTlo_TNR", enum: ["WL_NEXT_37"] }
                    ],
                    maxLength: 11,
                    type: "string"
                  },
                  contract$product_type: {
                    oneOf: [
                      {
                        title: "Vehicles",
                        description: "language:en-GB",
                        enum: ["auto"]
                      },
                      {
                        title: "Health",
                        description: "language:en-GB",
                        enum: ["health"]
                      },
                      {
                        title: "Life",
                        description: "language:en-GB",
                        enum: ["life"]
                      },
                      {
                        title: "Others",
                        description: "language:en-GB",
                        enum: ["miscellaneous"]
                      },
                      {
                        title: "Multi-risks",
                        description: "language:en-GB",
                        enum: ["multi_risk"]
                      },
                      {
                        title: "Pension",
                        description: "language:en-GB",
                        enum: ["pension"]
                      },
                      {
                        title: "Residential",
                        description: "language:en-GB",
                        enum: ["property"]
                      },
                      {
                        title: "Term Insurance",
                        description: "language:en-GB",
                        enum: ["risk_protection"]
                      },
                      {
                        title: "Savings",
                        description: "language:en-GB",
                        enum: ["savings"]
                      },
                      {
                        title: "Standard",
                        description: "language:en-GB",
                        enum: ["standard"]
                      }
                    ],
                    type: "string"
                  },
                  insured_risk$display_id: { maxLength: 75, type: "string" },
                  contract$start_date: { format: "date", type: "string" }
                },
                type: "object"
              }
            },
            type: "object"
          }
        },
        type: "object"
      }
    }
  }
};

export default App;
