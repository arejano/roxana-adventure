//Assemple
let ENTITY_COUNTER: number = 0;

export type EntityID = string;
export type EntityTAG = number | string;

export interface IEntity {
  id: EntityID
}



// Class

export class Entity implements IEntity {
  id: EntityID = `${Date.now()}_${(ENTITY_COUNTER++).toString()}`;

  constructor() { }
}

export class EntityStorage {
  entities: Map<EntityID, IEntity> = new Map();
}