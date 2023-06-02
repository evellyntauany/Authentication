
import { setupAPIClient } from "../../hooks/useApi";

const api = setupAPIClient()

export function Cha(userId: number){
      console.log('user recebeido>>',userId);

      api
      .get(`/chamadoId/${userId}`)
      .then((res) => {
        const id = res.data
        console.log('O QUE ELE TROUXE>>',res.data);
        return id
      })
      .catch((error) => {
      return(error)
      })
      
}