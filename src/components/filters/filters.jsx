import styles from './filters.module.scss'
import filters from '../../data/filters.json'

console.log(filters)

const Filter = filter => {
  console.log(filter)
  return (
    <div className={styles.filterContainer}>

    </div>
  )
}

const Filters = () => {
  return (
    <div className={styles.container}>
      <h1>Filters</h1>
      {filters.map(filter => (
        <Filter filter={filter} key={filter.id} />
      ))}
    </div>
  )
}

export default Filters