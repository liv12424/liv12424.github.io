$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0, 150, 125, 10);
    createPlatform(650, 450, 100, 10);
    createPlatform(850, 450, 100, 10);
    createPlatform(250, 0, 10, 400);
    createPlatform(130, 250, 125, 10);
    createPlatform(0, 350, 125, 10);
    createPlatform(0, 525, 400, 10);
    createPlatform(450, 450, 100, 10);
    createPlatform(1050, 450, 100, 10);
    createPlatform(400, 650, 100, 10);

    // TODO 3 - Create Collectables
    createCollectable("database", 330, 100);
    createCollectable("diamond", 480, 100);
    createCollectable("grace", 680, 100);
    createCollectable("kennedi", 880, 100);
    createCollectable("max", 1080, 100);
    // TODO 4 - Create Cannons
    createCannon("top", 500, 100);
    createCannon("right", 300, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
