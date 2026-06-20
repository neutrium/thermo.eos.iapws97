"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAPWS97_EoS = void 0;
const thermo_1 = require("@neutrium/thermo");
const PT_1 = require("./PT");
const PH_1 = require("./PH");
const PS_1 = require("./PS");
const HS_1 = require("./HS");
class IAPWS97_EoS extends thermo_1.EquationOfState {
    constructor() {
        super(...arguments);
        this.modes = [
            ['p', 't'],
            ['p', 'h'],
            ['p', 's'],
            ['h', 's']
        ];
        this.name = "IAPWS97 formulations of the thermodynamic properties of water and steam";
    }
    solve(inputs) {
        let mode = this.findModeIndex(inputs), r = null, p = null;
        if (0 <= mode && mode <= 2) {
            p = inputs.p / 1000000; // Convert Pa to MPa for the calculation
        }
        if (p !== null) {
            switch (mode) {
                case 0:
                    r = (0, PT_1.solve)(p, inputs.t);
                    break; // P-T mode
                case 1:
                    r = (0, PH_1.solve)(p, inputs.h);
                    break; // P-H mode
                case 2:
                    r = (0, PS_1.solve)(p, inputs.s);
                    break; // P-S mode
                case 3:
                    r = (0, HS_1.solve)(inputs.h, inputs.s);
                    break; // H-S mode
            }
        }
        if (!r) {
            throw new Error('Failed to solve for the given inputs.');
        }
        return r;
    }
}
exports.IAPWS97_EoS = IAPWS97_EoS;
//# sourceMappingURL=IAPWS97.js.map