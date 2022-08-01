function CreateList(start, end) {
  const list = []
  for (let i = start; i <= end; i++) {
    list.push(i)
  }
  return list
}

function GameParams({ setSideSize }) {
  const allSize = CreateList(3, 21)
  const handleChange = (event) => {
    setSideSize(event.target.value)
  }
  return (
    <div>
      <h2>Bienvenue dans mon app 😄</h2>
      <label htmlFor="selectSize">Choisissez la taille de la grille : </label>
      <select id="selectSize" onChange={handleChange}>
        {allSize.map((size, index) => (
          <option key={index} value={size}>
            {size} × {size}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GameParams
