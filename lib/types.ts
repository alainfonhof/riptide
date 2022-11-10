export type MythicPlusTeam = {
  name: string;
  description?: string;
  players: Player[];
  score: number;
};

export type Player = {
  name: string;
  wowClass: WoWClass;
};

export enum WoWClass {
  "DeathKnight" = "Death Knight",
  "DemonHunter" = "Demon Hunter",
  "Druid" = "Druid",
  "Evoker" = "Evoker",
  "Hunter" = "Hunter",
  "Mage" = "Mage",
  "Monk" = "Monk",
  "Paladin" = "Paladin",
  "Priest" = "Priest",
  "Rogue" = "Rogue",
  "Shaman" = "Shaman",
  "Warlock" = "Warlock",
  "Warrior" = "Warrior",
}
