(function() {var implementors = {};
implementors["pallet_evm_precompile_blake2"] = [{"text":"impl <a class=\"trait\" href=\"fp_evm/precompile/trait.Precompile.html\" title=\"trait fp_evm::precompile::Precompile\">Precompile</a> for <a class=\"struct\" href=\"pallet_evm_precompile_blake2/struct.Blake2F.html\" title=\"struct pallet_evm_precompile_blake2::Blake2F\">Blake2F</a>","synthetic":false,"types":["pallet_evm_precompile_blake2::Blake2F"]}];
implementors["pallet_evm_precompile_bn128"] = [{"text":"impl <a class=\"trait\" href=\"fp_evm/precompile/trait.Precompile.html\" title=\"trait fp_evm::precompile::Precompile\">Precompile</a> for <a class=\"struct\" href=\"pallet_evm_precompile_bn128/struct.Bn128Add.html\" title=\"struct pallet_evm_precompile_bn128::Bn128Add\">Bn128Add</a>","synthetic":false,"types":["pallet_evm_precompile_bn128::Bn128Add"]},{"text":"impl <a class=\"trait\" href=\"fp_evm/precompile/trait.Precompile.html\" title=\"trait fp_evm::precompile::Precompile\">Precompile</a> for <a class=\"struct\" href=\"pallet_evm_precompile_bn128/struct.Bn128Mul.html\" title=\"struct pallet_evm_precompile_bn128::Bn128Mul\">Bn128Mul</a>","synthetic":false,"types":["pallet_evm_precompile_bn128::Bn128Mul"]},{"text":"impl <a class=\"trait\" href=\"fp_evm/precompile/trait.Precompile.html\" title=\"trait fp_evm::precompile::Precompile\">Precompile</a> for <a class=\"struct\" href=\"pallet_evm_precompile_bn128/struct.Bn128Pairing.html\" title=\"struct pallet_evm_precompile_bn128::Bn128Pairing\">Bn128Pairing</a>","synthetic":false,"types":["pallet_evm_precompile_bn128::Bn128Pairing"]}];
implementors["pallet_evm_precompile_dispatch"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"fp_evm/precompile/trait.Precompile.html\" title=\"trait fp_evm::precompile::Precompile\">Precompile</a> for <a class=\"struct\" href=\"pallet_evm_precompile_dispatch/struct.Dispatch.html\" title=\"struct pallet_evm_precompile_dispatch::Dispatch\">Dispatch</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_evm/pallet/trait.Config.html\" title=\"trait pallet_evm::pallet::Config\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.60.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T::AccountId&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_dispatch::Dispatch"]}];
implementors["pallet_evm_precompile_modexp"] = [{"text":"impl <a class=\"trait\" href=\"fp_evm/precompile/trait.Precompile.html\" title=\"trait fp_evm::precompile::Precompile\">Precompile</a> for <a class=\"struct\" href=\"pallet_evm_precompile_modexp/struct.Modexp.html\" title=\"struct pallet_evm_precompile_modexp::Modexp\">Modexp</a>","synthetic":false,"types":["pallet_evm_precompile_modexp::Modexp"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()