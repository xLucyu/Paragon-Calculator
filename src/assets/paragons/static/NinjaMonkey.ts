import { ParagonImages } from "../images";

export const NinjaMonkey = {
    name: "Ascended Shadow",
    price: 500000,
    image: ParagonImages.ninja,
    attacks: [
        {
            name: "Shadow Shurikens",
            base: 32,
            camo: 38,
            boss: 64,
            eliteBoss: 128,
            pierce: 4,
            speed: 0.22
        },
        {
            name: "Flash Bomb",
            base: 96,
            camo: 116,
            boss: 192,
            eliteBoss: 384,
            pierce: 50,
            speed: 1.5
        },
        {
            name: "Blue Shurikens",
            base: 80,
            camo: 96,
            boss: 160,
            eliteBoss: 320,
            pierce: 20
        },
        {
            name: "Sticky Bomb",
            base: 16000,
            camo: 19200,
            boss: 48000,
            eliteBoss: 96000,
            pierce: 1,
            speed: 5.5
        }
    ]
}
