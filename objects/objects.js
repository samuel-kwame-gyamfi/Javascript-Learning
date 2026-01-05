const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isvisible: true,
  draw: function () {
    console.log("draw");
  },
};

//factory function

function createCircle(radius, location) {
  return {
    radius: radius,
    location: location,
    draw() {},
  };
}
