var astrodev = {
    nome: "Astrodev",
    age: 29,
    cumprimentar: function (nome) {
        console.log("oi", nome);
    }
};
astrodev.cumprimentar("Matheus");
// enum MarcaDeCarro {
//     FIAT = "Fiat",
//     VOLKSWAGEN = "Volkswagen"
// }
// type carro = { 
//     marca: string,
//     capacidadeDoTanque: number,
//     temMotorFlex: boolean
//     calculaListrosDeGasolina: (km: number) => number
// }
// const uno: carro = {
//     marca: MarcaDeCarro.FIAT,
//     capacidadeDoTanque: 50,
//     temMotorFlex: false,
//     calculaListrosDeGasolina: (km: number): number => {
//         return 0.25 * km
//     }
// }
// const gol: carro = {
//     marca: MarcaDeCarro.VOLKSWAGEN,
//     capacidadeDoTanque: 45, 
//     temMotorFlex: true,
//     calculaListrosDeGasolina: (km: number): number => {
//         return 0.25 * km
// }
// }
// const frota: carro[] = [uno, gol]
// function buscarCarros(carros: carro[], marca?: MarcaDeCarro): carro[]{
//     const resultado: carro[] = carros.filter(
//         carro => carro.marca === marca
//     )
//     return resultado
// }
// const carrosDaFiat : carro[] = buscarCarros(frota)
// console.log(carrosDaFiat)
// enum LabenuClasses {
//     T01 = "newton",
//     T02 = "bouman",
//     T03 = "julian",
//     T04 = "sagan"
// }
// enum LabenuNota {
//     A = 5,
//     B = 4,
//     C = 3, 
//     D = 2,
//     E = 1,
//     F = 0
// }
// const alice = {
//     turma: LabenuClasses.T01,
//     nota: LabenuNota.A
// }
// const bob = {
//     turma: LabenuClasses.T01,
//     nota: LabenuNota.C
// }
