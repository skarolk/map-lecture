document.addEventListener("DOMContentLoaded", () => {
  const tonyStarkContainer = document.getElementById("tony-stark-container");
  const transformTonyStark = document.getElementById("transform-tony-stark");
  const bruceBannerContainer = document.getElementById(
    "bruce-banner-container"
  );

  const tonyStark = [
    {
      name: "Tony Stark",
      image:
        "https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg",
    },
    {
      name: "Hulk Buster",
      image:
        "https://media.wired.com/photos/59325c9d5c4fbd732b5520e7/191:100/pass/hulkbuster-ft.jpg",
    },
  ];

  const bruceBanner = [
    {
      name: "Bruce Banner",
      image: "https://i.ytimg.com/vi/Igp-76zAlHo/maxresdefault.jpg",
    },
    {
      name: "Hulk",
      image:
        "https://media.wired.com/photos/59325c9d5c4fbd732b5520e7/191:100/pass/hulkbuster-ft.jpg",
    },
  ];

  tonyStarkContainer.innerHTML = renderTonyStark(tonyStark[0]);
  bruceBannerContainer.innerHTML = renderBruceBanner(bruceBanner[0]);

  transformTonyStark.addEventListener("click", (e) => {
    // our original tony stark array
    console.log("original array", tonyStark);
    const tonyImage = document.getElementById("tonyImage");
    const tonyName = document.getElementById("tonyName");

    // the transformed tony stark array
    const transformedTony = tonyStark.map((tony) => {
      return tonyName.innerHTML === "Tony Stark" ? tonyStark[1] : tonyStark[0];
    });
    console.log("transformed array", transformedTony);
    console.log("original array", tonyStark);

    // rendering tony stark with map
    tonyImage.src = tonyStark.map((tony) => {
      return tonyName.innerHTML === "Tony Stark" ? tonyStark[1] : tonyStark[0];
    })[0].image;
    tonyName.innerHTML = `${
      tonyStark.map((tony) => {
        return tonyName.innerHTML === "Tony Stark"
          ? tonyStark[1]
          : tonyStark[0];
      })[0].name
    }`;
  });
});

function renderTonyStark(char) {
  return `<center><div><h1 id="tonyName" class="center-text">${char.name}</h1><img id="tonyImage" style="max-width:40%;" src=${char.image}></div></center>`;
}

function renderBruceBanner(char) {
  return `<center><div><h1 id="bruceName" class="center-text">${char.name}</h1><img id="bruceImage" style="max-width:40%;" src=${char.image}></div></center>`;
}
