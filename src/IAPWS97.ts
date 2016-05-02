import {EquationOfState, State} from "@neutrium/thermo";
import {solve as PT} from './PT';
import {solve as PH} from './PH';
import {solve as PS} from './PS';
import {solve as HS} from './HS';

export class IAPWS97_EoS extends EquationOfState
{
    modes = [
        ['p','t'],
        ['p', 'h'],
        ['p', 's'],
        ['h', 's']
    ];
    name = "IAPWS97 formulations of the thermodynamic properties of water and steam";

    public solve(inputs : any)
    {
        let mode = this.findModeIndex(inputs),
            r : State,
            p : number;

        if (0 <= mode && mode <= 2)
        {
            p = inputs.p/1000000;   // Convert Pa to MPa for the calculation
        }

        switch(mode)
        {
            case 0 : r = PT(p, inputs.t); break;           // P-T mode
            case 1 : r = PH(p, inputs.h); break;           // P-H mode
            case 2 : r = PS(p, inputs.s); break;           // P-S mode
            case 3 : r = HS(inputs.h, inputs.s); break;   // H-S mode
            default : throw new Error('Insufficent inputs provided.');
        }

        return r;
    }
}