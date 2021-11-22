class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        console.log("Bang!")
        if(this.shotsLeft <= 0) {
            throw new Error("Arma " + this.identifier + " sem munição!")
        } else {
            this.shotsLeft -= 1
        }       
    }

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
} catch(e) {
    console.log(e.message + " Recarregando..")
    fenixWeapon.reload()
} finally {
    console.log("Arma deu bons tiros!")
}




console.log(fenixWeapon)