import styles from "../styles/Toggle.module.css"

const ChangeUnitToggle = ({ isCelsius, setIsCelsius }) => {
  const talla = (e)=> {
    setIsCelsius(e.target.checked)
  }
  return (
    <input type="checkbox" className={styles.toggle} checked={isCelsius} onChange={talla} />
  )
}

export default ChangeUnitToggle