(function() {var implementors = {};
implementors["fc_mapping_sync"] = [{"text":"impl&lt;Block:&nbsp;BlockT, C, B&gt; Stream for <a class=\"struct\" href=\"fc_mapping_sync/struct.MappingSyncWorker.html\" title=\"struct fc_mapping_sync::MappingSyncWorker\">MappingSyncWorker</a>&lt;Block, C, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: ProvideRuntimeApi&lt;Block&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.60.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + HeaderBackend&lt;Block&gt; + BlockOf,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: <a class=\"trait\" href=\"fp_rpc/trait.EthereumRuntimeRPCApi.html\" title=\"trait fp_rpc::EthereumRuntimeRPCApi\">EthereumRuntimeRPCApi</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Backend&lt;Block&gt;,&nbsp;</span>","synthetic":false,"types":["fc_mapping_sync::worker::MappingSyncWorker"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()