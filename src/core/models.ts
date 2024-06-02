//Models and Interfaces - TODO: Refactor!
export interface WindowSizes {
  width: number,
  height: number,
}

export enum SceneList {
  FirstStage,
  SecondStage,
  ThirdStage,
}

export enum WorldStatus {
  Loading,
  Running,
  Paused,
}