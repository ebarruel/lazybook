{
description = "Flake for Go backend with Caddy and JS frontend with Ionic and SvelteKit";

inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    gomod2nix.url = "github:nix-community/gomod2nix";
};

outputs = inputs@{ self, nixpkgs, flake-utils, gomod2nix }:
    flake-utils.lib.eachSystem [
            "x86_64-darwin"   # MacOS (Intel)
            "aarch64-linux"   # Raspberry Pi OS
        ] (system:
        let
            pkgs = nixpkgs.legacyPackages.${system};

            inPkgs = with pkgs; {
                dev = {
                    client = [
                        prefetch-npm-deps
                        playwright-test
                    ];
                };

                client = [
                    nodejs-18_x
                    nodePackages.npm
                ];

                server = [
                    go gopls gotools go-tools
                    gomod2nix.packages.${system}.default
                ];
            };
        in {
            packages = {
                default = pkgs.buildNpmPackage {
                    name = "lazybook-client";

                    buildInputs = inPkgs.client;

                    src = ./client;

                    npmDepsHash = "sha256-Z551yNOyiB0U/SpLWnZnG2WNZPG4boLSxXwGyzcq5z4=";

                    npmBuild = "npm run build";

                    installPhase = ''
                        mkdir $out
                        cp client/dist/index.html $out
                    '';
                };
                server = pkgs.buildGoModule {
                    name = "lazybook-server";

                    buildInputs = inPkgs.server;

                    src = ./server;
                    modules = .server/gomod2nix.toml;

                    vendorSha256 = null;
                };
            };

            devShells = with pkgs; {
                default = mkShell {
                    buildInputs = inPkgs.client ++ inPkgs.dev.client;
                    shellHook = ''
                        echo "This is the client (dev) env"
                        export TERM="xterm-256color"
                    '';
                };
                client = mkShell {
                    buildInputs = inPkgs.client;
                    shellHook = ''
                        echo "This is the client (prod) env"
                        export TERM="xterm-256color"
                    '';
                };
                server = mkShell {
                    buildInputs = inPkgs.server;
                    shellHook = ''
                        echo "This is the server env"
                        export TERM="xterm-256color"
                    '';
                };
            };
        }
    );
}
