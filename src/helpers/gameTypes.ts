export interface IFicha {
  value: string;
  gameId: string;
  player: string;
  position: number;
  fichaId: number;
  renderPos: number;
}

export interface IGameStatus {
  location: any;
  fichas: IFicha[];
  player: string;
  gameId: string;
  dispatch: any;
  fichasInPlay: any;
  gameStatus: any;
}
