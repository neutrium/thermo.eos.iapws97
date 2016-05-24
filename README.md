# Neutrium.thermo.IAPWS97

## Introduction

Neutrium.thermo.IAPWS97 is a javascript implementation of the [IAPWS](http://www.iapws.org/) formulations of the thermodynamic properties of water and steam. The IAPWS papers implemented in Neutrium.thermo.IAPWS97 are as follows:

- [Revised Release on the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam 2007](http://www.iapws.org/relguide/IF97-Rev.html)
- [Revised Supplementary Release on Backward Equations for Pressure as a Function of Enthalpy and Entropy p(h,s) for Regions 1 and 2 of the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam](http://www.iapws.org/relguide/Supp-PHS12-2014.pdf)
- [Revised Supplementary Release on Backward Equations for the Functions T(p,h), v(p,h) and T(p,s), v(p,s) for Region 3 of the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam](http://www.iapws.org/relguide/Supp-Tv\(ph,ps\)3-2014.pdf)
- [Revised Supplementary Release on Backward Equations p(h,s) for Region 3, Equations as a Function of h and s for the Region Boundaries, and an Equation Tsat(h,s) for Region 4 of the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam](http://www.iapws.org/relguide/Supp-phs3-2014.pdf)
- [Revised Supplementary Release on Backward Equations for Specific Volume as a Function of Pressure and Temperature v(p,T) for Region 3 of the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam](http://www.iapws.org/relguide/Supp-VPT3-2014.pdf)
- [Revised Release on Surface Tension of Ordinary Water Substance 2014](http://www.iapws.org/relguide/Surf-H2O-2014.pdf)
- [Release on the IAPWS Formulation 2011 for the Thermal Conductivity of Ordinary Water Substance](http://www.iapws.org/relguide/ThCond.pdf)
- [Release on the IAPWS Formulation 2008 for the Viscosity of Ordinary Water Substance](http://www.iapws.org/relguide/visc.pdf)
- [Release on the Ionization Constant of H2O 2007](http://www.iapws.org/relguide/Ionization.pdf)

For specific details on range of applicability for the IAPWS please refer to the [Revised Release on the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam 2007](http://www.iapws.org/relguide/IF97-Rev.html).

## Getting Started

### Installing

You can install the Neutrium implementation of the IAPWS97 equation of state package using npm.

	npm install @neutrium/thermo.eos.iapws97 --save

### Including

#### Typescript

In typescript you can include the package as follows:

    import {IAPWS97_EoS} from "@neutrium/thermo.eos.iapws97"

    let EoS = new IAPWS97_EOS();

This module is built with the declaration files so type hinting should work once the module has been imported.

#### Node

    var EoS = require('@neutrium/thermo.eos.iapws97');

#### Browsers

Since version 2.0.0 this module has been converted to a commonjs (node) package. To use it in a browser environment you will need to use a tool like [browserify](http://browserify.org) to convert it to a web bundle.

#### Unicode Notes

This package makes use of utf8 characters for variable names and therefore should be handled appropriately. For example if bundled for browser use it would be included as follows:

	<script charset="utf-8" src="path-to-lib/IAPWS97-bundle.js"></script>

## Usage

### Calculating Properties

Steam and water properties can be calculated using the solve method and a supported combination of pressure (Pa), temperature (K), enthalpy (kJ/kg.K) and entropy (kJ/K.kg). For example (in typescript):

    import {IAPWS97_EOS} from "@neutrium/thermo.eos.iapws97"

    let EoS = new IAPWS97_EOS();
    let inputs = {
        "p" => 101325,
        "t" => 300
    }

    let state = EoS.solve(inputs);

The supported input combinations are Pressure/Temperature, Pressure/Enthalpy, Pressure/Entropy and Enthalpy/Entropy.

### Return Values

If your specified values lie within the applicable range for the IAWPS formulations you will be return an object containing the following properties:

	{
		p, 		// Pressure, p, Pa
		t, 		// Temperature, t, K
		v, 		// Specific volume, v, m^3/kg
		rho,	// Density, rho, kg/m^3
		u,		// Specific internal energy, u, kJ/kg
		s,		// Specific entropy, s, kJ/kg
		h, 		// Specific enthalpy, h, kJ/kg.K
		cp,		// Specific isobaric heat capacity, Cp kJ/kg.K
		cv,		// Specific isochoric heat capacity, Cv
		w,		// Speed of Sound, w, m/s
		mu,		// Viscosity cP,
		k,		// Thermal Conductivity W/m.K
		sigma,	// Surface Tension mN/m
		epsilon,// Dielectric constant
		ic		// Ionisation constant
	}

#### Typescript

If you are using Typescript the return valve from the solve method will be an instance of the State class from the @neutrium/thermo package.

#### Errors

If you try and calculate the properties outside the range of applicability as specified by IAWPS an exception will be thrown.

#### @neutrium/quantity Support

This package allows properties of the `State` class to be converted to [Neutrium Quantities](https://github.com/neutrium/quantity).

Simply request the results of the solve method as quantities:

	var result = IAPWS97_EoS.solve(3000000, 300).asQty();

This will allow you to easily convert each property as required:

	var psi = result.p.to('psi');

See the NeutriumJS.Quantity [readme](https://github.com/neutrium/quantity/blob/master/README.md) for more info.

## Testing

This pacakge is currently tested using all applicable tests provided in the IAWPS papers listed above. To run the tests, after cloning and installing package dependences via npm and run `npm task build` at the terminal.

## Donations

NeutriumJS is free software, but you can support the developers by [donating here](https://neutrium.net/donate/).

## Release Notes

| Version | Notes |
|:-------:|:------|
| 1.0.0	  | Initial Release |
| 1.0.5   | Add UMD definition |
| 1.1.0   | Optional NeutriumJS.convert support |
| 1.1.1	  | Change P and T keys to lower case |
| 1.1.2   | Added exception throwing for out of range case |
| 1.1.3   | Bug fixes for exception throwing logic |
| 1.2.0	  | Renamed package to NeutriumJS.thermo.IAPWS97 |
| 2.0.0   | Rename package, switch to Typescript and convert to npm module |

## License

[Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/legalcode)