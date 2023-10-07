import CosIcon from "./CosIcon.js"
import styles from "./HeaderCos.module.css"
import { useContext } from "react"
import Context from "../../store/Context.js"

const Cos = (props) => {
    const ContextValue = useContext(Context)

    let numberOfMeals = ContextValue.items.reduce((currentValue,item) => {
        return currentValue+item.amount
    },0)

   
    return (
            <button className={styles.button} onClick={props.onClick} >
             <span className={styles.icon}> <CosIcon/> </span>
             <span>Coș</span>
             <span className={styles.badge}>{numberOfMeals}</span>
            </button>
    )
}
export default Cos;