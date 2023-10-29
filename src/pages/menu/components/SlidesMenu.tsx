import { IonContent, IonImg, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./SlidesMenu.css"

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const SlidesMenu = () => {
  return (
    <>
      <Swiper className='carrosel-menu'>
        <SwiperSlide>
          <IonImg
            src="src/assets/menu/slide-menu-1.svg"
            alt="header logo"
            className="slide-menu-1"
          />
        </SwiperSlide>

        <SwiperSlide>
        <IonImg
            src="src/assets/menu/slide-menu-1.svg"
            alt="header logo"
            className="slide-menu-1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <IonImg
            src="src/assets/menu/slide-menu-1.svg"
            alt="header logo"
            className="slide-menu-1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export { SlidesMenu }
export default SlidesMenu
