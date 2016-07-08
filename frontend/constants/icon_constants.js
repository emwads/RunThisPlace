
module.exports = {
  icons (type) {
    switch (type) {
      case "walk":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:50,w_90/v1467702925/walk-icon_t8aqbt.png';
      case "hike":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:50,w_90/v1467702926/hike-icon_jfremu.png';
      case "run":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:50,w_90/v1467702925/run-icon_mbjr0r.png';
      case "gym":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:50,w_90/v1467702925/gym-icon_xl5oy6.png';
      case "other":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:50,w_90/v1467702925/other-icon_ndjrlb.png';
    }
  }
};
