"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var thermo_1 = require("@neutrium/thermo");
var PT_1 = require('./PT');
var PH_1 = require('./PH');
var PS_1 = require('./PS');
var HS_1 = require('./HS');
var IAPWS97_EoS = (function (_super) {
    __extends(IAPWS97_EoS, _super);
    function IAPWS97_EoS() {
        _super.apply(this, arguments);
        this.modes = [
            ['p', 't'],
            ['p', 'h'],
            ['p', 's'],
            ['h', 's']
        ];
        this.name = "IAPWS97 formulations of the thermodynamic properties of water and steam";
    }
    IAPWS97_EoS.prototype.solve = function (inputs) {
        var mode = this.findModeIndex(inputs), r, p;
        if (0 <= mode && mode <= 2) {
            p = inputs.p / 1000000; // Convert Pa to MPa for the calculation
        }
        switch (mode) {
            case 0:
                r = PT_1.solve(p, inputs.t);
                break; // P-T mode
            case 1:
                r = PH_1.solve(p, inputs.h);
                break; // P-H mode
            case 2:
                r = PS_1.solve(p, inputs.s);
                break; // P-S mode
            case 3:
                r = HS_1.solve(inputs.h, inputs.s);
                break; // H-S mode
            default: throw new Error('Insufficent inputs provided.');
        }
        return r;
    };
    return IAPWS97_EoS;
}(thermo_1.EquationOfState));
exports.IAPWS97_EoS = IAPWS97_EoS;
