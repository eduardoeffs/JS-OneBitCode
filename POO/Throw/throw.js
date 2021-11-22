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
}

let fenixWeapon = new SpaceshipWeapon(10)

fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()





console.log(fenixWeapon)