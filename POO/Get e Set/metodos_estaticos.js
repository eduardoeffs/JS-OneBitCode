//quando queremos ter algo que não vai se alterar
//independente da instância do objeto

class ResourcesStation {
    constructor(name, montlyProcessing) {
        this.name = name
        this.montlyProcessing = montlyProcessing
    }

    static calculateProcessInHours (montlyProcessing, hours) {
        return montlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourcesStation.calculateProcessInHours(500,6)
console.log(totalProcessing)