import { EquationOfState, State } from "@neutrium/thermo";
export declare class IAPWS97_EoS extends EquationOfState {
    modes: string[][];
    name: string;
    solve(inputs: any): State;
}
