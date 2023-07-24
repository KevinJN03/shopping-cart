import img90 from "../../assets/product Images/90S VINTAGE LOGO SUNGLASSES/1.avif";
import img901 from "../../assets/product Images/90S VINTAGE LOGO SUNGLASSES/2.avif";
import img902 from "../../assets/product Images/90S VINTAGE LOGO SUNGLASSES/3.avif";
import imgdior from "../../assets/product Images/Dior 3/1.avif";
import imgdior1 from "../../assets/product Images/Dior 3/2.avif";
import imgdior2 from "../../assets/product Images/Dior 3/3.avif";
import DIORHIGHLIGHT from "../../assets/product Images/DIORHIGHLIGHT S1I/1.avif";
import DIORHIGHLIGHT1 from "../../assets/product Images/DIORHIGHLIGHT S1I/2.avif";
import DIORHIGHLIGHT2 from "../../assets/product Images/DIORHIGHLIGHT S1I/3.avif";

import DIORMIDNIGHT from "../../assets/product Images/DIORMIDNIGHT S1I/1.avif";
import DIORMIDNIGHT1 from "../../assets/product Images/DIORMIDNIGHT S1I/2.avif";
import DIORMIDNIGHT2 from "../../assets/product Images/DIORMIDNIGHT S1I/3.avif";
import { v4 as uuidv4} from "uuid"


const product = [
  {
    name: "90S VINTAGE LOGO SUNGLASSES",
    description:
      "A squared shape, these sunglasses have acetate frames and a tonal, openwork, vintage-inspired Versace logo engraved at the temples.",
    detail: [
      "'90s Vintage Logo",
      "Frame colour: Black",
      "Temple colour: Black",
      "Lens colour: Dark gray",
    ],
    image1: img90,
    image2: img901,
    image3: img902,
    price: 243,
    item: "O4430U-OGB18753_RTU_TU_ONUL__",
    id: 1
  },

  {
    name: "DIORSIGNATURE B7I",
    description:
      "A squared shape, these sunglasses have acetate frames and a tonal, openwork, vintage-inspired Versace logo engraved at the temples.",
    detail: [
      "'90s Vintage Logo",
      "Frame colour: Black",
      "Temple colour: Black",
      "Lens colour: Dark gray",
    ],
    image1: imgdior,
    image2: imgdior1,
    image3: imgdior2,
    price: 440,
    item: "DSGTB7IXR_10A1",
    id: 2
  },
  {
    name: "DIORHIGHLIGHT S1I",
    description:
      "The DiorSignature B7I sunglasses enhance the House's iconic line with an elegant low butterfly style. The ultra-thin and lightweight black acetate frame reveals temples embellished with the Christian Dior Paris signature and gold-finish metal lines that extend toward the lenses. Completed by gray gradient lenses, the new essential style will elevate all looks with a couture touch.",
    detail: [
      "'90s Vintage Logo",
      "Frame colour: Black",
      "Temple colour: Black",
      "Lens colour: Dark gray",
    ],
    image1: DIORHIGHLIGHT,
    image2: DIORHIGHLIGHT1,
    image3: DIORHIGHLIGHT2,
    price: 450,
    item: "DSGTB7IXR_10A1",
    id: uuidv4(),
  },
  {
    name: "DIORHIGHLIGHT S1I",
    description:
      "The DiorMidnight S1I sunglasses are part of a sleek line. The square frame in black and light brown tortoiseshell-effect acetate showcases a play on volume in the front as well as on the Christian Dior temples, while blue lenses complete the design. The sunglasses will lend an elegant touch to any look.",
    detail: [
      "'90s Vintage Logo",
      "Frame colour: Black",
      "Temple colour: Black",
      "Lens colour: Dark gray",
    ],
    image1:DIORMIDNIGHT,
    image2: DIORMIDNIGHT1,
    image3: DIORMIDNIGHT2,
    price: 450,
    item: "DMNGS1IXR_26B0",
    id: uuidv4()
  }
];

export default product;
