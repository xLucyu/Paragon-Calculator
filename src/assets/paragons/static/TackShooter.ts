import { ParagonImages } from "../images";

export const TackShooter = {
    name: "Crucible of Steel and Flame",
    price: 200000,
    image: ParagonImages.tack,
    attacks: [
        {
            name: "Blade",
            base: 20,
            boss: 50,
            eliteBoss: 100,
            pierce: 5,
            speed: 0.0325
        },
        {
            name: "Tack",
            base: 10,
            boss: 30,
            eliteBoss: 60,
            pierce: 3
        },
        {
            name: "Giant Meteor",
            base: 50000,
            eliteBoss: 100000,
            pierce: 500,
            cooldown: 90
        },
        {
            name: "Maelstrom",
            base: 250,
            boss: 500,
            eliteBoss: 1000,
            pierce: 60,
            speed: 1,
            cooldown: 20
        }
    ]
}
