import locationHelperBuilder from '../history5/locationHelper'
import redirectUtil from '../helper/redirect'

export const { connectedRouterRedirect, connectedReduxRedirect } = redirectUtil({
  locationHelperBuilder,
})
