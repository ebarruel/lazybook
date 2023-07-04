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

            clientInputs = with pkgs; [
                nodejs-18_x
                nodePackages.npm
                nodePackages.ionic
            ];

            serverInputs = with pkgs; [
                go gopls gotools go-tools
                gomod2nix.packages.${system}.default
            ];
        in {
            packages = {
                default = pkgs.buildNpmPackage {
                    name = "lazybook-client";

                    buildInputs = clientInputs;

                    src = ./client;

                    npmDepsHash = "sha256-QFX2AkKL7ZeK48Mmc3h2Qh1tZbJ33BBnjz1yKtS45YE=";

                    npmBuild = "npm run build";

                    installPhase = ''
                        mkdir $out
                        cp client/dist/index.html $out
                    '';
                };
                server = pkgs.buildGoModule {
                    name = "lazybook-server";

                    buildInputs = serverInputs;

                    src = ./server;
                    modules = .server/gomod2nix.toml;

                    vendorSha256 = null;
                };
            };

            devShells = with pkgs; {
                default = mkShell {
                    buildInputs = clientInputs;
                    shellHook = ''
                        cd client
                        echo "This is the client"
                        export TERM="xterm-256color"
                    '';
                };
                server = mkShell {
                    buildInputs = serverInputs;
                    shellHook = ''
                        cd server
                        echo "This is the server"
                        export TERM="xterm-256color"
                    '';
                };
            };
        }
    );
}
