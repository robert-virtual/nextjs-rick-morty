import { gql } from "@apollo/client";

export interface ICharacters {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface IGetCharacters {
  characters: { results: ICharacters[] };
}

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;
