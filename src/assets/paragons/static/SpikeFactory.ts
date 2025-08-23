import { ParagonImages } from "../images";

export const SpikeFactory = {
    name: "Mega Massive Munitions Factory",
    price: 800000,
    image: ParagonImages.spike,
    attacks: [
        {
            name: "Carpet of Spikes",
            base: 30,
            moab: 130,
            boss: 930,
            eliteBoss: 1860,
            pierce: -1
        },
        {
            name: "Spike Storming Mines",
            base: 70,
            moab: 210,
            pierce: 100,
            cooldown: 10
        },
        {
            name: "Mine Explosion",
            base: 80,
            fortified: 100,
            ceramic: 140,
            eliteBoss: 160,
            pierce: 30
        },
        {
            name: "Mini Spike",
            base: 20,
            moab: 200,
            boss: 450,
            eliteBoss: 900,
            pierce: 10
        },
        {
            name: "Controlled Burst",
            cooldown: 10,
            speed: 300
        },
        {
            name: "Spikeageddon",
            cooldown: 75
        },
        {
            name: "Explosion",
            base: 10000,
            fortified: 15000, 
            moab: 35000,
            eliteBoss: 70000,
            pierce: 120,
        },
        {
            name: "Spikeageddon Spike-Balls",
            base: 100,
            fortified: 150,
            moab: 350,
            eliteBoss: 700,
            pierce: 10
        }
    ]
}
