//Click something on the UI before swiping

export async function swipeRight() {
  const startPercentage = 90;
  const endPercentage = 10;
  const anchorPercentage = 50;

  const { height, width } = await driver.getWindowSize();
  const anchor = (height * anchorPercentage) / 100;
  const startPoint = (width * startPercentage) / 100;
  const endPoint = (width * endPercentage) / 100;

  await driver.touchPerform([
    {
      action: "press",
      options: {
        x: startPoint,
        y: anchor,
      },
    },
    {
      action: "wait",
      options: {
        ms: 100,
      },
    },
    {
      action: "moveTo",
      options: {
        x: endPoint,
        y: anchor,
      },
    },
    {
      action: "release",
      options: {},
    },
  ]);
}
