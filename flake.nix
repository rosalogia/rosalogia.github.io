{
  description = "Rosalogia personal site built with Hugo";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        packages.default = pkgs.stdenv.mkDerivation {
          pname = "rosalogia-site";
          version = "0.1.0";
          src = ./.;
          nativeBuildInputs = [ pkgs.hugo ];
          buildPhase = ''
            hugo --minify
          '';
          installPhase = ''
            cp -r public $out
          '';
        };

        devShells.default = pkgs.mkShell {
          packages = [ pkgs.hugo ];
        };
      }
    );
}
