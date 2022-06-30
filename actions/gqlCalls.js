import { gql } from "@apollo/client";
import client from "../appoloClient";

export async function getCountryData() {
    const { data } = await client.query({
      query: gql`
      query CountryQuery {
        countries {
          code
          name
          native
          capital
          emoji
          currency
          states{
            name
          }
          languages{
            name
          }
        }
      }
      `,
    });

    const queryResult = data && data.countries ||[]

    if(queryResult&&queryResult.length){
      const selectionOptions = []
      const response = queryResult.map((item,index) => {
        const { states, languages, native, name  }=item;
        selectionOptions.push({value: index, label: item.name});
        const languageArray = languages && languages.length && languages.map(l=>(l.name))||[];
        const statesArray = states && states.length && states.map(s=>s.name)||[];
        const nativeStr = native===name?'': native;
        return {...item,languages:languageArray, states:statesArray, native: nativeStr }
      });
      return {selectionOptions, response};
    }
    return [];
}