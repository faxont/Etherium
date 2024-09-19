class Character{
    constructor(name,strength,dexterity,intelligence,health){
        this.name=name;
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
                {"name":"Fist","damage":damageTable[this.strength-1+0]},
                {"name":"Sword","damage":damageTable[this.strength-1+3]},
                {"name":"Axe","damage":damageTable[this.strength-1+7]},
                {"name":"Bow","damage":damageTable[this.strength-1+4]},
                {"name":"Crossbow","damage":damageTable[this.strength-1+6]},
                {"name":"Staff","damage":damageTable[this.strength-1+3]},
                {"name":"Spear","damage":damageTable[this.strength-1+3]},
                {"name":"Dagger","damage":damageTable[this.strength-1+2]},
                {"name":"Mace","damage":damageTable[this.strength-1+5]},
                {"name":"Hammer","damage":damageTable[this.strength-1+7]}
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

    display(xOffset){
        context.fillStyle = 'black';
        context.font = '20px Arial';
        context.fillText(`Name: ${this.name}`, xOffset, 20);
        context.fillText(`Strength: ${this.strength}`, xOffset, 40);
        context.fillText(`Dexterity: ${this.dexterity}`, xOffset, 60);
        context.fillText(`Intelligence: ${this.intelligence}`, xOffset, 80);
        context.fillText(`Health: ${this.health}`, xOffset, 100);
        context.fillText(`Hit Points: ${this.hitPoints}`, xOffset, 120);
        context.fillText(`Speed: ${this.speed}`, xOffset, 140);
        context.fillText(`Willpower: ${this.willpower}`, xOffset, 160);
        context.fillText(`Fatigue: ${this.fatigue}`, xOffset, 180);
        context.fillText(`DR Head: ${this.damageReductionHead}`, xOffset, 200);
        context.fillText(`DR Torso: ${this.damageReductionTorso}`, xOffset, 220);
        context.fillText(`DR Left Arm: ${this.damageReductionLeftArm}`, xOffset, 240);
        context.fillText(`DR Right Arm: ${this.damageReductionRightArm}`, xOffset, 260);
        context.fillText(`DR Left Leg: ${this.damageReductionLeftLeg}`, xOffset, 280);
        context.fillText(`DR Right Leg: ${this.damageReductionRightLeg}`, xOffset, 300);
        context.fillText(`Weapon: ${this.inventory[0].weapon[this.selectedWeaponIndex].name}`, xOffset, 320);
        context.fillText(`Damage: ${this.inventory[0].weapon[this.selectedWeaponIndex].damage}`, xOffset,
        340);
    }
    
}
