import { type Variation } from "../typings";
import { type Hitbox, RectangleHitbox, ComplexHitbox } from "../utils/hitbox";
import { type ObjectDefinition, ObjectDefinitions } from "../utils/objectDefinitions";
import { weightedRandom } from "../utils/random";
import { type Vector, v } from "../utils/vector";

interface BuildingObstacle {
    id: string
    position: Vector
    rotation?: number
    variation?: Variation
    scale?: number
    lootSpawnOffset?: Vector
}

interface LootSpawner {
    position: Vector
    table: string
}

export interface BuildingDefinition extends ObjectDefinition {
    spawnHitbox: Hitbox
    ceilingHitbox: Hitbox
    scopeHitbox: Hitbox
    hideOnMap?: boolean

    obstacles: BuildingObstacle[]
    lootSpawners?: LootSpawner[]

    floorImagePos: Vector
    ceilingImagePos: Vector
}

export const Buildings = new ObjectDefinitions<BuildingDefinition>([
    {
        idString: "house",
        name: "House",
        spawnHitbox: new ComplexHitbox([
            new RectangleHitbox(v(12, -33), v(42, 10)), // Garage
            new RectangleHitbox(v(-45, -37), v(12, 15)), // Main House
            new RectangleHitbox(v(-42, -37), v(-22, 34)) // Doorstep
        ]),
        ceilingHitbox: new ComplexHitbox([
            new RectangleHitbox(v(12, -33), v(42, 10)), // Garage
            new RectangleHitbox(v(-45, -37), v(12, 15)), // Main House
            new RectangleHitbox(v(-42, -37), v(-22, 34)) // Doorstep
        ]),
        scopeHitbox: new ComplexHitbox([
            new RectangleHitbox(v(12, -33), v(42, 10)), // Garage
            new RectangleHitbox(v(-45, -37), v(12, 15)), // Main House
            new RectangleHitbox(v(-42, -37), v(-22, 34)) // Doorstep
        ]),
        floorImagePos: v(0, 0),
        ceilingImagePos: v(0, -1.5),
        obstacles: [
            // Bathroom Left
            {
                id: "house_wall_3",
                position: v(-3.6, -8.5),
                rotation: 1
            },
            // Bathroom Top
            {
                id: "house_wall_2",
                position: v(-1.5, 2.8),
                rotation: 0
            },
            // Entrance Right
            {
                id: "house_wall_3",
                position: v(-25.2, -8.5),
                rotation: 1
            },
            // Kitchen Top
            {
                id: "house_wall_2",
                position: v(-20.55, 2.8),
                rotation: 0
            },
            // Living Room Bottom Right
            {
                id: "house_wall_2",
                position: v(6.35, 14.5),
                rotation: 0
            },
            // Living Room Left
            {
                id: "house_wall_2.5",
                position: v(-18.25, 25.6),
                rotation: 1
            },
            // Bedroom Bottom Left
            {
                id: "house_wall_2",
                position: v(-41, 14.5),
                rotation: 0
            },
            // Bedroom Bottom Right/Living Room Bottom Left
            {
                id: "house_wall_3",
                position: v(-17, 14.5),
                rotation: 0
            },
            {
                id: "toilet",
                position: v(7, -14.4),
                rotation: 2
            },
            {
                id: "stove",
                position: v(-9.3, -15.3),
                rotation: 2
            },
            {
                id: "fridge",
                position: v(-19.5, -15.3),
                rotation: 2
            },
            // Living Room Couch
            {
                id: "couch",
                position: v(-13.3, 26),
                rotation: 0
            },
            // Living Room Large Drawers
            {
                id: "drawer_large",
                position: v(8.5, 26),
                rotation: 3
            },
            // Living Room TV
            {
                id: "tv",
                position: v(11.5, 26),
                rotation: 0
            },
            // House Exterior
            {
                id: "house_exterior",
                position: v(0, 2.6),
                rotation: 0
            },
            // Chair Bottom
            {
                id: "chair",
                position: v(-41, -13),
                rotation: 0
            },
            // Chair Top
            {
                id: "chair",
                position: v(-41, -3),
                rotation: 2
            },
            {
                id: "table",
                position: v(-41, -8),
                rotation: 0
            },
            {
                id: "bed",
                position: v(-40.6, 27.5)
            },
            // Bedroom Bookshelf
            {
                id: "bookshelf",
                position: v(-21.6, 29.25),
                rotation: 1
            },
            // Bedroom Drawer
            {
                id: "drawer_small",
                position: v(-23, 19.3),
                rotation: 3
            },
            // Toilet Bookshelf
            {
                id: "bookshelf",
                position: v(-0.2, -12.5),
                rotation: 1
            },
            // Living Room Window
            {
                id: "window",
                position: v(-1.5, 37),
                rotation: 1
            },
            // Bedroom Window
            {
                id: "window",
                position: v(-28.5, 37),
                rotation: 1
            },
            // Dining Room Window
            {
                id: "window",
                position: v(-47.5, 8.5),
                rotation: 0
            }
        ]
    },
    {
        idString: "warehouse",
        name: "Warehouse",
        spawnHitbox: new RectangleHitbox(v(-30, -44), v(30, 44)),
        ceilingHitbox: new ComplexHitbox([
            new RectangleHitbox(v(-20, -40), v(20, 40))
        ]),
        scopeHitbox: new ComplexHitbox([
            new RectangleHitbox(v(-20, -35), v(20, 35))
        ]),

        floorImagePos: v(0, 0.31),
        ceilingImagePos: v(0, 0),
        obstacles: [
            {
                id: "warehouse_wall_1",
                position: v(-20, 0),
                rotation: 1
            },
            {
                id: "warehouse_wall_1",
                position: v(20, 0),
                rotation: 1
            },
            {
                id: "warehouse_wall_2",
                position: v(14, -34.4),
                rotation: 0
            },
            {
                id: "warehouse_wall_2",
                position: v(-14, -34.4),
                rotation: 0
            },
            {
                id: "warehouse_wall_2",
                position: v(14, 34.4),
                rotation: 0
            },
            {
                id: "warehouse_wall_2",
                position: v(-14, 34.4),
                rotation: 0
            },
            {
                id: "regular_crate",
                position: v(14, 28.5)
            },
            {
                id: "regular_crate",
                position: v(-14, 28.5)
            },
            {
                // TODO: better way of adding random obstacles
                get id() {
                    return weightedRandom(["regular_crate", "flint_crate"], [0.7, 0.3]);
                },
                position: v(-14, -28.5)
            },
            {
                id: "barrel",
                position: v(14.6, -29.2)
            },
            {
                id: "metal_shelf",
                position: v(-16, 0),
                rotation: 1
            },
            {
                id: "box",
                position: v(-15.7, 0),
                lootSpawnOffset: v(2.2, 0)
            },
            {
                id: "box",
                position: v(-15.8, 6.4),
                lootSpawnOffset: v(2.2, 0)
            },
            {
                id: "box",
                position: v(-15.7, -8),
                lootSpawnOffset: v(2.2, 0)
            },
            {
                id: "metal_shelf",
                position: v(16, 0),
                rotation: 1
            },
            {
                id: "box",
                position: v(15.8, 0),
                lootSpawnOffset: v(-2.2, 0)
            },
            {
                id: "box",
                position: v(15.7, 6),
                lootSpawnOffset: v(-2.2, 0)
            },
            {
                id: "box",
                position: v(15.6, -7),
                lootSpawnOffset: v(-2.2, 0)
            }
        ],

        lootSpawners: [
            {
                position: v(0, 0),
                table: "warehouse"
            }
        ]
    }
]);
