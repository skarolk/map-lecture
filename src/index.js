function renderBruceBanner(char) {
  return `<center><div><h1 id="bruceName" class="center-text">${char.name}</h1><img id="bruceImage" style="max-width:40%;" src=${char.image}></div></center>`;
}

function renderTonyStark(char) {
  return `<center><div><h1 id="tonyName" class="center-text">${char.name}</h1><img id="tonyImage" style="max-width:40%;" src=${char.image}></div></center>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const bruceBannerContainer = document.getElementById(
    "bruce-banner-container"
  );
  const transformBruceBanner = document.getElementById(
    "transform-bruce-banner"
  );
  const tonyStarkContainer = document.getElementById("tony-stark-container");
  const transformTonyStark = document.getElementById("transform-tony-stark");

  const bruceBanner = [
    {
      name: "Bruce Banner",
      image: "https://i.ytimg.com/vi/Igp-76zAlHo/maxresdefault.jpg",
    },
    {
      name: "Hulk",
      image:
        "https://www.denofgeek.com/wp-content/uploads/2019/03/incredible-hulk-key-art.jpg?resize=768%2C432",
    },
  ];

  const tonyStark = [
    {
      name: "Tony Stark",
      image:
        "https://img1.looper.com/img/gallery/audi-may-have-spoiled-who-saves-tony-stark-in-avengers-4/intro-1547480934.jpg",
    },
    {
      name: "Hulk Buster",
      image:
        "https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/wire/legacy/avengers-age-of-ultron-trailer-hulkbuster.jpg",
    },
  ];

  bruceBannerContainer.innerHTML = renderBruceBanner(bruceBanner[0]);
  tonyStarkContainer.innerHTML = renderTonyStark(tonyStark[0]);

  transformBruceBanner.addEventListener("click", (e) => {
    // our primary bruce banner array
    console.log("primary bruce banner array", bruceBanner);
    const bruceImage = document.getElementById("bruceImage");
    const bruceName = document.getElementById("bruceName");

    // UNDEFINED: the transformed bruce banner array
    const transformedBruce = bruceBanner.forEach(
      (bruce, index, bruceBanner) => {
        bruceName.innerHTML === "Bruce Banner"
          ? (bruceBanner[index] = bruceBanner[1])
          : (bruceBanner[index] = bruceBanner[0]);
      }
    );
    console.log("forEach transformed bruce banner array", transformedBruce);
    console.log("primary bruce banner array", bruceBanner);

    // ERROR: can't string methods when rendering bruce banner with forEach
    // bruceImage.src = bruceBanner.forEach((bruce) => {
    //   return bruceName.innerHTML === "Bruce Banner"
    //     ? bruceBanner[1]
    //     : bruceBanner[0];
    // })[0].image;
    // bruceName.innerHTML = `${
    //   bruceBanner.forEach((bruce) => {
    //     return bruceName.innerHTML === "Bruce Banner"
    //       ? bruceBanner[1]
    //       : bruceBanner[0];
    //   })[0].name
    // }`;

    bruceImage.src = bruceBanner[0].image;
    bruceName.innerHTML = `${bruceBanner[0].name}`;
  });

  transformTonyStark.addEventListener("click", (e) => {
    // our primary tony stark array
    console.log("primary tony stark array", tonyStark);
    const tonyImage = document.getElementById("tonyImage");
    const tonyName = document.getElementById("tonyName");

    // the transformed tony stark array
    const transformedTony = tonyStark.map((tony) => {
      return tonyName.innerHTML === "Tony Stark" ? tonyStark[1] : tonyStark[0];
    });
    console.log("map transformed tony stark array", transformedTony);
    console.log("primary tony stark array", tonyStark);

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
