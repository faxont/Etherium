class Character{
    constructor(strength,dexterity,intelligence,health){
        this.strength=strength;
        this.dexterity=dexterity;
        this.intelligence=intelligence;
        this.health=health;
        this.damageReductionHead=0;
        this.damageReductionTorso=0;
        this.damageReductionLeftArm=0;
        this.damageReductionRightArm=0;
        this.damageReductionLeftLeg=0;
        this.damageReductionRightLeg=0;
        this.inventory=[{
            "weapon":[
                {"name":"Fist","damage":1},
                {"name":"Sword","damage":5},
                {"name":"Axe","damage":7},
                {"name":"Bow","damage":4},
                {"name":"Crossbow","damage":6},
                {"name":"Staff","damage":3},
                {"name":"Spear","damage":6},
                {"name":"Dagger","damage":2},
                {"name":"Mace","damage":5},
                {"name":"Hammer","damage":7}
            ],
            "head":null,
            "torso":null,
            "leftArm":null,
            "rightArm":null,
            "leftLeg":null,
            "rightLeg":null,
            "neck":null,
            "ring1":null,
            "ring2":null,
            "cloak":null,
        },

        ];
    }

    calculateSecondaryAttributes(){
        this.hitPoints=this.strength;
        this.speed=(this.health+this.dexterity)/4;
        this.willpower=this.intelligence;
        this.fatigue=this.health;
    }

    selectWeaponByName(name) {
        let weapon = this.inventory[0].weapon.find(w => w.name === name);
        if (weapon) {
            this.selectedWeaponIndex = this.inventory[0].weapon.indexOf(weapon);
        } else {
            console.log(`Weapon ${name} not found in inventory.`);
        }
    }

    attack() {
        const selectedWeapon = this.inventory[0].weapon[this.selectedWeaponIndex];
        if (selectedWeapon) {
            return selectedWeapon.damage;
        } else {
            return 0; // No weapon equipped or selected
        }
    }
    
}
