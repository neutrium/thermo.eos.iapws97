var hs = require('../dist/HS');

describe("NeutriumJS.thermo.IAPWS97.HS Enthalphy-Entropy equations", function() {

	describe("Boundary/auxiliary equations", function() {
		describe("equation h\"2c3b(s)", function() {
			it('correct results for s = 5.5 kJ/kg.K', function() {
				expect(+hs.b2c3b_S_H(5.5).toFixed(6)).toEqual(2687.693850);
				//expect(+hs.b2c3b_S_H(5.5).toFixed(6)).toEqual(26787.693850);
			});

			it('correct results for s = 5.0 kJ/kg.K', function() {
				expect(+hs.b2c3b_S_H(5).toFixed(6)).toEqual(2451.623609);
			});

			it('correct results for s = 4.5 kJ/kg.K', function() {
				expect(+hs.b2c3b_S_H(4.5).toFixed(6)).toEqual(2144.360448);
			});
		});

		describe("equation h_B13(s)", function() {

			it('correct results for s = 3.7 kJ/kg.K', function() {
				expect(+hs.b13_S_H(3.7).toFixed(6)).toEqual(1632.525047);
			});

			it('correct results for s = 3.6 kJ/kg.K', function() {
				expect(+hs.b13_S_H(3.6).toFixed(6)).toEqual(1593.027214);
			});

			it('correct results for s = 3.5 kJ/kg.K', function() {
				expect(+hs.b13_S_H(3.5).toFixed(6)).toEqual(1566.104611);
			});
		});

		describe("equation T_B23(h,s)", function() {

			it('correct results for h = 2600 kJ/kg, s = 5.1 kJ/kg.K', function() {
				expect(+hs.b23_HS_T(2600, 5.1).toFixed(7)).toEqual(713.5259364);
			});

			it('correct results for h = 2700 kJ/kg, s = 5.15 kJ/kg.K', function() {
				expect(+hs.b23_HS_T(2700, 5.15).toFixed(7)).toEqual(768.5345532);
			});

			it('correct results for h = 2800 kJ/kg, s = 5.2 kJ/kg.K', function() {
				expect(+hs.b23_HS_T(2800, 5.2).toFixed(7)).toEqual(817.6202120);
			});
		});

		describe("equation H_14", function() {

			it('correct results for s = 1 kJ/kg.K', function() {
				expect(+hs.b14_S_H(1).toFixed(7)).toEqual(308.5509647);
			});

			it('correct results for s = 2 kJ/kg.K', function() {
				expect(+hs.b14_S_H(2).toFixed(7)).toEqual(700.6304472);
			});

			it('correct results for s = 3.0 kJ/kg.K', function() {
				expect(+hs.b14_S_H(3).toFixed(6)).toEqual(1198.359754);
			});

		});


		describe("equation h'_3a(s)", function() {

			it('correct results for s = 3.8 kJ/kg.K', function() {
				expect(+hs.b3A_S_H(3.8).toFixed(6)).toEqual(1685.025565);
			});

			it('correct results for s = 4.0 kJ/kg.K', function() {
				expect(+hs.b3A_S_H(4).toFixed(6)).toEqual(1816.891476);
			});

			it('correct results for s = 4.2 kJ/kg.K', function() {
				expect(+hs.b3A_S_H(4.2).toFixed(6)).toEqual(1949.352563);
			});
		});
	});

	describe("HS Region 1", function() {

		describe("correct results for h = 0.001 kJ/kg, s = 0 kJ/kg.K", function() {
			var result;

			beforeAll(function() {
				result = hs.solve(0.001, 0);
			});

			it('Pressure (P) is correct', function() {
				expect(+result.p.toFixed(7)).toEqual(980.0980612);
			});
		});

		describe("correct results for h = 90 kJ/kg, s = 0 kJ/kg.K", function() {
			var result;

			beforeAll(function() {
				result = hs.solve(90, 0);
			});

			it('Pressure (P) is correct', function() {
				expect(+result.p.toFixed(2)).toEqual(91929547.27);
			});
		});

		describe("correct results for h = 1500 kJ/kg, s = 3.4 kJ/kg.K", function() {
			var result;

			beforeAll(function() {
				result = hs.solve(1500, 3.4);
			});

			it('Pressure (P) is correct', function() {
				expect(+result.p.toFixed(2)).toEqual(58682944.23);
			});
		});
	});

	describe("HS Region 2", function() {

		describe("Boundary/auxiliary equations", function() {
			describe("2ab boundary equation", function() {
				it('Pressure (P) is correct', function() {
					expect(+hs.b2ab_S_H(7).toFixed(6)).toEqual(3376.437884);
				});
			});

			describe("2ab saturated vapor line Equation h\"_2ab(s)", function() {

				describe("correct results for s = 7.0 kJ/kg.K", function() {
					it('Enthalpy (h) is correct', function() {
						expect(+hs.b2ab_S_Hsat(7).toFixed(6)).toEqual(2723.729985);
					});
				});

				describe("correct results for s = 8.0 kJ/kg.K", function() {
					beforeAll(function() {
						result = hs.b2ab_S_Hsat(8);
					});

					it('Enthalpy (h) is correct', function() {
						expect(+result.toFixed(6)).toEqual(2599.047210);
					});
				});

				describe("correct results for s = 9.0 kJ/kg.K", function() {
					beforeAll(function() {
						result = hs.b2ab_S_Hsat(9);
					});

					it('Enthalpy (h) is correct', function() {
						expect(+result.toFixed(6)).toEqual(2511.861477);
					});
				});
			});
		});

		describe("a", function() {

			describe("correct results for h = 2800 kJ/kg, s = 6.5 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2800, 6.5);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(3)).toEqual(1371012.767);
				});
			});

			describe("correct results for h = 2800 kJ/kg, s = 9.5 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2800, 9.5);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(6)).toEqual(1879.743844);
				});
			});

			describe("correct results for h = 4100 kJ/kg, s = 9.5 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(4100, 9.5);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(4)).toEqual(102478.8997);
				});
			});
		});

		describe("b", function() {

			describe("correct results for h = 2800 kJ/kg, s = 6 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2800, 6);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(3)).toEqual(4793911.442);
				});
			});

			describe("correct results for h = 3600 kJ/kg, s = 6 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(3600, 6);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(83955192.09);
				});
			});

			describe("correct results for h = 3600 kJ/kg, s = 7 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(3600, 7);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(3)).toEqual(7527161.441);
				});
			});
		});

		describe("c", function() {

			describe("correct results for h = 2800 kJ/kg, s = 5.1 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2800, 5.1);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(1)).toEqual(94392020.6);
				});
			});

			describe("correct results for h = 2800 kJ/kg, s = 5.8 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2800, 5.8);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(3)).toEqual(8414574.124);
				});
			});

			describe("correct results for h = 3400 kJ/kg, s = 5.8 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(3400, 5.8);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(83769038.79);
				});
			});
		});
	});

	describe("HS Region 3", function() {
		describe("a", function() {

			describe("correct results for h = 1700 kJ/kg, s = 3.8 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(1700, 3.8);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(25557032.46);
				});
			});

			describe("correct results for h = 2000 kJ/kg, s = 4.2 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2000, 4.2);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(45408734.68);
				});
			});

			describe("correct results for h = 2100 kJ/kg, s = 4.3 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2100, 4.3);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(1)).toEqual(60781233.4);
				});
			});
		});

		describe("b", function() {

			describe("correct results for h = 2600 kJ/kg, s = 5.1 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2600, 5.1);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(34349992.63);
				});
			});

			describe("correct results for h = 2400 kJ/kg, s = 4.7 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2400, 4.7);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(63639248.87);
				});
			});

			describe("correct results for h = 2700 kJ/kg, s = 5 kJ/kg.K", function() {
				var result;

				beforeAll(function() {
					result = hs.solve(2700, 5);
				});

				it('Pressure (P) is correct', function() {
					expect(+result.p.toFixed(2)).toEqual(88390432.81);
				});
			});
		});
	});

	describe("HS region 4", function() {

		describe("Tsat(h,s)", function() {
			describe("correct results for h = 1800 kJ/kg, s = 5.3 kJ/kg.K", function() {
				it('Enthalpy (h) is correct', function() {
					expect(+hs.r4_HS_Tsat(1800, 5.3).toFixed(7)).toEqual(346.8475498);
				});
			});

			describe("correct results for h = 2400 kJ/kg, s = 6.0 kJ/kg.K", function() {
				it('Enthalpy (h) is correct', function() {
					expect(+hs.r4_HS_Tsat(2400, 6).toFixed(7)).toEqual(425.1373305);
				});
			});

			describe("correct results for h = 2500 kJ/kg, s = 5.5 kJ/kg.K", function() {
				it('Enthalpy (h) is correct', function() {
					expect(+hs.r4_HS_Tsat(2500, 5.5).toFixed(7)).toEqual(522.5579013);
				});
			});
		});
	});
});
