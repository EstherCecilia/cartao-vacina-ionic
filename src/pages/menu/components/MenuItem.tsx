import { IonImg } from '@ionic/react'
import "./MenuItem.css"

interface IMenuItem {
  srcImg: string,
  text: string,
}

const MenuItem = (props: IMenuItem) => {
  return (
    <>
      <div className='menu-item'>
        <IonImg
          src={props.srcImg}
        />

        <p>
          {props.text}
        </p>

      </div>
    </>
  )
}

export { MenuItem }
export default MenuItem
