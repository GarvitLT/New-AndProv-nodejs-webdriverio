// describe("Proverbial APK", () => {
//   it("Changes color", async () => {
//     var color = await $("id=color");
//     await color.waitForDisplayed({ timeout: 30000 });
//     await color.click();
//     await color.click();
//   });

//   it("Changes text", async () => {
//     var text = await $("id=Text");
//     await text.waitForDisplayed({ timeout: 30000 });
//     await text.click();
//   });

//   it("Toast", async () => {
//     var toast = await $("id=toast");
//     await toast.waitForDisplayed({ timeout: 30000 });
//     await toast.click();
//   });

//   it("Notification", async () => {
//     var nf = await $("id=notification");
//     await nf.waitForDisplayed({ timeout: 30000 });
//     await nf.click();
//   });

//   it("Geolocation", async () => {
//     var geo = await $("id=geoLocation");
//     await geo.waitForDisplayed({ timeout: 30000 });
//     await geo.click();

//     driver.back();
//   });

//   it("SpeedTest", async () => {
//     var st = await $("id=speedTest");
//     await st.waitForDisplayed({ timeout: 30000 });
//     await st.click();

//     await browser.pause(10000);
//     driver.back();
//   });

//   // it("Browser", async () => {
//   //   var browser = await $("id=Browser");
//   //   await browser.waitForDisplayed({ timeout: 30000 });
//   //   await browser.click();

//   //   let el7 = await $("id=url");
//   //   await el7.click();
//   //   await el7.setValue("https://www.lambdatest.com/");
//   //   driver.back();
//   // });
// });

//////////////////////////////////////////////////////

describe("Proverbial APK", () => {
  // it("Changes color", async () => {
  //   var color = await $("id=color");
  //   await color.waitForDisplayed({ timeout: 30000 });
  //   await color.click();
  //   await color.click();
  // });

  it("readMoreButton", async () => {
    var readMoreButton = await $("id=readMoreButton");
    await readMoreButton.waitForDisplayed({ timeout: 30000 });
    await readMoreButton.click();
  });

  // it("Clicks browser", async () => {
  //   var browser = await $("XPath=//android.widget.FrameLayout[@content-desc=\"Browser\"]/android.widget.FrameLayout/android.widget.ImageView");
  //   await browser.waitForDisplayed({ timeout: 30000 });
  //   await browser.click();
  // });

  it("Clicks Home", async () => {
    var home = await $("accessiblityid=Home");
    await home.waitForDisplayed({ timeout: 30000 });
    await home.click();
  });

  it("Shows Location", async() => {
    var location = await $("AccessiblityId=Location");
    await location.waitForDisplayed({timeout: 3000});
    await location.click();
  });

  // it("Toast", async () => {
  //   var toast = await $("id=toast");
  //   await toast.waitForDisplayed({ timeout: 30000 });
  //   await toast.click();
  // });

  // it("Notification", async () => {
  //   var nf = await $("id=notification");
  //   await nf.waitForDisplayed({ timeout: 30000 });
  //   await nf.click();
  // });

  // it("Geolocation", async () => {
  //   var geo = await $("id=geoLocation");
  //   await geo.waitForDisplayed({ timeout: 30000 });
  //   await geo.click();

    driver.back();
  });

  // it("SpeedTest", async () => {
  //   var st = await $("id=speedTest");
  //   await st.waitForDisplayed({ timeout: 30000 });
  //   await st.click();

  //   await browser.pause(10000);
  //   driver.back();
  // });

  // -----
  // it("Browser", async () => {
  //   var browser = await $("id=Browser");
  //   await browser.waitForDisplayed({ timeout: 30000 });
  //   await browser.click();

  //   let el7 = await $("id=url");
  //   await el7.click();
  //   await el7.setValue("https://www.lambdatest.com/");
  //   driver.back();
  // });
// });
