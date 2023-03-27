export class Hero {
  id!: number;
  name!: string;
  slug!: string;
  powerstats!: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance!: {
    gender: string;
    race: string;
    height: [{},{}];
    weight: [{}, {}];
    eyeColor: string;
    hairColor: string;
  }
  biography!: {
    fullName: string;
    placeOfBirth: string;
    alterEgos: string;
    publisher: string;
    alignment: string;
  };
  work!: {
    occupation: string;
    base: string;
  };
  connections!: {
    groupAffiliation: string;
    relatives: string;
  };
  images!: {
    sm: string;
    md: string;
    lg: string;
  };
}
