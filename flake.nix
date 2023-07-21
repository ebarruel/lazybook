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

                    npmDepsHash = "sha256-3ypPoTDQwZjcB4ujgu58sBFHzZ+tkFTvQe/bW1MU0HE=";

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
                        cd client
                        echo "This is the client (dev)"
                        export TERM="xterm-256color"
                    '';
                };
                client = mkShell {
                    buildInputs = inPkgs.client;
                    shellHook = ''
                        cd client
                        echo "This is the client (prod)"
                        export TERM="xterm-256color"
                    '';
                };
                server = mkShell {
                    buildInputs = inPkgs.server;
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
