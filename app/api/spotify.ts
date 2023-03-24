import fetch from "isomorphic-unfetch";

export default async function handler(
  req: { query: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
      end: { (): void; new (): any };
    };
  }
) {
  const { query } = req;
  const token =
    "BQABnzfFSsGWOdy2Evus34xRRd0blxJ5-H0gDlZDjboCtx8hxIxd0qPlYg4eoOWJVSnHUZEyHmZO24EuuWgKH0sBI-ga_ihp-CIRPsZmfqdBuUddPPwW2QU5bVUz3dlQ3aR5ie1qk0XqPLBtZXq4_GOcFQt2TEmFFL4soiDtCKu5-pZ6onheWDEkkwYMF-nDhDQf";
  const baseUrl = "https://api.spotify.com/v1";

  const response = await fetch(`${baseUrl}/${query.path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(response.status).end();
  }
}
