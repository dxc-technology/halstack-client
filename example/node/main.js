const { halNavigator } = require("@diaas/api-sdk");

const navigator = halNavigator({
  url:
    "https://apig.everest.dxchub.com/evsit/omni-prospect-services/omni/service/prospects",
  headers: { profileid: 12345, userName: "Agent@csc.com" }
});

navigator
  .fetchItemByNumber(1)
  .fetchLink("prospect:prospect-risk")
  .getHALResource(halResource => {
    const actions = halResource.actions;
    const links = halResource.links;
  });
