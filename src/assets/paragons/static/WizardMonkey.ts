import { ParagonImages } from "../images";

export const WizardMonkey = {
    name: "Magus Perfectus",
    price: 750000,
    image: ParagonImages.wizard,
    attacks: [
        {
            name: "Drain Beam",
            base: 100,
            eliteBoss: 200,
            pierce: 1,
            speed: 0.05
        },
        {
            name: "Arcane Spike",
            base: 100,
            moab: 400,
            boss: 550,
            eliteBoss: 1100,
            pierce: 25,
            speed: 0.275
        },
        {
            name: "Zombie Bloons",
            base: 150,
            boss: 300,
            eliteBoss: 600,
            pierce: 50,
            speed: 0,
        },
        {
            name: "Dark Phoenix Flame",
            base: 200,
            boss: 250,
            eliteBoss: 500,
            pierce: 100,
            speed: 0.2
        },
        {
            name: "Dark Phoenix Fireballs",
            base: 400,
            boss: 800,
            eliteBoss: 1600,
            pierce: 100,
            speed: 0.2
        },
        {
            name: "Phoenix Explosion",
            cooldown: 40,
        },
        {
            name: "Explosion Burn",
            base: 2500,
            eliteBoss: 5000,
            pierce: 1,
            speed: 0.5
        },
        {
            name: "BFB",
            base: 700,
            eliteBoss: 1400,
            pierce: 50
        },
        {
            name: "ZOMG",
            base: 4000,
            boss: 12000,
            eliteBoss: 24000,
            pierce: 200
        },
        {
            name: "Arcane Metamorphosis",
            cooldown: 120,
        },
        {
            name: "FlameThrower",
            base: 500,
            boss: 1500,
            eliteBoss: 3000,
            pierce: 100,
            speed: 0.5
        },
        {
            name: "Wall of Fire",
            base: 25,
            eliteBoss: 50,
            pierce: 60,
            speed: 0.1
        }
    ]
}
