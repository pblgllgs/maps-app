import { MapView } from '../components'
import { BtnMyLocation } from '../components/BtnMyLocation'
import { ReactLogo } from '../components/ReactLogo'


export const HomeScreen = () => {
  return (
    <div>
        <MapView />
        <BtnMyLocation />
        <ReactLogo />
    </div>
  )
}
