//Click something on the UI before swiping

export async function swipeDown() {
  const startPercentage = 90;
  const endPercentage = 10;
  const anchorPercentage = 50;

  const { height } = await driver.getWindowSize();
  const anchor = (height * anchorPercentage) / 100;
  const startPoint = (height * startPercentage) / 100;
  const endPoint = (height * endPercentage) / 100;

  await driver.touchPerform([
    {
      action: "press",
      options: {
        x: anchor,
        y: startPoint,
      },
    },
    {
      action: "wait",
      options: {
        ms: 1000,
      },
    },
    {
      action: "moveTo",
      options: {
        x: anchor,
        y: endPoint,
      },
    },
    {
      action: "release",
      options: {},
    },
  ]);
}
