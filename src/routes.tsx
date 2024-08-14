interface Path {
  readonly home?: string;
  readonly Register?: string;
  readonly Login?: string;
  readonly Man?: string;
  readonly Woman?: string;
  readonly FoF?: string;
}

export const Paths: Path = {
  home: "/",
  Register: "/Register",
  Login: "/Login",
  Man: "/Man",
  Woman: "/Woman",
  FoF: "/*",
};
