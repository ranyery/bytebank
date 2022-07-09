export default interface ITransferencia {
  id?: number | string;
  valor: number;
  destino: number;
  data?: Date | string;
}
